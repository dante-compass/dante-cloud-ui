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
import nodePolyfills from '@rolldown/plugin-node-polyfills';

import { visualizer } from 'rollup-plugin-visualizer';
import { HerodotusResolver } from '@herodotus-cloud/components/resolver';

const lifecycle = process.env.npm_lifecycle_event;

// https://vitejs.dev/config/
// mode 环境变量名，若配置有.env.test，启动时 --mode test，这里的mode就是test
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    // 增加基础路径配置，修复在反向代理指向子路径的配置方式下，出现静态资源 404 问题
    base: env.VITE_BASE_URL,
    plugins: [
      nodePolyfills(),
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
      compression({
        // environment.js 在打包时不生成 *.gz 或 *.br 文件，避免压缩文件影响环境变量的设置。
        exclude: ['**/environment.js'],
      }),
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
            title: env.VITE_APPLICATION_NAME,
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
          // 入口文件单独放置在 js 目录下
          entryFileNames: 'entry/[name]-[hash].js',

          // codeSplitting 是对代码进行拆分并且进行命名
          // assetFileNames 和 chunkFileNames 会根据 codeSplitting 拆分的结果进行重命名和文件放置。[name] 对应的就是codeSplitting 返回的名称
          assetFileNames: (assetInfo) => {
            if (/\.(css|scss|sass)$/i.test(assetInfo.names[0])) {
              return 'assets/css/[name]-[hash][extname]';
            }
            if (/\.(jpg|jpeg|png|gif|svg)$/i.test(assetInfo.names[0])) {
              return 'assets/images/[name]-[hash][extname]';
            }
            if (/\.(ttf|woff|woff2|eot)$/i.test(assetInfo.names[0])) {
              return 'assets/fonts/[name]-[hash][extname]';
            }
            // 其他资源文件默认存放
            return 'assets/[name]-[hash][extname]';
          },

          chunkFileNames: (chunkInfo) => {
            // vender 对应 node_modules 中的包
            // chunk 对应自己实际开发的代码
            if (chunkInfo.name.includes('vender-')) {
              return 'assets/js/venders/[name]-[hash].js';
            }

            return 'assets/js/chunks/[name]-[hash].js';
          },

          codeSplitting: {
            groups: [
              {
                name: 'vender-tsparticles',
                test: (id) => id.includes('tsparticles'),
              },
              {
                name: (id) => {
                  // 匹配 node_modules 中的库，生成类似 'js/npm-react' 的 chunk
                  const parts = id.toString().split('node_modules/')[2].split('/');
                  let name = parts[0];
                  if (name.startsWith('@')) {
                    name = name + '-' + parts[1];
                  }
                  return 'vender-' + name;
                },
                test: (id) => id.includes('node_modules'),
              },
              {
                name: (id) => {
                  // 匹配 src 下的文件，生成类似 'js/pages-index' 的 chunk
                  const path = id.toString().split('src/')[1];
                  return path;
                },
                test: (id) => id.includes('/src/'), // 对应的 test 条件
              },
            ],
          },
        },
      },
    },
  });
};
