import { AbstractService as e, Axios as t, Base64 as n, ContentTypeEnum as r, HttpConfig as i, Service as a, Service as o, moment as s } from "@herodotus-cloud/core";
//#region src/enums/modules/index.ts
var c = /* @__PURE__ */ function(e) {
	return e[e.API = 0] = "API", e[e.MENU = 1] = "MENU", e[e.PAGE = 2] = "PAGE", e[e.MINI_PAGE = 3] = "MINI_PAGE", e;
}({}), l = /* @__PURE__ */ function(e) {
	return e[e.LEADERSHIP = 0] = "LEADERSHIP", e[e.SECTION_LEADER = 1] = "SECTION_LEADER", e[e.STAFF = 2] = "STAFF", e;
}({}), u = /* @__PURE__ */ function(e) {
	return e[e.OTHERS = 0] = "OTHERS", e[e.MAN = 1] = "MAN", e[e.WOMAN = 2] = "WOMAN", e;
}({}), d = /* @__PURE__ */ function(e) {
	return e[e.FORBIDDEN = 0] = "FORBIDDEN", e[e.ENABLE = 1] = "ENABLE", e[e.LOCKING = 2] = "LOCKING", e[e.EXPIRED = 3] = "EXPIRED", e;
}({}), f = /* @__PURE__ */ function(e) {
	return e.APPLICATION = "applicationType", e.GENDER = "gender", e.GRANT = "grantType", e.IDENTITY = "identity", e.STATUS = "status", e.SUPPLIER = "supplierType", e.TECHNOLOGY = "technologyType", e.EXPRESSION = "expression", e;
}({}), p = /* @__PURE__ */ function(e) {
	return e[e.WEB = 0] = "WEB", e[e.SERVICE = 1] = "SERVICE", e[e.APP = 2] = "APP", e[e.WAP = 3] = "WAP", e[e.MINI = 4] = "MINI", e;
}({}), m = /* @__PURE__ */ function(e) {
	return e[e.JAVA = 0] = "JAVA", e[e.NET = 1] = "NET", e[e.PHP = 2] = "PHP", e[e.NODE = 3] = "NODE", e[e.IOS = 4] = "IOS", e[e.ANDROID = 5] = "ANDROID", e[e.WEAPP = 6] = "WEAPP", e[e.ALIAPP = 7] = "ALIAPP", e[e.DUAPP = 8] = "DUAPP", e;
}({}), h = /* @__PURE__ */ function(e) {
	return e[e.CORE = 0] = "CORE", e[e.BAT = 1] = "BAT", e[e.THIRD_PARTY = 2] = "THIRD_PARTY", e[e.Outsourcing = 3] = "Outsourcing", e;
}({}), g = /* @__PURE__ */ function(e) {
	return e[e.ANNOUNCEMENT = 0] = "ANNOUNCEMENT", e[e.DIALOGUE = 1] = "DIALOGUE", e;
}({}), _ = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUaa() + "/authorize/application";
	}
}, v = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUaa() + "/authorize/scope";
	}
	getAssignedAddress() {
		return this.getBaseAddress() + "/assigned";
	}
	getScopeCodePath(e) {
		return this.getParamPath(this.getBaseAddress(), e);
	}
	fetchByScopeCode(e) {
		return this.getConfig().getHttp().get(this.getScopeCodePath(e));
	}
	assigned(e) {
		return this.getConfig().getHttp().post(this.getAssignedAddress(), e);
	}
}, y = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUaa() + "/authorize/authorization";
	}
}, b = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUaa() + "/authorize/compliance";
	}
}, x = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUaa() + "/authorize/audit";
	}
}, S = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUaa() + "/authorize/passkey";
	}
}, C = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUpms() + "/hr/organization";
	}
}, w = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUpms() + "/hr/department";
	}
}, T = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUpms() + "/hr/employee";
	}
	getAssignedAddress() {
		return this.getBaseAddress() + "/assigned";
	}
	getAllocatableAddress() {
		return this.getBaseAddress() + "/allocatable";
	}
	getEmployeeNamePath(e) {
		return this.getParamPath(this.getBaseAddress(), e);
	}
	fetchByEmployeeName(e) {
		return this.getConfig().getHttp().get(this.getEmployeeNamePath(e));
	}
	fetchAssignedByPage(e, t = {}) {
		let n = Object.assign(e, t);
		return this.getConfig().getHttp().get(this.getAssignedAddress(), n);
	}
	deleteAllocatable(e) {
		return this.getConfig().getHttp().delete(this.getAllocatableAddress(), e);
	}
	saveAllocatable(e) {
		return this.getConfig().getHttp().post(this.getAllocatableAddress(), e);
	}
	authorizeUser(e) {
		return this.getConfig().getHttp().put(this.getBaseAddress(), e, { contentType: r.URL_ENCODED });
	}
}, E = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUpms() + "/";
	}
}, D = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUpms() + "/security/permission";
	}
}, O = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUpms() + "/security/role";
	}
	getRoleCodePath(e) {
		return this.getParamPath(this.getBaseAddress(), e);
	}
	fetchByRoleCode(e) {
		return this.getConfig().getHttp().get(this.getRoleCodePath(e));
	}
}, k = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUpms() + "/security/user";
	}
	getUsernameAddress() {
		return this.getBaseAddress() + "/sign-in";
	}
	getChangePasswordAddress() {
		return this.getBaseAddress() + "/change-password";
	}
	getUsernamePath(e) {
		return this.getParamPath(this.getUsernameAddress(), e);
	}
	fetchByUsername(e) {
		return this.getConfig().getHttp().get(this.getUsernamePath(e));
	}
	changePassword(e, t) {
		return this.getConfig().getHttp().put(this.getChangePasswordAddress(), {
			userId: e,
			password: t
		}, { contentType: r.URL_ENCODED });
	}
}, A = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUpms() + "/security/attribute";
	}
}, j = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUpms() + "/security/default-role";
	}
}, M = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUpms() + "/security/element";
	}
	getResourcesAddress() {
		return this.getBaseAddress() + "/resources";
	}
	fetchById(e) {
		return this.getConfig().getHttp().get(this.getIdPath(e));
	}
	findResourcesByRoles(e) {
		return this.getConfig().getHttp().get(this.getResourcesAddress(), { roles: e });
	}
}, N = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUaa() + "/security/tenant/datasource";
	}
	getTenantIdPath(e) {
		return this.getParamPath(this.getBaseAddress(), e);
	}
	fetchByTenantId(e) {
		return this.getConfig().getHttp().get(this.getTenantIdPath(e));
	}
}, P = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUpms() + "/security/dictionary";
	}
	getItemsAddress() {
		return this.getBaseAddress() + "/items";
	}
	getCategoryPath(e) {
		return this.getParamPath(this.getItemsAddress(), e);
	}
	fetchByCategory(e) {
		return this.getConfig().getHttp().get(this.getCategoryPath(e));
	}
	fetchCategories(e) {
		return this.getConfig().getHttp().get(this.getItemsAddress(), { categories: e });
	}
}, F = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getUpms() + "/security/social/binding";
	}
}, I = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn(!0, !0) + "/task";
	}
	getToDoTasksAddress() {
		return this.getBaseAddress() + "/todo";
	}
	getCompletedTasksAddress() {
		return this.getBaseAddress() + "/completed";
	}
	fetchToDoTasksByPage(e, t = {}) {
		let n = Object.assign(e, t);
		return this.getConfig().getHttp().get(this.getToDoTasksAddress(), n);
	}
	fetchCompletedTasksByPage(e, t = {}) {
		let n = Object.assign(e, t);
		return this.getConfig().getHttp().get(this.getCompletedTasksAddress(), n);
	}
}, L = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getManage() + "/manage/certificate";
	}
	getAliasAddress() {
		return this.getBaseAddress() + "/alias";
	}
	getCategoryAddress() {
		return this.getBaseAddress() + "/category";
	}
	findByAlias(e) {
		return this.getConfig().getHttp().get(this.getAliasAddress(), { alias: e });
	}
	findAllByCertificateCategory(e) {
		return this.getConfig().getHttp().get(this.getCategoryAddress(), { certificateCategory: e });
	}
}, R = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getMsg() + "/message/dialogue/contact";
	}
}, z = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getMsg() + "/message/dialogue/detail";
	}
	getDeleteDialoguePath(e) {
		return this.getParamPath(this.getBaseAddress(), e);
	}
	deleteDialogueById(e) {
		return this.getConfig().getHttp().delete(this.getDeleteDialoguePath(e));
	}
}, B = class t extends e {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(e) {
		return this.instance ??= new t(e), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getMsg() + "/message/notification";
	}
	getAllReadAddress() {
		return this.getBaseAddress() + "/all-read";
	}
	setAllRead(e) {
		return this.getConfig().getHttp().put(this.getAllReadAddress(), { userId: e }, { contentType: r.URL_ENCODED });
	}
}, V = class e {
	static instance;
	config = {};
	constructor(e) {
		this.config = e;
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.config.getMsg() + "/message/websocket";
	}
	getStatAddress() {
		return this.getBaseAddress() + "/stat";
	}
	fetchAllStat() {
		return this.config.getHttp().get(this.getStatAddress());
	}
}, H = class e extends o {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getOss() + "/oss/bucket";
	}
	getListAddress() {
		return this.getBaseAddress() + "/list";
	}
	getPolicyAddress() {
		return this.getBaseAddress() + "/policy";
	}
	listBuckets() {
		return this.getConfig().getHttp().get(this.getListAddress());
	}
	createBucket(e) {
		return this.getConfig().getHttp().post(this.getBaseAddress(), e);
	}
	deleteBucket(e) {
		return this.getConfig().getHttp().delete(this.getBaseAddress(), e);
	}
	setBucketPolicy(e) {
		return this.getConfig().getHttp().put(this.getPolicyAddress(), e);
	}
}, U = class e extends o {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getOss() + "/oss/object";
	}
	getListV2Address() {
		return this.getBaseAddress() + "/list";
	}
	getMultiDeleteAddress() {
		return this.getBaseAddress() + "/multi";
	}
	getDownloadAddress() {
		return this.getBaseAddress() + "/download";
	}
	getDisplayAddress() {
		return this.getBaseAddress() + "/display";
	}
	getUploadAddress() {
		return this.getBaseAddress() + "/upload";
	}
	getAttributesAddress() {
		return this.getBaseAddress() + "/attributes";
	}
	getLegalHoldAddress() {
		return this.getBaseAddress() + "/legalhold";
	}
	getRetentionAddress() {
		return this.getBaseAddress() + "/retention";
	}
	getListVersionsAddress() {
		return this.getBaseAddress() + "/versions";
	}
	listObjectsV2(e) {
		return this.getConfig().getHttp().get(this.getListV2Address(), e);
	}
	delete(e) {
		return this.getConfig().getHttp().delete(this.getBaseAddress(), e);
	}
	upload(e, t, n) {
		return n ? this.getConfig().getHttp().post(this.getUploadAddress(), {
			bucketName: e,
			file: t
		}, { contentType: r.JSON }, { onUploadProgress: n }) : this.getConfig().getHttp().post(this.getUploadAddress(), {
			bucketName: e,
			file: t
		});
	}
	download(e, t) {
		return t ? this.getConfig().getHttp().post(this.getDownloadAddress(), e, { contentType: r.JSON }, {
			responseType: "blob",
			onDownloadProgress: t
		}) : this.getConfig().getHttp().post(this.getDownloadAddress(), e);
	}
	display(e) {
		return this.getConfig().getHttp().post(this.getDisplayAddress(), e, { contentType: r.JSON }, { responseType: "blob" });
	}
	batchDelete(e) {
		return this.getConfig().getHttp().delete(this.getMultiDeleteAddress(), e);
	}
	fetchObjectAttributes(e) {
		return this.getConfig().getHttp().get(this.getAttributesAddress(), e);
	}
	setObjectLegalHold(e) {
		return this.getConfig().getHttp().put(this.getLegalHoldAddress(), e);
	}
	setObjectRetention(e) {
		return this.getConfig().getHttp().put(this.getRetentionAddress(), e);
	}
	listObjectVersions(e) {
		return this.getConfig().getHttp().get(this.getListVersionsAddress(), e);
	}
}, W = class e extends o {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getOss() + "/oss/multipart-upload";
	}
	getCreateMultipartUploadAddress() {
		return this.getBaseAddress() + "/create";
	}
	getCompleteMultipartUploadAddress() {
		return this.getBaseAddress() + "/complete";
	}
	createChunkUpload(e) {
		return this.getConfig().getHttp().post(this.getCreateMultipartUploadAddress(), e);
	}
	completeChunkUpload(e) {
		return this.getConfig().getHttp().post(this.getCompleteMultipartUploadAddress(), e);
	}
}, G = class e {
	static instance;
	config = {};
	constructor(e) {
		this.config = e;
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getConfig() {
		return this.config;
	}
	oauth2Application() {
		return _.getInstance(this.config);
	}
	oauth2Scope() {
		return v.getInstance(this.config);
	}
	oauth2Authorization() {
		return y.getInstance(this.config);
	}
	oauth2CredentialRecord() {
		return S.getInstance(this.config);
	}
	oauth2UserLogging() {
		return b.getInstance(this.config);
	}
	oauth2InterfaceAudit() {
		return x.getInstance(this.config);
	}
	sysOrganization() {
		return C.getInstance(this.config);
	}
	sysDepartment() {
		return w.getInstance(this.config);
	}
	sysEmployee() {
		return T.getInstance(this.config);
	}
	sysEmployeeAllocatable() {
		return E.getInstance(this.config);
	}
	sysPermission() {
		return D.getInstance(this.config);
	}
	sysRole() {
		return O.getInstance(this.config);
	}
	sysUser() {
		return k.getInstance(this.config);
	}
	sysAttribute() {
		return A.getInstance(this.config);
	}
	sysDefaultRole() {
		return j.getInstance(this.config);
	}
	sysElement() {
		return M.getInstance(this.config);
	}
	sysDictionary() {
		return P.getInstance(this.config);
	}
	sysTenantDataSource() {
		return N.getInstance(this.config);
	}
	socialBinding() {
		return F.getInstance(this.config);
	}
	dialogueContact() {
		return R.getInstance(this.config);
	}
	dialogueDetail() {
		return z.getInstance(this.config);
	}
	notification() {
		return B.getInstance(this.config);
	}
	webSocketMessage() {
		return V.getInstance(this.config);
	}
	task() {
		return I.getInstance(this.config);
	}
	mgtCertificate() {
		return L.getInstance(this.config);
	}
	ossBucket() {
		return H.getInstance(this.config);
	}
	ossObject() {
		return U.getInstance(this.config);
	}
	ossMultipartUpload() {
		return W.getInstance(this.config);
	}
}, K = (e, t) => {
	let n = new i(e, t);
	return G.getInstance(n);
};
//#endregion
export { e as AbstractService, G as ApiResources, p as ApplicationEnum, c as AuthorityTypeEnum, t as Axios, n as Base64, f as ConstantEnum, r as ContentTypeEnum, I as ExtendedTaskService, u as GenderEnum, i as HttpConfig, l as IdentityEnum, L as MgtCertificateService, g as NotificationCategoryEnum, _ as OAuth2ApplicationService, y as OAuth2AuthorizationService, S as OAuth2CredentialRecordService, x as OAuth2InterfaceAuditService, v as OAuth2ScopeService, b as OAuth2UserLoggingService, a as Service, F as SocialBindingService, d as StatusEnum, h as SupplierType, A as SysAttributeService, j as SysDefaultRoleService, w as SysDepartmentService, P as SysDictionaryService, M as SysElementService, E as SysEmployeeAllocatableService, T as SysEmployeeService, C as SysOrganizationService, D as SysPermissionService, O as SysRoleService, N as SysTenantDataSourceService, k as SysUserService, m as TechnologyEnum, K as createApi, s as moment };
