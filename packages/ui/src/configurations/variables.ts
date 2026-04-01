class EnvironmentVariable {
  private static PROJECT: string = import.meta.env.VITE_PROJECT;
  private static APPLICATION_NAME: string = import.meta.env.VITE_APPLICATION_NAME;
  private static API_URL: string = import.meta.env.VITE_API_URL;
  private static WS_URL: string = import.meta.env.VITE_WS_URL;
  private static OAUTH2_CLIENT_ID: string = import.meta.env.VITE_OAUTH2_CLIENT_ID;
  private static OAUTH2_CLIENT_SECRET: string = import.meta.env.VITE_OAUTH2_CLIENT_SECRET;
  private static OAUTH2_REDIRECT_URI: string = import.meta.env.VITE_OAUTH2_REDIRECT_URI;
  private static OAUTH2_AUTHORIZE_URI: string = import.meta.env.VITE_OAUTH2_AUTHORIZE_URI;
  private static SECRET_KEY: string = import.meta.env.VITE_SECRET_KEY;
  private static CAPTCHA: string = import.meta.env.VITE_CAPTCHA;
  private static MULTI_TENANCY_ID: string = import.meta.env.VITE_MULTI_TENANCY_ID;
  private static AUTO_REFRESH_TOKEN: string = import.meta.env.VITE_AUTO_REFRESH_TOKEN;
  private static USE_OIDC: string = import.meta.env.VITE_USE_OIDC;
  private static USE_WEBSOCKET: string = import.meta.env.VITE_USE_WEBSOCKET;
  private static USE_CRYPTO: string = import.meta.env.VITE_USE_CRYPTO;
  private static USE_DISABLE_DEVTOOL: string = import.meta.env.VITE_USE_DISABLE_DEVTOOL;
  private static instance = new EnvironmentVariable();

  public static getInstance(): EnvironmentVariable {
    return this.instance;
  }

  private constructor() {}

  private toBoolean(value: string): boolean {
    if (value && value === 'true') {
      return true;
    } else {
      return false;
    }
  }

  private useDockerEnvironmentVariable(value: string): boolean {
    if (value) {
      const variable = value.toLocaleUpperCase();
      if (variable.startsWith('HERODOTUS')) {
        return false;
      }
    }

    return true;
  }

  private getEnvironmentVariable(docker: string, vite: string): string {
    if (this.useDockerEnvironmentVariable(docker)) {
      return docker;
    } else {
      return vite;
    }
  }

  private getEnvironmentVariableBoolean(docker: string, vite: string): boolean {
    if (this.useDockerEnvironmentVariable(docker)) {
      return this.toBoolean(docker);
    } else {
      return this.toBoolean(vite);
    }
  }

  public getProject(): string {
    const project = window.APPLICATION_ENVIRONMENT_VARIABLES_PROJECT;
    if (project === '' || project === 'athena' || project === 'dante' || project === 'herodotus') {
      return project;
    } else {
      return EnvironmentVariable.PROJECT;
    }
  }

  public isDistributedArchitecture(): boolean {
    const project = this.getProject();
    if (project) {
      if (project === 'dante' || project === 'herodotus') {
        return true;
      }
    }
    return false;
  }

  public isReactiveProject(): boolean {
    const project = this.getProject();
    if (project) {
      if (project === 'herodotus') {
        return true;
      }
    }
    return false;
  }

  public getProjectName(): string {
    return this.getEnvironmentVariable(
      window.APPLICATION_ENVIRONMENT_VARIABLES_APPLICATION_NAME,
      EnvironmentVariable.APPLICATION_NAME,
    );
  }

  public getApiUrl(): string {
    return EnvironmentVariable.API_URL;
  }

  public getWebSocketUrl(): string {
    return EnvironmentVariable.WS_URL;
  }

  public getClientId(): string {
    return this.getEnvironmentVariable(
      window.APPLICATION_ENVIRONMENT_VARIABLES_OAUTH2_CLIENT_ID,
      EnvironmentVariable.OAUTH2_CLIENT_ID,
    );
  }

  public getClientSecret(): string {
    return this.getEnvironmentVariable(
      window.APPLICATION_ENVIRONMENT_VARIABLES_OAUTH2_CLIENT_SECRET,
      EnvironmentVariable.OAUTH2_CLIENT_SECRET,
    );
  }

  public getRedirectUri(): string {
    return this.getEnvironmentVariable(
      window.APPLICATION_ENVIRONMENT_VARIABLES_OAUTH2_REDIRECT_URI,
      EnvironmentVariable.OAUTH2_REDIRECT_URI,
    );
  }

  public getAuthorizeUri(): string {
    return this.getEnvironmentVariable(
      window.APPLICATION_ENVIRONMENT_VARIABLES_OAUTH2_AUTHORIZE_URI,
      EnvironmentVariable.OAUTH2_AUTHORIZE_URI,
    );
  }

  public isAutoRefreshToken(): boolean {
    return this.toBoolean(EnvironmentVariable.AUTO_REFRESH_TOKEN);
  }

  public isUseOidc(): boolean {
    return this.toBoolean(EnvironmentVariable.USE_OIDC);
  }

  public isUseWebSocket(): boolean {
    return this.toBoolean(EnvironmentVariable.USE_WEBSOCKET);
  }

  public isUseCrypto(): boolean {
    return this.toBoolean(EnvironmentVariable.USE_CRYPTO);
  }

  public getSecretKey(): string {
    return EnvironmentVariable.SECRET_KEY;
  }

  public getCaptcha(): string {
    return EnvironmentVariable.CAPTCHA;
  }

  public getCurrentTenantId(): string {
    return EnvironmentVariable.MULTI_TENANCY_ID;
  }

  public isUseDisableDevtool(): boolean {
    return this.getEnvironmentVariableBoolean(
      window.APPLICATION_ENVIRONMENT_VARIABLES_USE_DISABLE_DEVTOOL,
      EnvironmentVariable.USE_DISABLE_DEVTOOL,
    );
  }
}

export const VARIABLES: EnvironmentVariable = EnvironmentVariable.getInstance();
