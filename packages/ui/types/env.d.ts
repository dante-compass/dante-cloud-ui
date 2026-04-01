/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}

declare interface ImportMetaEnv {
  readonly VITE_PROJECT;
  readonly VITE_APPLICATION_NAME;
  readonly VITE_API_URL;
  readonly VITE_WS_URL;
  readonly VITE_OAUTH2_CLIENT_ID;
  readonly VITE_OAUTH2_CLIENT_SECRET;
  readonly VITE_OAUTH2_REDIRECT_URI;
  readonly VITE_OAUTH2_AUTHORIZE_URI;
  readonly VITE_AUTO_REFRESH_TOKEN;
  readonly VITE_SECRET_KEY;
  readonly VITE_CAPTCHA;
  readonly VITE_MULTI_TENANCY_ID;
  readonly VITE_USE_OIDC;
  readonly VITE_USE_WEBSOCKET;
  readonly VITE_USE_CRYPTO;
  readonly VITE_USE_DISABLE_DEVTOOL;
  // 更多环境变量...
}

/**
 * The type of `import.meta`.
 *
 * If you need to declare that a given property exists on `import.meta`,
 * this type may be augmented via interface merging.
 */
declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare interface Window {
  APPLICATION_ENVIRONMENT_VARIABLES_PROJECT: string;
  APPLICATION_ENVIRONMENT_VARIABLES_APPLICATION_NAME: string;
  APPLICATION_ENVIRONMENT_VARIABLES_API_URL: string;
  APPLICATION_ENVIRONMENT_VARIABLES_WS_URL: string;
  APPLICATION_ENVIRONMENT_VARIABLES_OAUTH2_CLIENT_ID: string;
  APPLICATION_ENVIRONMENT_VARIABLES_OAUTH2_CLIENT_SECRET: string;
  APPLICATION_ENVIRONMENT_VARIABLES_OAUTH2_REDIRECT_URI: string;
  APPLICATION_ENVIRONMENT_VARIABLES_OAUTH2_AUTHORIZE_URI: string;
  APPLICATION_ENVIRONMENT_VARIABLES_USE_DISABLE_DEVTOOL: string;
}

declare module '*.bpmn' {
  const bpmnValue: any;
  export default bpmnValue;
}
