import type { DisplayElementGroup, DisplayElement } from "@/composables/declarations";

import { OperationEnum } from "@herodotus/core";

export const IN_BROWSER = typeof window !== "undefined";
export const IS_PROD = import.meta.env.PROD;
export const IS_DEV = import.meta.env.DEV;
export const IS_SERVER = import.meta.env.SSR;

export const HTTP_METHOD_STYLE_GROUP: DisplayElementGroup = {
  PUT: { color: "orange", icon: "mdi-book-remove-multiple" },
  DELETE: { color: "red", icon: "mdi-book-minus-multiple" },
  POST: { color: "green", icon: "mdi-book-plus-multiple" },
  GET: { color: "blue", icon: "mdi-book-multiple" },
  ALL: { color: "black", icon: "mdi-book-cog" },
};

export const DATA_ITEM_STATUS: Array<DisplayElement> = [
  { color: "positive", icon: "mdi-circle" },
  { color: "negative", icon: "mdi-circle" },
  { color: "warning", icon: "mdi-circle" },
  { color: "info", icon: "mdi-circle" },
];

export const COLOR_LIST: Array<string> = [
  "positive",
  "negative",
  "info",
  "warning",
  "accent",
  "secondary",
  "primary",
  "red",
  "pink",
  "purple",
  "deep-purple",
  "indigo",
  "blue",
  "light-blue",
  "cyan",
  "teal",
  "green",
  "light-green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deep-orange",
  "brown",
  "grey",
  "blue-grey",
];

export const DEFAULT_HTTP_METHOD_STYLE: DisplayElement = HTTP_METHOD_STYLE_GROUP.GET!;

export const GRANT_TYPE_STYLE_GROUP: DisplayElementGroup = {
  authorization_code: { color: "pink", icon: "mdi-security", text: "授权码认证" },
  client_credentials: { color: "orange", icon: "mdi-arrow-decision-auto", text: "客户端凭证认证" },
  refresh_token: { color: "indigo", icon: "mdi-cog-refresh", text: "刷新令牌认证" },
  password: { color: "cyan", icon: "mdi-file-key", text: "密码认证" },
  social_credentials: { color: "light-blue", icon: "mdi-charity", text: "社交化认证" },
  webauthn_credentials: {
    color: "secondary",
    icon: "mdi-account-key",
    text: "Passkey 通行密钥认证",
  },
  "urn:ietf:params:oauth:grant-type:device_code": {
    color: "primary",
    icon: "mdi-devices",
    text: "设备激活码认证",
  },
  "urn:ietf:params:oauth:grant-type:jwt-bearer": {
    color: "purple",
    icon: "mdi-file-hidden",
    text: "JWT Bearer 认证",
  },
};

export const Path = {
  ROOT: "/",
  // 登录
  SIGN_IN: "/sign-in",
  SIGN_IN_NAME: "SignIn",
  // 首页
  HOME: "/dashboard",
  HOME_NAME: "Dashboard",
  HOME_TITLE: "首页",
  // 错误
  NOT_FOUND: "/:pathMatch(.*)*",
  NOT_FOUND_NAME: "PageNotFound",
};

export const ComponentName = {
  SYS_USER: "SysUser",
  SYS_ROLE: "SysRole",
  SYS_PERMISSION: "SysPermission",
  SYS_ATTRIBUTE: "SysAttribute",
  SYS_ELEMENT: "SysElement",
  SYS_DEFAULT_ROLE: "SysDefaultRole",
  SYS_ORGANIZATION: "SysOrganization",
  SYS_DEPARTMENT: "SysDepartment",
  SYS_EMPLOYEE: "SysEmployee",
  SYS_OWNERSHIP: "SysOwnership",
  SYS_DICTIONARY: "SysDictionary",
  OAUTH2_APPLICATION: "OAuth2Application",
  OAUTH2_SCOPE: "OAuth2Scope",
  OAUTH2_TOKEN: "OAuth2Token",
  OAUTH2_COMPLIANCE: "OAuth2Compliance",
  OAUTH2_AUDIT: "OAuth2Audit",
  OAUTH2_DEVICE: "OAuth2Device",
  OAUTH2_PRODUCT: "OAuth2Product",
  OAUTH2_CREDENTIAL_RECORD: "OAuth2CredentialRecord",
  OAUTH2_PERSISTENT: "OAuth2Persistent",
  ASSET_SERVER: "AssetServer",
  ASSET_APPLICATION: "AssetApplication",
  DATABASE_ACCOUNT: "DatabaseAccount",
  DATABASE_CATALOG: "DatabaseCatalog",
  DATABASE_INSTANCE: "DatabaseInstance",
  MESSAGE_INFORMATION: "MessageInformation",
  WORKFLOW_DYNAMIC_FORM: "WorkflowDynamicForm",
  WIDGETS_DYNAMIC_FORM: "WidgetsDynamicForm",
  WORKFLOW_PROCESS_START: "WorkflowProcessStart",
  WORKFLOW_PROCESS_APPROVE: "WorkflowProcessApprove",
  SYS_TENANT_DATA_SOURCE: "SysTenantDataSource",
  OSS_BUCKET: "OssBucket",
  OSS_OBJECT: "OssObject",
  SOCIAL_BINDING: "SocialBinding",
  IOT_PRODUCT_CATEGORY: "IotProductCategory",
  IOT_PRODUCT: "IotProduct",
  IOT_DEVICE: "IotDevice",
  IOT_TSL_FUNCTION: "IotTslFunction",
  IOT_TSL_UNIT: "IotTslUnit",
  THINGS_MQTT_ACCOUNT: "ThingsMqttAccount",
  THINGS_MQTT_AUTHORITY: "ThingsMqttAuthority",
  THINGS_MQTT_CATEGORY: "ThingsMqttCategory",
  MGT_CERTIFICATE: "MgtCertificate",
  MGT_CERTIFICATE_FILE: "MgtCertificateFile",
};

export const PAGE_NAME = (() => {
  const OAUTH2_APPLICATION = "OAuth2Application";
  const OAUTH2_APPLICATION_CONTENT = OAUTH2_APPLICATION + OperationEnum.CONTENT;
  const OAUTH2_AUDIT = "OAuth2Audit";
  const OAUTH2_COMPLIANCE = "OAuth2Compliance";
  const OAUTH2_CREDENTIAL_RECORD = "OAuth2CredentialRecord";
  const OAUTH2_PERSISTENT = "OAuth2Persistent";
  const OAUTH2_SCOPE = "OAuth2Scope";
  const OAUTH2_SCOPE_CONTENT = OAUTH2_SCOPE + OperationEnum.CONTENT;
  const OAUTH2_SCOPE_AUTHORIZE = OAUTH2_SCOPE + OperationEnum.AUTHORIZE;
  const OAUTH2_TOKEN = "OAuth2Token";
  const SYS_ATTRIBUTE = "SysAttribute";
  const SYS_ATTRIBUTE_CONTENT = SYS_ATTRIBUTE + OperationEnum.CONTENT;
  const SYS_ATTRIBUTE_AUTHORIZE = SYS_ATTRIBUTE + OperationEnum.AUTHORIZE;
  const SYS_DEFAULT_ROLE = "SysDefaultRole";
  const SYS_DEFAULT_ROLE_AUTHORIZE = SYS_DEFAULT_ROLE + OperationEnum.AUTHORIZE;
  const SYS_DEPARTMENT = "SysDepartment";
  const SYS_DEPARTMENT_CONTENT = SYS_DEPARTMENT + OperationEnum.CONTENT;
  const SYS_DICTIONARY = "SysDictionary";
  const SYS_DICTIONARY_CONTENT = SYS_DICTIONARY + +OperationEnum.CONTENT;
  const SYS_ELEMENT = "SysElement";
  const SYS_ELEMENT_CONTENT = SYS_ELEMENT + OperationEnum.CONTENT;
  const SYS_ELEMENT_AUTHORIZE = SYS_ELEMENT + OperationEnum.AUTHORIZE;
  const SYS_EMPLOYEE = "SysEmployee";
  const SYS_EMPLOYEE_CONTENT = SYS_EMPLOYEE + OperationEnum.CONTENT;
  const SYS_ORGANIZATION = "SysOrganization";
  const SYS_ORGANIZATION_CONTENT = SYS_ORGANIZATION + OperationEnum.CONTENT;
  const SYS_OWNERSHIP = "SysOwnership";
  const SYS_OWNERSHIP_CONTENT = SYS_OWNERSHIP + OperationEnum.CONTENT;
  const SYS_PERMISSION = "SysPermission";
  const SYS_PERMISSION_CONTENT = SYS_PERMISSION + OperationEnum.CONTENT;
  const SYS_ROLE = "SysRole";
  const SYS_ROLE_CONTENT = SYS_ROLE + OperationEnum.CONTENT;
  const SYS_ROLE_AUTHORIZE = SYS_ROLE + OperationEnum.AUTHORIZE;
  const SYS_TENANT_DATA_SOURCE = "SysTenantDataSource";
  const SYS_TENANT_DATA_SOURCE_CONTENT = SYS_TENANT_DATA_SOURCE + OperationEnum.CONTENT;
  const SYS_USER = "SysUser";
  const SYS_USER_CONTENT = SYS_USER + OperationEnum.CONTENT;
  const SYS_USER_AUTHORIZE = SYS_USER + OperationEnum.AUTHORIZE;
  const MGT_CERTIFICATE = "MgtCertificate";
  const MGT_CERTIFICATE_CONTENT = MGT_CERTIFICATE + OperationEnum.CONTENT;
  const MGT_CERTIFICATE_FILE = MGT_CERTIFICATE + OperationEnum.FILE;
  const OSS_BUCKET = "OssBucket";
  const OSS_BUCKET_CONTENT = OSS_BUCKET + OperationEnum.CONTENT;
  const OSS_OBJECT = "OssObject";
  const OSS_OBJECT_CONTENT = OSS_OBJECT + OperationEnum.CONTENT;
  const OSS_OBJECT_AUTHORIZE = OSS_OBJECT + OperationEnum.AUTHORIZE;
  const IOT_PRODUCT_CATEGORY = "IotProductCategory";
  const IOT_PRODUCT_CATEGORY_CONTENT = IOT_PRODUCT_CATEGORY + OperationEnum.CONTENT;
  const IOT_PRODUCT = "IotProduct";
  const IOT_PRODUCT_CONTENT = IOT_PRODUCT + OperationEnum.CONTENT;
  const IOT_PRODUCT_INFO = IOT_PRODUCT + OperationEnum.INFO;
  const IOT_DEVICE = "IotDevice";
  const IOT_DEVICE_CONTENT = IOT_DEVICE + OperationEnum.CONTENT;
  const IOT_DEVICE_INFO = IOT_DEVICE + OperationEnum.INFO;
  const IOT_TSL_FUNCTION = "IotTslFunction";
  const IOT_TSL_UNIT = "IotTslUnit";
  const THINGS_MQTT_ACCOUNT = "ThingsMqttAccount";
  const THINGS_MQTT_ACCOUNT_AUTHORIZE = THINGS_MQTT_ACCOUNT + OperationEnum.AUTHORIZE;
  const THINGS_MQTT_AUTHORITY = "ThingsMqttAuthority";
  const THINGS_MQTT_AUTHORITY_CONTENT = THINGS_MQTT_AUTHORITY + OperationEnum.CONTENT;
  const THINGS_MQTT_AUTHORITY_AUTHORIZE = THINGS_MQTT_AUTHORITY + OperationEnum.AUTHORIZE;
  const THINGS_MQTT_CATEGORY = "ThingsMqttCategory";
  const THINGS_MQTT_CATEGORY_CONTENT = THINGS_MQTT_CATEGORY + OperationEnum.CONTENT;
  const WIDGETS_DYNAMIC_FORM = "WidgetsDynamicForm";
  const WIDGETS_BPMN_DESIGNER = "WidgetsBpmnDesigner";
  const WORKFLOW_DYNAMIC_FORM = "WorkflowDynamicForm";
  const WORKFLOW_DEPLOYMENT = "WorkflowDeployment";
  const WORKFLOW_DEPLOYMENT_CONTENT = WORKFLOW_DEPLOYMENT + OperationEnum.CONTENT;
  const WORKFLOW_DEPLOYMENT_PENDING = "WorkflowDeploymentPending";
  const WORKFLOW_PROCESS_START = "WorkflowProcessStart";
  const WORKFLOW_PROCESS_APPROVE = "WorkflowProcessApprove";
  const WORKFLOW_PROCESS_DEFINITION = "WorkflowProcessDefinition";
  const WORKFLOW_PROCESS_DEFINITION_DIAGRAM = "WorkflowProcessDefinitionDiagram";
  const WORKFLOW_PROCESS_INSTANCE = "WorkflowProcessInstance";
  const FOUNDATION_ACCOUNT = "FoundationAccount";
  const FOUNDATION_PROFILE = "FoundationProfile";
  const MESSAGE_INFORMATION = "MessageInformation";
  const MESSAGE_INFORMATION_CONTENT = MESSAGE_INFORMATION + OperationEnum.CONTENT;
  const MESSAGE_SETTING = "MessageSetting";
  const SOCIAL_BINDING = "SocialBinding";

  return {
    OAUTH2_APPLICATION,
    OAUTH2_APPLICATION_CONTENT,
    OAUTH2_AUDIT,
    OAUTH2_COMPLIANCE,
    OAUTH2_CREDENTIAL_RECORD,
    OAUTH2_PERSISTENT,
    OAUTH2_SCOPE,
    OAUTH2_SCOPE_CONTENT,
    OAUTH2_SCOPE_AUTHORIZE,
    OAUTH2_TOKEN,
    SYS_ATTRIBUTE,
    SYS_ATTRIBUTE_CONTENT,
    SYS_ATTRIBUTE_AUTHORIZE,
    SYS_DEFAULT_ROLE,
    SYS_DEFAULT_ROLE_AUTHORIZE,
    SYS_DEPARTMENT,
    SYS_DEPARTMENT_CONTENT,
    SYS_DICTIONARY,
    SYS_DICTIONARY_CONTENT,
    SYS_ELEMENT,
    SYS_ELEMENT_CONTENT,
    SYS_ELEMENT_AUTHORIZE,
    SYS_EMPLOYEE,
    SYS_EMPLOYEE_CONTENT,
    SYS_ORGANIZATION,
    SYS_ORGANIZATION_CONTENT,
    SYS_OWNERSHIP,
    SYS_OWNERSHIP_CONTENT,
    SYS_PERMISSION,
    SYS_PERMISSION_CONTENT,
    SYS_ROLE,
    SYS_ROLE_CONTENT,
    SYS_ROLE_AUTHORIZE,
    SYS_TENANT_DATA_SOURCE,
    SYS_TENANT_DATA_SOURCE_CONTENT,
    SYS_USER,
    SYS_USER_CONTENT,
    SYS_USER_AUTHORIZE,
    MGT_CERTIFICATE,
    MGT_CERTIFICATE_CONTENT,
    MGT_CERTIFICATE_FILE,
    OSS_BUCKET,
    OSS_BUCKET_CONTENT,
    OSS_OBJECT,
    OSS_OBJECT_CONTENT,
    OSS_OBJECT_AUTHORIZE,
    IOT_PRODUCT_CATEGORY,
    IOT_PRODUCT_CATEGORY_CONTENT,
    IOT_PRODUCT,
    IOT_PRODUCT_CONTENT,
    IOT_PRODUCT_INFO,
    IOT_DEVICE,
    IOT_DEVICE_CONTENT,
    IOT_DEVICE_INFO,
    IOT_TSL_FUNCTION,
    IOT_TSL_UNIT,
    THINGS_MQTT_ACCOUNT,
    THINGS_MQTT_ACCOUNT_AUTHORIZE,
    THINGS_MQTT_AUTHORITY,
    THINGS_MQTT_AUTHORITY_CONTENT,
    THINGS_MQTT_AUTHORITY_AUTHORIZE,
    THINGS_MQTT_CATEGORY,
    THINGS_MQTT_CATEGORY_CONTENT,
    WIDGETS_BPMN_DESIGNER,
    WIDGETS_DYNAMIC_FORM,
    WORKFLOW_DYNAMIC_FORM,
    WORKFLOW_DEPLOYMENT,
    WORKFLOW_DEPLOYMENT_CONTENT,
    WORKFLOW_DEPLOYMENT_PENDING,
    WORKFLOW_PROCESS_DEFINITION,
    WORKFLOW_PROCESS_DEFINITION_DIAGRAM,
    WORKFLOW_PROCESS_INSTANCE,
    WORKFLOW_PROCESS_START,
    WORKFLOW_PROCESS_APPROVE,
    FOUNDATION_ACCOUNT,
    FOUNDATION_PROFILE,
    MESSAGE_INFORMATION,
    MESSAGE_INFORMATION_CONTENT,
    MESSAGE_SETTING,
    SOCIAL_BINDING,
  };
})();
