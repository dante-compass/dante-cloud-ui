import e from "axios";
import t from "qs";
import { useAxios as n } from "@vueuse/integrations/useAxios";
import { Md5 as r } from "ts-md5";
import { assignIn as i, isEmpty as a, isFunction as o, merge as s, replace as c, toUpper as l } from "lodash-es";
import u from "moment";
import "moment/dist/locale/zh-cn";
import { generateFromString as d } from "generate-avatar";
import { sm2 as f, sm4 as p } from "sm-crypto-v2";
import { Base64 as m } from "js-base64";
import h from "sweetalert2";
import { SHA256 as g, enc as _, lib as v } from "crypto-js";
//#region src/enums/index.ts
var y = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), b = /* @__PURE__ */ function(e) {
	return e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e;
}({}), x = /* @__PURE__ */ function(e) {
	return e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e;
}({}), S = /* @__PURE__ */ function(e) {
	return e[e.FORBIDDEN = 0] = "FORBIDDEN", e[e.ENABLE = 1] = "ENABLE", e[e.LOCKING = 2] = "LOCKING", e[e.EXPIRED = 3] = "EXPIRED", e;
}({}), C = /* @__PURE__ */ function(e) {
	return e.BASIC = "Basic ", e.BEARER = "Bearer ", e;
}({}), w = /* @__PURE__ */ function(e) {
	return e.AUTHORIZATION_CODE = "authorization_code", e.REFRESH_TOKEN = "refresh_token", e.CLIENT_CREDENTIALS = "client_credentials", e.PASSWORD = "password", e.SOCIAL_CREDENTIALS = "social_credentials", e.WEBAUTHN_CREDENTIALS = "webauthn_credentials", e.DEVICE_CODE = "urn:ietf:params:oauth:grant-type:device_code", e.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer", e.TOKEN_EXCHANGE = "urn:ietf:params:oauth:grant-type:token-exchange", e;
}({}), T = /* @__PURE__ */ function(e) {
	return e.CLIENT_SECRET_BASIC = "client_secret_basic", e.CLIENT_SECRET_POST = "client_secret_post", e.CLIENT_SECRET_JWT = "client_secret_jwt", e.PRIVATE_KEY_JWT = "private_key_jwt", e.NONE = "none", e.TLS_CLIENT_AUTH = "tls_client_auth", e.SELF_SIGNED_TLS_CLIENT_AUTH = "self_signed_tls_client_auth", e;
}({}), E = /* @__PURE__ */ function(e) {
	return e.OPENID = "openid", e.EMAIL = "email", e.PROFILE = "profile", e.PHONE = "phone", e.ADDRESS = "address", e.ROLES = "roles", e.CLIENT_CREATE = "client.create", e.CLIENT_READ = "client.read", e;
}({}), D = /* @__PURE__ */ function(e) {
	return e.CREATE = "create", e.EDIT = "edit", e.AUTHORIZE = "authorize", e.INFO = "info", e.ALLOCATABLE = "allocatable", e.SETUP = "setup", e.INVOKE = "invoke", e;
}({}), O = /* @__PURE__ */ new Map(), k = (e) => {
	if (!a(e.params)) {
		let t = r.hashStr(e.params);
		return [
			e.method,
			e.url,
			t
		].join("&");
	}
	return [e.method, e.url].join("&");
}, A = class {
	addPending(t) {
		this.removePending(t);
		let n = k(t);
		t.cancelToken = t.cancelToken || new e.CancelToken((e) => {
			O.has(n) || O.set(n, e);
		});
	}
	removeAllPending() {
		O.forEach((e) => {
			e && o(e) && e();
		}), O.clear();
	}
	removePending(e) {
		let t = k(e);
		if (O.has(t)) {
			let e = O.get(t);
			e && e(t), O.delete(t);
		}
	}
	reset() {
		O = /* @__PURE__ */ new Map();
	}
}, j = class {
	axiosInstance;
	defaultAxiosRequestConfig;
	defaultRequestOptions;
	axiosInstanceHooks;
	constructor(e, t, n) {
		this.defaultAxiosRequestConfig = e, this.defaultRequestOptions = n, this.axiosInstanceHooks = t, this.axiosInstance = this.createAxiosInstance(e), this.setupInterceptors();
	}
	createAxiosInstance(t) {
		return e.create(t);
	}
	getDefaultAxiosRequestConfig() {
		return this.defaultAxiosRequestConfig;
	}
	getDefaultRequestOptions() {
		return this.defaultRequestOptions;
	}
	getAxiosInstanceHooks() {
		return this.axiosInstanceHooks;
	}
	getAxiosInstance() {
		return this.axiosInstance;
	}
	createHttpHeaderPolicy(e) {
		switch (e) {
			case b.URL_ENCODED: return {
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				dataConvert: (e) => t.stringify(e, { arrayFormat: "brackets" })
			};
			case b.MULTI_PART: return {
				headers: { "Content-Type": "multipart/form-data" },
				dataConvert: (e) => e
			};
			default: return {
				headers: { "Content-Type": "application/json" },
				dataConvert: (e) => JSON.stringify(e)
			};
		}
	}
	setupInterceptors() {
		let e = this.getAxiosInstanceHooks();
		if (!e) return;
		let { requestInterceptors: t, requestInterceptorsError: n, responseInterceptors: r, responseInterceptorsError: i } = e, a = new A();
		this.getAxiosInstance().interceptors.request.use((e) => {
			let { prohibitRepeatRequests: n } = this.getDefaultRequestOptions();
			return n && a.addPending(e), t(e);
		}, (e) => n(this.getAxiosInstance(), e)), this.getAxiosInstance().interceptors.response.use((e) => (e && a.removePending(e.config), r(e)), (e) => i(this.getAxiosInstance(), e));
	}
	mergeHttpRequestOptions(e) {
		let t = this.getDefaultRequestOptions();
		return a(e) ? t : s({}, t, e);
	}
	mergeAxiosRequestConfigs(e) {
		let n = s({}, this.getDefaultAxiosRequestConfig(), { paramsSerializer: { serialize(e) {
			return t.stringify(e, { arrayFormat: "brackets" });
		} } });
		return a(e) ? n : s({}, n, e);
	}
	setupRequestStrategy(e, t, n) {
		let { onRequestHook: r } = this.getAxiosInstanceHooks(), i = this.mergeHttpRequestOptions(n), c = this.mergeAxiosRequestConfigs(t);
		r && o(r) && (c = r(c, i));
		let l = this.createHttpHeaderPolicy(i.contentType);
		return c.headers ? c.headers = s(c.headers, l.headers) : c.headers = l.headers, c.url = e, a(c.data) || (c.data = l.dataConvert(c.data)), {
			config: c,
			options: i
		};
	}
	request(e, t) {
		return new Promise((n, r) => {
			let { onResponseErrorHook: i, onResponseSuccessHook: a } = this.getAxiosInstanceHooks();
			this.getAxiosInstance().request(e).then((e) => {
				a && o(a) ? n(a(e, t)) : n(e);
			}).catch((e) => {
				i && o(i) ? r(i(e, t)) : r(e);
			});
		});
	}
	process(e, t, n = {}) {
		let r = this.setupRequestStrategy(e, t, n);
		return this.request(r.config, r.options);
	}
	get(e, t = {}, n = { contentType: b.JSON }) {
		return this.process(e, {
			params: t,
			method: x.GET
		}, n);
	}
	post(e, t, n = { contentType: b.JSON }, r) {
		return this.process(e, {
			...r,
			data: t,
			method: x.POST
		}, n);
	}
	postWithParams(e, t, n = {}, r = { contentType: b.JSON }, i) {
		return this.process(e, {
			...i,
			params: t,
			data: n,
			method: x.POST
		}, r);
	}
	put(e, t, n = { contentType: b.JSON }, r) {
		return this.process(e, {
			...r,
			data: t,
			method: x.PUT
		}, n);
	}
	putWithParams(e, t, n = {}, r = { contentType: b.JSON }, i) {
		return this.process(e, {
			...i,
			params: t,
			data: n,
			method: x.PUT
		}, r);
	}
	delete(e, t = {}, n = { contentType: b.JSON }) {
		return this.process(e, {
			data: t,
			method: x.DELETE
		}, n);
	}
	deleteWithParams(e, t, n = {}, r = { contentType: b.JSON }) {
		return this.process(e, {
			params: t,
			data: n,
			method: x.DELETE
		}, r);
	}
}, M = (e, t) => {
	let n = {};
	n = "statusText" in e ? e.data : e;
	let r = {
		status: e.status,
		code: 0,
		detail: ""
	};
	return r.code = n && n.code ? n.code : 0, r.detail = n.error && n.error.detail ? n.error.detail : "", n.message ? r.message = n.message : n.error && n.error.message ? r.message = n.error.message : t && (r.message = t), r;
}, N = (e) => {
	let n = `rgba(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
	console.log("%c┍------------------------------------------------------------------------------------------┑", `color:${n};`), "config" in e ? (console.log("| 请求地址：", e.config.url), console.log("| 请求类型：", l(e.config.method)), console.log("| 请求参数：", t.parse(e.config.params)), console.log("| 响应数据：", e.data)) : "status" in e ? console.log("| 响应数据：", e.data) : console.log("| 响应数据：", e), console.log("%c┕------------------------------------------------------------------------------------------┙", `color:${n};`);
}, P = (e) => e && "statusText" in e ? /^(2|3)\d{2}$/.test(String(e.status)) : !1, F = class {
	http = {};
	project = "";
	clientId = "";
	clientSecret = "";
	oidc = !1;
	uaaAddress = "";
	upmsAddress = "";
	msgAddress = "";
	ossAddress = "";
	bpmnAddress = "";
	cmdbAddress = "";
	iotAddress = "";
	manageAddress = "";
	proxy = "";
	constructor(e, t) {
		this.http = e, this.project = t.project, this.clientId = t.clientId, this.clientSecret = t.clientSecret, this.oidc = t.oidc ? t.oidc : !1, this.proxy = t.proxy ? t.proxy : "/api", this.switch(t.project);
	}
	switch(e) {
		switch (e) {
			case "dante":
				this.uaaAddress = "/dante-cloud-uaa", this.upmsAddress = "/dante-cloud-upms", this.msgAddress = "/dante-cloud-message", this.ossAddress = "/dante-cloud-oss-ability", this.bpmnAddress = "/dante-cloud-bpmn-ability/engine-rest", this.cmdbAddress = "/dante-cloud-cmdb-ability", this.iotAddress = "/dante-cloud-iot-ability", this.manageAddress = "/dante-cloud-manage-ability";
				break;
			case "herodotus":
				this.uaaAddress = "/herodotus-cloud-uaa", this.upmsAddress = "/herodotus-cloud-upms", this.msgAddress = "/herodotus-cloud-message", this.ossAddress = "/herodotus-cloud-oss-ability", this.bpmnAddress = "/herodotus-cloud-bpmn-ability/engine-rest", this.cmdbAddress = "/herodotus-cloud-cmdb-ability", this.iotAddress = "/herodotus-cloud-iot-ability", this.manageAddress = "/herodotus-cloud-manage-ability";
				break;
			default: this.uaaAddress = "", this.upmsAddress = "", this.msgAddress = "", this.ossAddress = "", this.bpmnAddress = "/engine-rest", this.cmdbAddress = "", this.iotAddress = "", this.manageAddress = "";
		}
	}
	getProject() {
		return this.project;
	}
	getClientSecret() {
		return this.clientSecret;
	}
	getClientId() {
		return this.clientId;
	}
	isOidc() {
		return this.oidc;
	}
	getProxy() {
		return this.proxy;
	}
	getHttp() {
		return this.http;
	}
	processProxy(e, t = !0) {
		return t ? this.proxy + e : e;
	}
	getUaa(e = !0) {
		return this.processProxy(this.uaaAddress, e);
	}
	getUpms(e = !0) {
		return this.processProxy(this.upmsAddress, e);
	}
	getMsg(e = !0) {
		return this.processProxy(this.msgAddress, e);
	}
	getOss(e = !0) {
		return this.processProxy(this.ossAddress, e);
	}
	getBpmn(e = !0, t = !1) {
		let n = this.processProxy(this.bpmnAddress, e);
		return t ? c(n, "engine-rest", "camunda-extended") : n;
	}
	getCmdb(e = !0) {
		return this.processProxy(this.cmdbAddress, e);
	}
	getIot(e = !0) {
		return this.processProxy(this.iotAddress, e);
	}
	getManage(e = !0) {
		return this.processProxy(this.manageAddress, e);
	}
}, I = class {
	config;
	constructor(e) {
		this.config = e;
	}
	getConfig() {
		return this.config;
	}
	getParamPath(e, t) {
		return e + "/" + t;
	}
	getIdPath(e) {
		return this.getParamPath(this.getBaseAddress(), e);
	}
}, L = class extends I {
	getConditionAddress() {
		return this.getBaseAddress() + "/condition";
	}
	getListAddress() {
		return this.getBaseAddress() + "/list";
	}
	getTreeAddress() {
		return this.getBaseAddress() + "/tree";
	}
	fetch(e = {}) {
		return this.getConfig().getHttp().get(this.getBaseAddress(), e);
	}
	fetchByPage(e, t = {}) {
		if (a(t)) return this.getConfig().getHttp().get(this.getBaseAddress(), e);
		{
			let n = Object.assign(e, t);
			return this.getConfig().getHttp().get(this.getConditionAddress(), n);
		}
	}
	fetchAll(e = {}) {
		return this.getConfig().getHttp().get(this.getListAddress(), e);
	}
	fetchTree(e = {}) {
		return this.getConfig().getHttp().get(this.getTreeAddress(), e);
	}
	saveOrUpdate(e) {
		return this.getConfig().getHttp().post(this.getBaseAddress(), e);
	}
	delete(e) {
		return this.getConfig().getHttp().delete(this.getIdPath(e));
	}
	assign(e) {
		return this.getConfig().getHttp().put(this.getBaseAddress(), e, { contentType: b.URL_ENCODED });
	}
};
//#endregion
//#region src/lib/utils/moment.ts
u.locale("zh-cn");
var R = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${d(e)}`;
	}
}.getInstance(), z = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return f.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + f.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return f.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, B = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return p.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return p.decrypt(e, t, { output: "string" });
	}
}, V = z.getInstance(), H = B.getInstance(), U = h.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", h.stopTimer), e.addEventListener("mouseleave", h.resumeTimer);
	}
}), W = (e) => e === y.SYSTEM ? "auto" : e, G = class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = W(e);
	}
	static initialize(t) {
		if (e._initialized) throw Error("RouterUtilities has already been initialized");
		return e._instance = new e(t), e._initialized = !0, e._instance;
	}
	static getInstance() {
		if (!e._instance) throw Error("RouterUtilities not initialized. Call initialize() first.");
		return e._instance;
	}
	setTheme(e) {
		this.theme = W(e);
	}
	information(e, t, n) {
		return h.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
			theme: this.theme,
			timer: 5e3,
			showConfirmButton: !1,
			showClass: { popup: "animate__animated animate__fadeIn" },
			hideClass: { popup: "animate__animated animate__fadeOut" }
		});
	}
	info(e, t = "") {
		return this.information(e, t, "info");
	}
	error(e, t = "") {
		return this.information(e, t, "error");
	}
	warning(e, t = "") {
		return this.information(e, t, "warning");
	}
	success(e, t = "") {
		return this.information(e, t, "success");
	}
	question(e, t = "") {
		return this.information(e, t, "question");
	}
	getConfirmButtonColor() {
		return this.theme === "light" ? "#6750A4" : "#2563eb";
	}
	standardDeleteNotify(e, t) {
		h.fire({
			title: "确定删除?",
			text: "您将无法恢复此操作！",
			icon: "warning",
			theme: this.theme,
			showCancelButton: !0,
			confirmButtonColor: this.getConfirmButtonColor(),
			cancelButtonColor: "#d33",
			confirmButtonText: "是的, 删除!",
			cancelButtonText: "取消"
		}).then((n) => {
			n.value ? e() : t && t();
		});
	}
	signOutNotify(e, t) {
		h.fire({
			title: "要走了么?",
			text: "您确定要退出系统！",
			icon: "warning",
			theme: this.theme,
			showCancelButton: !0,
			confirmButtonColor: this.getConfirmButtonColor(),
			cancelButtonColor: "#d33",
			confirmButtonText: "是的",
			cancelButtonText: "取消"
		}).then((n) => {
			n.value ? e() : t && t();
		});
	}
	tokenExpiresNotify(e, t, n, r) {
		h.fire({
			title: e,
			text: t,
			icon: n,
			theme: this.theme,
			showClass: { popup: "animate__animated animate__fadeInDown" },
			hideClass: { popup: "animate__animated animate__fadeOutUp" },
			confirmButtonText: "已阅!",
			willClose: () => {
				r();
			}
		});
	}
}.initialize(y.LIGHT), K = class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = W(e);
	}
	static initialize(t) {
		if (e._initialized) throw Error("RouterUtilities has already been initialized");
		return e._instance = new e(t), e._initialized = !0, e._instance;
	}
	static getInstance() {
		if (!e._instance) throw Error("RouterUtilities not initialized. Call initialize() first.");
		return e._instance;
	}
	setTheme(e) {
		this.theme = W(e);
	}
	information(e, t) {
		return U.fire({
			icon: t,
			title: e,
			theme: this.theme
		});
	}
	info(e) {
		return this.information(e, "info");
	}
	error(e) {
		return this.information(e, "error");
	}
	warning(e) {
		return this.information(e, "warning");
	}
	success(e) {
		return this.information(e, "success");
	}
	question(e) {
		return this.information(e, "question");
	}
}.initialize(y.LIGHT), q = (e) => {
	G.setTheme(e), K.setTheme(e);
}, J = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	toBytesInt32(e) {
		let t = /* @__PURE__ */ new ArrayBuffer(4);
		return new DataView(t).setUint32(0, e, !1), t;
	}
	getRandomValues(e) {
		let t = v.WordArray.random(e), n = [];
		return t.words.forEach((e) => {
			let t = this.toBytesInt32(e), r = new Uint8Array(t);
			for (let e = 0; e < 4; e++) {
				let t = r[e];
				t !== void 0 && n.push(t);
			}
		}), n;
	}
	random(e) {
		let t = "", n = this.getRandomValues(e);
		for (let r = 0; r < e; r++) {
			let e = n[r];
			if (e !== void 0) {
				let n = e % 66;
				t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[n];
			}
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return g(e).toString(_.Base64url);
	}
	generateCodePair(e = 43) {
		if (e < 43 || e > 128) throw `Expected a length between 43 and 128. Received ${e}.`;
		let t = this.generateVerifier(e);
		return {
			codeVerifier: t,
			codeChallenge: this.generateChallenge(t)
		};
	}
	verifyChallenge(e, t) {
		return this.generateChallenge(e) === t;
	}
}.getInstance();
//#endregion
//#region src/hooks/useHttp.ts
function Y(r) {
	let a = {
		timeout: 1e3 * 12,
		paramsSerializer: (e) => t.stringify(e, { arrayFormat: "brackets" })
	}, o = () => r ? i(a, r) : a, s = (e) => {
		switch (e) {
			case b.URL_ENCODED: return { "Content-Type": "application/x-www-form-urlencoded" };
			case b.MULTI_PART: return { "Content-Type": "multipart/form-data" };
			default: return { "Content-Type": "application/json" };
		}
	}, c = (e, t, n) => {
		let r = { Authorization: C.BEARER + e };
		return t && (r["X-Herodotus-Session-Id"] = t), n && (r["X-Herodotus-Tenant-Id"] = n), r;
	}, l = (e, t, n, r) => {
		let i = { Authorization: C.BASIC + m.encode(e + ":" + t) };
		return n && (i["X-Herodotus-Session-Id"] = n), r && (i["X-Herodotus-Tenant-Id"] = r), i;
	}, u = (e, t) => {
		let n = s(e);
		return t ? i({}, n, t) : n;
	}, d = e.create(o()), f = (e, t = {}, r = {}, i = x.GET, a = b.JSON, o) => {
		let { execute: s } = n(e, {
			headers: u(a, o),
			method: i
		}, d, { immediate: !1 }), c = {};
		return t && (c.data = t), r && (c.params = r), new Promise((e, t) => {
			s(c).then((t) => {
				let n = t.response.value;
				e(n);
			}).catch((e) => {
				t(e);
			});
		});
	};
	return {
		doGet: (e, t = {}, n) => f(e, "", t, x.GET, b.JSON, n),
		doPost: (e, t = {}, n = b.JSON, r = {}, i) => f(e, t, r, x.POST, n, i),
		doPut: (e, t = {}, n = b.JSON, r = {}) => f(e, t, r, x.PUT, n),
		doDelete: (e, t = {}, n = b.JSON, r = {}) => f(e, t, r, x.DELETE, n),
		createHeaderWithBearer: c,
		createHeaderWithBasic: l
	};
}
//#endregion
export { L as AbstractService, w as AuthorizationGrantTypeEnum, C as AuthorizationTokenEnum, R as AvatarUtils, j as Axios, m as Base64, E as BuildInScopeEnum, T as ClientAuthenticationMethodEnum, b as ContentTypeEnum, F as HttpConfig, x as HttpMethodEnum, D as OperationEnum, J as PKCE, V as SM2Utils, H as SM4Utils, I as Service, S as StatusEnum, h as Swal, y as ThemeModeEnum, q as changeSwalTheme, P as isSuccess, N as logResponse, u as moment, G as notify, M as parseResponseStatus, K as toast, Y as useHttp };
