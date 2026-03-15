import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv, UserConfigExport, ConfigEnv } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import UnoCSS from 'unocss/vite';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { QuasarResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

import { compression } from 'vite-plugin-compression2';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteVConsole } from 'vite-plugin-vconsole';
import VueDevTools from 'vite-plugin-vue-devtools';

import { visualizer } from 'rollup-plugin-visualizer';

import { HerodotusResolver } from '@herodotus-cloud/components/resolver';

const lifecycle = process.env.npm_lifecycle_event;

// https://vitejs.dev/config/
// mode 环境变量名，若配置有.env.test，启动时 --mode test，这里的mode就是test
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    // 增加基础路径配置，修复在反向代理指向子路径的配置方式下，出现静态资源 404 问题
    base: env.VITE_BASE_PATH,
    plugins: [
      UnoCSS({
        configFile: './uno.config.ts',
      }),
      VueDevTools(),
      Vue({
        template: { transformAssetUrls },
      }),
      quasar({
        sassVariables: fileURLToPath(new URL('./src/static/styles/quasar.variables.sass', import.meta.url)),
      }),
      AutoImport({
        dts: 'types/auto-imports.d.ts',
        imports: [
          'vue',
          'quasar',
          {
            pinia: ['defineStore', 'storeToRefs'],
          },
        ],
        eslintrc: {
          enabled: true,
        },
        vueTemplate: true,
      }),
      Components({
        dts: 'types/components.d.ts',
        resolvers: [
          QuasarResolver(),
          HerodotusResolver(),
          IconsResolver({
            customCollections: ['custom'],
          }),
        ],
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
        customCollections: {
          // 这里是存放svg图标的文件地址，custom是自定义图标库的名称
          custom: FileSystemIconLoader('./src/assets/svg'),
        },
      }),
      compression(),
      // VConsole 调试工具配置，若没有此配置，则调试工具控制台不会打印日志
      viteVConsole({
        entry: [fileURLToPath(new URL('./src/main.ts', import.meta.url))], // entry file
        enabled: command !== 'build' || mode === 'development', // build production
        config: {
          // vconsole options
          maxLogNumber: 1000,
          theme: 'light',
        },
      }),
      createHtmlPlugin({
        inject: {
          data: {
            // 查找.env.test文件里面的VITE_PROJECT_TITLE，请以VITE_标识开头
            title: env.VITE_PROJECT_NAME,
          },
        },
      }),
      lifecycle === 'report' ? visualizer({ open: true, brotliSize: true, filename: 'report.html' }) : null,
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/static/styles/global.scss" as *;`,
        },
      },
    },
    optimizeDeps: {
      exclude: ['vue-router'],
      include: ['vconsole'],
    },
    define: { 'process.env': env },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('src', import.meta.url)),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-bundler.js',
      },
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/socket': {
          target: env.VITE_WS_URL,
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/socket/, ''),
        },
        '/reactive': {
          target: env.VITE_REACTIVE_WS_URL,
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/reactive/, ''),
        },
      },
    },

    build: {
      // chunkSizeWarningLimit: 1000,
      outDir: '../../build/dist',
      emptyOutDir: true,
      cssCodeSplit: false, // 因为使用了 Base './'，如果将该属性设置为 true，编译后 css 目录结构会产生变化，会导致 @quasar/extras 中样式找不到字体
      rolldownOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.type === 'asset' && /\.(jpe?g|png|gif|svg)$/i.test(assetInfo.name as string)) {
              return 'assets/images/[name]-[hash].[ext]';
            }
            if (assetInfo.type === 'asset' && /\.(ttf|woff|woff2|eot)$/i.test(assetInfo.name as string)) {
              return 'assets/fonts/[name]-[hash].[ext]';
            }
            return 'assets/[ext]/[name]-[hash].[ext]';
          },
          codeSplitting: {
            groups: [
              {
                name: 'js/npm-tsparticles',
                test: (id) => id.includes('tsparticles'),
              },
              {
                name: (id) => {
                  // 匹配 node_modules 中的库，生成类似 'js/npm-react' 的 chunk
                  if (id.includes('node_modules')) {
                    const parts = id.toString().split('node_modules/')[2].split('/');
                    let name = parts[0];
                    if (name.startsWith('@')) {
                      name = name + '-' + parts[1];
                    }
                    return 'js/npm-' + name;
                  }
                  return null;
                },
                // 注意：如果使用函数作为 name，test 也需要定义。
                // 上面的逻辑混合了 test 和 name，为了清晰，可以拆分为多个 group，
                // 或者像下面 src 的示例一样，使用一个通用的 group 来覆盖 node_modules。
                // 这里我们暂时将所有 node_modules 包都纳入这个动态命名的 group。
                test: (id) => id.includes('node_modules'),
                // 为了更精确地控制，建议将 tsparticles 单独拆出后，再定义一个通用的 node_modules group
              },
              {
                name: (id) => {
                  // 匹配 src 下的文件，生成类似 'js/pages-index' 的 chunk
                  if (id.includes('src')) {
                    const path = id.toString().split('src/')[1].replace(/\//g, '-');
                    return 'js/' + path;
                  }
                  return null;
                },
                test: (id) => id.includes('src'), // 对应的 test 条件
              },
            ],
          },
        },
      },
    },
  });
};
