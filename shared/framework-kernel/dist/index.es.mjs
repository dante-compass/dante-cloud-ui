import { useRoute as e } from "vue-router";
import { defineStore as t } from "pinia";
import { AuthorizationGrantTypeEnum as n, AuthorizationTokenEnum as r, Base64 as i, BuildInScopeEnum as a, ContentTypeEnum as o, SM2Utils as s, SM4Utils as c, Swal as l, moment as u } from "@herodotus-cloud/core";
import { jwtDecode as d } from "jwt-decode";
import { dropRight as f, findIndex as p, has as m, intersection as h, isEmpty as g, join as _, merge as v, remove as y, split as b } from "lodash-es";
import { computed as x, nextTick as S, shallowRef as C, watch as w } from "vue";
import "pinia-plugin-persistedstate";
//#region src/declarations/enums.ts
var T = /* @__PURE__ */ function(e) {
	return e.DEFAULT = "defaults", e.CLASSIC = "classic", e.TRANSVERSE = "transverse", e.COLUMNS = "transverse", e;
}({}), E = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), D = /* @__PURE__ */ function(e) {
	return e.JIGSAW = "JIGSAW", e.WORD_CLICK = "WORD_CLICK", e.ARITHMETIC = "ARITHMETIC", e.CHINESE = "CHINESE", e.CHINESE_GIF = "CHINESE_GIF", e.SPEC_GIF = "SPEC_GIF", e.SPEC = "SPEC", e.HUTOOL_LINE = "HUTOOL_LINE", e.HUTOOL_CIRCLE = "HUTOOL_CIRCLE", e.HUTOOL_SHEAR = "HUTOOL_SHEAR", e.HUTOOL_GIF = "HUTOOL_GIF", e;
}({}), O = /* @__PURE__ */ function(e) {
	return e.INSTITUTION = "INSTITUTION", e.SMS = "SMS", e.WXAPP = "WXAPP", e.QQ = "QQ", e.WEIBO = "WEIBO", e.BAIDU = "BAIDU", e.WECHAT_OPEN = "WECHAT_OPEN", e.WECHAT_MP = "WECHAT_MP", e.WECHAT_ENTERPRISE = "WECHAT_ENTERPRISE", e.WECHAT_ENTERPRISE_WEB = "WECHAT_ENTERPRISE_WEB", e.DINGTALK = "DINGTALK", e.DINGTALK_ACCOUNT = "DINGTALK_ACCOUNT", e.ALIYUN = "ALIYUN", e.TAOBAO = "TAOBAO", e.ALIPAY = "ALIPAY", e.TEAMBITION = "TEAMBITION", e.HUAWEI_V2 = "HUAWEI_V2", e.FEISHU = "FEISHU", e.JD = "JD", e.DOUYIN = "DOUYIN", e.TOUTIAO = "TOUTIAO", e.MI = "MI", e.RENREN = "RENREN", e.MEITUAN = "MEITUAN", e.ELEME = "ELEME", e.KUJIALE = "KUJIALE", e.XMLY = "XMLY", e.GITEE = "GITEE", e.OSCHINA = "OSCHINA", e.CSDN = "CSDN", e.GITHUB = "GITHUB", e.GITLAB = "GITLAB", e.STACK_OVERFLOW = "STACK_OVERFLOW", e.CODING = "CODING", e.GOOGLE = "GOOGLE", e.MICROSOFT = "MICROSOFT", e.FACEBOOK = "FACEBOOK", e.LINKEDIN = "LINKEDIN", e.TWITTER = "TWITTER", e.AMAZON = "AMAZON", e.SLACK = "SLACK", e.LINE = "LINE", e.OKTA = "OKTA", e.PINTEREST = "PINTEREST", e;
}({}), k = /* @__PURE__ */ function(e) {
	return e.APP = "APP", e.PERSONAL = "PERSONAL", e;
}({}), A = t("Application", {
	state: () => ({
		leftDrawer: !0,
		rightDrawer: !1,
		signInPanel: "account"
	}),
	actions: {
		switchToMobilePanel() {
			this.signInPanel = "mobile";
		},
		switchToScanPanel() {
			this.signInPanel = "scan";
		},
		switchToAccountPanel() {
			this.signInPanel = "account";
		}
	}
}), j = class e {
	static _instance = null;
	static _initialized = !1;
	options;
	constructor(e) {
		this.options = e;
	}
	static initialize(t) {
		if (e._initialized) throw Error("RouterUtilities has already been initialized");
		return e._instance = new e(t), e._initialized = !0, e._instance;
	}
	static getInstance() {
		if (!e._instance) throw Error("RouterUtilities not initialized. Call initialize() first.");
		return e._instance;
	}
	setOptions(e) {
		this.options = e;
	}
	getOptions() {
		return this.options;
	}
	static axiosConfig() {
		return this.getInstance().getOptions().config;
	}
	static getRouterOptions() {
		return this.getInstance().getOptions().router;
	}
	static getRouter() {
		return this.getRouterOptions().instance;
	}
	static getRoutes() {
		return this.getInstance().getOptions().staticRoutes;
	}
	static getSecurityKey() {
		return this.getInstance().getOptions().variables.securityKey;
	}
	static getRedirectUri() {
		return this.getInstance().getOptions().variables.redirectUri;
	}
	static isUseCrypto() {
		return this.getInstance().getOptions().variables.isUseCrypto;
	}
	static isAutoRefreshToken() {
		return this.getInstance().getOptions().variables.isAutoRefreshToken;
	}
	static getTenantId() {
		return this.getInstance().getOptions().variables.tenantId;
	}
}, M = class e {
	static _instance = null;
	static _initialized = !1;
	options;
	router = {};
	constructor(e) {
		this.options = e, this.router = e.instance;
	}
	static initialize(t) {
		if (e._initialized) throw Error("RouterUtilities has already been initialized");
		return e._instance = new e(t), e._initialized = !0, e._instance;
	}
	static getInstance() {
		if (!e._instance) throw Error("RouterUtilities not initialized. Call initialize() first.");
		return e._instance;
	}
	setRouter(e) {
		this.router = e;
	}
	getRouter() {
		return this.router;
	}
	isRouterExist() {
		return !g(this.router);
	}
	hasParameter(e) {
		return !g(e.params) || !g(e.query);
	}
	isDetailRoute(e) {
		return !!(e.meta && e.meta.isDetailContent);
	}
	isValidDetailRoute(e) {
		return this.isDetailRoute(e) && this.hasParameter(e);
	}
	push(e) {
		return this.router.push(e);
	}
	replace(e) {
		return this.router.replace(e);
	}
	to(e, t = !1) {
		t ? this.push(e) : this.replace(e);
	}
	open(e) {
		let t = this.router.resolve(e);
		window.open(t.href, "_blank");
	}
	goBack() {
		this.router.go(-1);
	}
	refresh() {
		this.isRouterExist() ? this.router.go(0) : window.location.reload();
	}
	toRoot() {
		this.isRouterExist() && this.to(this.options.path.root);
	}
	toHome() {
		this.isRouterExist() && this.to(this.options.path.home);
	}
	toSignIn() {
		this.isRouterExist() ? this.to(this.options.path.signIn) : this.refresh();
	}
	getParent(e) {
		return _(f(b(e, "/")), "/");
	}
	toPrev(e) {
		if (e.path) {
			let t = this.getParent(e.path);
			this.to({ path: t });
		} else this.goBack();
	}
}, N = class e {
	static _instance = null;
	static _initialized = !1;
	extension;
	constructor(e) {
		this.extension = e;
	}
	static initialize(t) {
		if (e._initialized) throw Error("SignOutUtilities has already been initialized");
		return e._instance = new e(t), e._initialized = !0, e._instance;
	}
	static getInstance() {
		if (!e._instance) throw Error("SignOutUtilities not initialized. Call initialize() first.");
		return e._instance;
	}
	signOut(e = !1) {
		e || R().signOut(), this.extension(), console.log("Clear Framework Kernel Data"), R().$reset(), L().$reset(), M.getInstance().toSignIn();
	}
	signOutWithDialog() {
		l.fire({
			title: "要走了么?",
			text: "您确定要退出系统！",
			icon: "warning",
			showCancelButton: !0,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "是的",
			cancelButtonText: "取消"
		}).then((e) => {
			e.value && this.signOut();
		});
	}
	tokenExpires(e, t, n, r = !1) {
		l.fire({
			title: e,
			text: t,
			icon: n,
			showClass: { popup: "animate__animated animate__fadeInDown" },
			hideClass: { popup: "animate__animated animate__fadeOutUp" },
			confirmButtonText: "已阅!",
			willClose: () => {
				this.signOut(r);
			}
		});
	}
}, P = class e {
	static instance = null;
	config = {};
	constructor(e) {
		this.config = e;
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getOAuth2TokenAddress() {
		return this.config.getUaa() + "/oauth2/token";
	}
	getOAuth2RevokeAddress() {
		return this.config.getUaa() + "/oauth2/revoke";
	}
	getOAuth2SignOutAddress() {
		return this.config.getUaa() + "/oauth2/sign-out";
	}
	getOAuth2DeviceAuthorizationAddress() {
		return this.config.getUaa() + "/oauth2/device_authorization";
	}
	getOIDCConnectRegisterAddress() {
		return this.config.getUaa() + "/connect/register";
	}
	createBasicHeader(e = "", t = "") {
		let n = this.config.getClientId() + ":" + this.config.getClientSecret();
		return e && t && (n = e + ":" + t), r.BASIC + i.encode(n);
	}
	createClientData(e = "", t = "", n = "") {
		let r = {
			client_id: "",
			client_secret: ""
		};
		return e && t ? (r.client_id = e, r.client_secret = t) : (r.client_id = this.config.getClientId(), r.client_secret = this.config.getClientSecret()), n && v(r, { scope: n }), r;
	}
	createOAuth2Data(e, t, n = !1) {
		let r = { grant_type: e };
		return g(t) || v(r, t), n && v(r, { scope: "openid" }), r;
	}
	signOut(e, t = "", n = "") {
		return this.config.getHttp().put(this.getOAuth2SignOutAddress(), { accessToken: e }, { contentType: o.URL_ENCODED }, { headers: { Authorization: this.createBasicHeader(t, n) } });
	}
	revoke(e, t = "", n = "") {
		return this.config.getHttp().post(this.getOAuth2RevokeAddress(), { token: e }, { contentType: o.URL_ENCODED }, { headers: { Authorization: this.createBasicHeader(t, n) } });
	}
	refreshTokenFlow(e, t = !1, r = "", i = "") {
		return this.config.getHttp().post(this.getOAuth2TokenAddress(), this.createOAuth2Data(n.REFRESH_TOKEN, { refresh_token: e }, t), { contentType: o.URL_ENCODED }, { headers: { Authorization: this.createBasicHeader(r, i) } });
	}
	passwordFlow(e, t, r = !1, i = "", a = "") {
		return this.config.getHttp().post(this.getOAuth2TokenAddress(), this.createOAuth2Data(n.PASSWORD, {
			username: e,
			password: t
		}, r), { contentType: o.URL_ENCODED }, { headers: { Authorization: this.createBasicHeader(i, a) } });
	}
	authorizationCodeFlow(e, t, r = "", i = !1, a = "", s = "") {
		return this.config.getHttp().post(this.getOAuth2TokenAddress(), this.createOAuth2Data(n.AUTHORIZATION_CODE, {
			code: e,
			state: r,
			redirect_uri: t
		}, i), { contentType: o.URL_ENCODED }, { headers: { Authorization: this.createBasicHeader(a, s) } });
	}
	clientCredentialsFlow(e = "", t = "", r = "") {
		return this.config.getHttp().post(this.getOAuth2TokenAddress(), this.createOAuth2Data(n.CLIENT_CREDENTIALS, { ...this.createClientData(e, t, r) }), { contentType: o.URL_ENCODED });
	}
	deviceCodeFlow(e, t = "", r = "", i = "") {
		return this.config.getHttp().post(this.getOAuth2TokenAddress(), this.createOAuth2Data(n.DEVICE_CODE, {
			device_code: e,
			...this.createClientData(t, r, i)
		}), { contentType: o.URL_ENCODED });
	}
	deviceAuthorizationFlow(e = "", t = "", n = a.EMAIL) {
		return this.config.getHttp().post(this.getOAuth2DeviceAuthorizationAddress(), this.createClientData(e, t, n), { contentType: o.URL_ENCODED });
	}
	socialCredentialsFlowBySms(e, t, r = !1, i = "", a = "") {
		return this.config.getHttp().post(this.getOAuth2TokenAddress(), this.createOAuth2Data(n.SOCIAL_CREDENTIALS, {
			mobile: e,
			code: t,
			source: O.SMS
		}, r), { contentType: o.URL_ENCODED }, { headers: { Authorization: this.createBasicHeader(i, a) } });
	}
	socialCredentialsFlowByJustAuth(e, t, r = !1, i = "", a = "") {
		return this.config.getHttp().post(this.getOAuth2TokenAddress(), this.createOAuth2Data(n.SOCIAL_CREDENTIALS, {
			...t,
			source: e
		}, r), { contentType: o.URL_ENCODED }, { headers: { Authorization: this.createBasicHeader(i, a) } });
	}
}, F = class e {
	static instance = null;
	config = {};
	constructor(e) {
		this.config = e;
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	createSession(e = "") {
		let t = this.config.getUaa() + "/open/identity/session";
		return this.config.getHttp().post(t, {
			clientId: this.config.getClientId(),
			clientSecret: this.config.getClientSecret(),
			sessionId: e
		});
	}
	exchange(e = "", t) {
		let n = this.config.getUaa() + "/open/identity/exchange";
		return this.config.getHttp().post(n, {
			publicKey: t,
			sessionId: e
		});
	}
	getPrompt(e) {
		let t = this.config.getUaa() + "/open/identity/prompt";
		return this.config.getHttp().post(t, { username: e });
	}
	createCaptcha(e, t) {
		let n = this.config.getUaa() + "/open/captcha";
		return this.config.getHttp().get(n, {
			identity: e,
			category: t
		});
	}
	verifyCaptcha(e, t, n) {
		let r = this.config.getUaa() + "/open/captcha", i = {
			identity: e,
			category: t,
			coordinate: {
				x: 0,
				y: 0
			},
			coordinates: [],
			characters: ""
		};
		return t === D.WORD_CLICK ? i.coordinates = n : t === D.JIGSAW ? i.coordinate = n : i.characters = n, this.config.getHttp().post(r, i);
	}
	createVerificationCode(e) {
		let t = this.config.getUpms() + "/open/identity/verification-code";
		return this.config.getHttp().post(t, { mobile: e }, { contentType: o.URL_ENCODED });
	}
	getSocialList() {
		let e = this.config.getUpms() + "/open/identity/sources";
		return this.config.getHttp().get(e);
	}
}, I = class e {
	static _instance = null;
	static _initialized = !1;
	config = {};
	constructor(e) {
		this.config = e;
	}
	static initialize(t) {
		if (e._initialized) throw Error("SecurityApiResources has already been initialized");
		return e._instance = new e(t), e._initialized = !0, e._instance;
	}
	static getInstance() {
		if (!e._instance) throw Error("SecurityApiResources not initialized. Call initialize() first.");
		return e._instance;
	}
	getConfig() {
		return this.config;
	}
	open() {
		return F.getInstance(this.config);
	}
	oauth2() {
		return P.getInstance(this.config);
	}
}, L = t("Crypto", {
	state: () => ({
		sessionId: "",
		key: "",
		state: ""
	}),
	actions: {
		setSessionId(e) {
			this.sessionId = e;
		},
		setKey(e) {
			this.key = c.encrypt(e, j.getSecurityKey());
		},
		getKey() {
			return c.decrypt(this.key, j.getSecurityKey());
		},
		encrypt(e) {
			let t = this.getKey();
			return c.encrypt(e, t);
		},
		decrypt(e) {
			let t = this.getKey();
			return c.decrypt(e, t);
		},
		exchange(e = "") {
			return new Promise((t, n) => {
				I.getInstance().open().createSession(e).then((e) => {
					let n = e.data;
					if (n) {
						let e = n.sessionId, r = n.publicKey;
						this.state = n.state;
						let i = s.createKeyPair(), a = s.encrypt(i.publicKey, r);
						I.getInstance().open().exchange(e, a).then((n) => {
							let r = n.data, a = s.decrypt(r, i.privateKey);
							this.setSessionId(e), this.setKey(a), t(a);
						});
					}
				}).catch((e) => {
					n(e);
				});
			});
		}
	},
	persist: { storage: sessionStorage }
}), R = t("Authentication", {
	state: () => ({
		access_token: "",
		expires_in: 0,
		refresh_token: "",
		license: "",
		openid: "",
		idToken: "",
		scope: "",
		token_type: "",
		errorTimes: 0,
		remainTimes: 0,
		locked: !1,
		userId: "",
		username: "",
		employeeId: "",
		avatar: "",
		roles: []
	}),
	getters: {
		isNotExpired: (e) => u(u().add(e.expires_in, "seconds").valueOf()).add(1, "seconds").diff(u(), "seconds") !== 0,
		token() {
			return j.isAutoRefreshToken() || this.isNotExpired ? this.access_token : "";
		}
	},
	actions: {
		getBearerToken() {
			return r.BEARER + this.token;
		},
		getAuthorizationHeader() {
			return {
				Authorization: this.getBearerToken(),
				"X-Herodotus-Open-Id": this.userId
			};
		},
		saveAccessToken(e) {
			if (this.access_token = e.access_token, this.expires_in = e.expires_in, this.refresh_token = e.refresh_token ? e.refresh_token : "", this.license = e.refresh_token ? e.refresh_token : "", this.scope = e.scope, this.token_type = e.token_type, e.id_token) {
				this.idToken = e.id_token;
				let t = d(this.idToken);
				this.userId = t.openid, this.username = t.sub, this.avatar = t.avatar, this.employeeId = t.employeeId, this.roles = t.roles;
			} else if (e.openid) {
				let t = L();
				this.openid = e.openid;
				let n = t.decrypt(this.openid), r = JSON.parse(n);
				this.userId = r.userId, this.username = r.username, this.roles = r.roles, this.avatar = r.avatar, this.employeeId = r.employeeId;
			} else console.warn("There is no id token or openid in the data.");
		},
		setUserErrorStatus(e) {
			this.remainTimes = e.remainTimes, this.errorTimes = e.errorTimes, this.locked = e.locked;
		},
		isAlertMessage(e) {
			return e.code && [40106, 40111].includes(e.code);
		},
		setErrorPrompt(e, t) {
			this.isAlertMessage(e) && I.getInstance().open().getPrompt(t).then((e) => {
				this.setUserErrorStatus(e.data);
			});
		},
		signIn(e, t) {
			let n = L();
			return j.isUseCrypto() && (e = n.encrypt(e), t = n.encrypt(t)), new Promise((n, r) => {
				I.getInstance().oauth2().passwordFlow(e, t, j.isUseCrypto()).then((e) => {
					if (e) {
						let t = e;
						this.saveAccessToken(t);
					}
					this.access_token ? n(!0) : n(!1);
				}).catch((t) => {
					this.setErrorPrompt(t, e), r(t);
				});
			});
		},
		refreshToken() {
			return new Promise((e, t) => {
				I.getInstance().oauth2().refreshTokenFlow(this.refresh_token, j.isUseCrypto()).then((t) => {
					if (t) {
						let e = t;
						this.saveAccessToken(e);
					}
					this.access_token ? e(!0) : e(!1);
				}).catch((e) => {
					t(e);
				});
			});
		},
		signOut() {
			this.access_token && I.getInstance().oauth2().signOut(this.access_token).then(() => {
				console.log("Server side sign out successfully.");
			}).catch((e) => {
				console.log("Server side sign out has error.", e);
			});
		},
		authorizationCode(e, t = "") {
			return new Promise((n, r) => {
				I.getInstance().oauth2().authorizationCodeFlow(e, j.getRedirectUri(), t, j.isUseCrypto()).then((e) => {
					if (e) {
						let t = e;
						this.saveAccessToken(t);
					}
					this.access_token ? n(!0) : n(!1);
				}).catch((e) => {
					r(e);
				});
			});
		},
		smsSignIn(e, t) {
			let n = L();
			return j.isUseCrypto() && (e = n.encrypt(e), t = n.encrypt(t)), new Promise((n, r) => {
				I.getInstance().oauth2().socialCredentialsFlowBySms(e, t, j.isUseCrypto()).then((e) => {
					if (e) {
						let t = e;
						this.saveAccessToken(t);
					}
					this.access_token ? n(!0) : n(!1);
				}).catch((t) => {
					this.setErrorPrompt(t, e), r(t);
				});
			});
		},
		socialSignIn(e, t) {
			return new Promise((n, r) => {
				I.getInstance().oauth2().socialCredentialsFlowByJustAuth(e, t, j.isUseCrypto()).then((e) => {
					if (e) {
						let t = e;
						this.saveAccessToken(t);
					}
					this.access_token ? n(!0) : n(!1);
				}).catch((e) => {
					e.code && [40106, 40111].includes(e.code) && r(e);
				});
			});
		}
	},
	persist: !0
}), z = () => {
	let e = R(), t = L(), n = e.access_token, i = t.sessionId, a = {};
	n && (a.Authorization = r.BEARER + n), i && (a["X-Herodotus-Session-Id"] = i);
	let o = j.getTenantId();
	return o && (a["X-Herodotus-Tenant-Id"] = o), a["X-Herodotus-Api-Version"] = "v1", a;
}, B = t("Router", {
	state: () => ({
		appMenus: [],
		personalMenus: [],
		cachedRoutes: [],
		details: /* @__PURE__ */ new Map(/* @__PURE__ */ new Map()),
		pushParams: {}
	}),
	getters: { isDynamicRouteAdded() {
		return !g(this.appMenus) || !g(this.personalMenus);
	} },
	actions: {
		getDetailComponent(e) {
			return this.details.get(e);
		},
		getRoutePushParam(e) {
			return this.pushParams[e];
		},
		addMenus(e, t) {
			g(e) || (this.appMenus = e), g(t) || (this.personalMenus = t);
		},
		addCachedRoute(e) {
			if (!e.meta?.isNotKeepAlive) {
				let t = e.name;
				this.cachedRoutes.includes(t) || this.cachedRoutes.push(t);
			}
		},
		addDetailRoute(e) {
			let t = e.name;
			t && this.details.set(t, e.component);
		},
		hasParameter(e) {
			let t = e.name;
			return !!(t && m(this.pushParams, t));
		},
		isDetailRoute(e) {
			return !!(e.meta && e.meta.isDetailContent);
		},
		isValidDetailRoute(e) {
			return this.isDetailRoute(e) && this.hasParameter(e);
		},
		addRoutePushParam(e, t = {}) {
			e && (this.pushParams[e] = t);
		},
		removeRoutePushParam(e) {
			e && delete this.pushParams[e];
		}
	}
}), V = t("GlobalSettings", {
	state: () => ({
		theme: {
			mode: E.SYSTEM,
			isMixed: !0,
			primary: "#1867c0"
		},
		layout: T.DEFAULT,
		effect: { isUniqueOpened: !1 },
		display: {
			isTabsView: !0,
			isActivateLeftTab: !0,
			showBreadcrumbs: !0,
			showBreadcrumbsIcon: !0,
			table: { dense: !1 }
		}
	}),
	getters: {
		isDark: (e) => e.theme.mode === E.DARK,
		isLight: (e) => e.theme.mode === E.LIGHT,
		isSystem: (e) => e.theme.mode === E.SYSTEM,
		isDefaultLayout: (e) => e.layout === T.DEFAULT,
		isClassicLayout: (e) => e.layout === T.CLASSIC
	},
	persist: !0
}), H = t("TabsView", {
	state: () => ({
		tabs: [],
		activatedTab: {},
		activatedTabName: ""
	}),
	getters: {
		isNotLastTab: (e) => (t) => e.tabs.length - 1 !== t,
		getLastTabIndex: (e) => e.tabs.length - 1,
		getTabIndex: (e) => (t) => p(e.tabs, (e) => e.name === t.name),
		getActivatedTabIndex() {
			return this.getTabIndex(this.activatedTab);
		},
		isLastTabActivated() {
			return this.getActivatedTabIndex === this.getLastTabIndex;
		},
		isFirstTabActivated() {
			return this.getActivatedTabIndex === 0;
		},
		disableCloseCurrentTab() {
			return this.isLastTabActivated || this.isFirstTabActivated;
		},
		disableCloseLeftTabs() {
			return this.isFirstTabActivated;
		},
		disableCloseRightTabs() {
			return this.isLastTabActivated;
		},
		disableRefreshCurrentTab() {
			return !!(this.activatedTab.meta && this.activatedTab.meta.isDetailContent);
		}
	},
	actions: {
		convertRouteToTab(e) {
			return {
				name: e.name,
				path: e.path,
				meta: e.meta
			};
		},
		setActivatedTab(e) {
			S(() => {
				this.activatedTab = e, this.activatedTabName = e.name;
			});
		},
		isNotExistInStaticRoute(e) {
			return p(j.getRoutes(), (t) => t.path === e.path) === -1;
		},
		isTabNotOpened(e) {
			return this.getTabIndex(e) === -1;
		},
		openTab(e, t = !1) {
			this.isNotExistInStaticRoute(e) && (this.isTabNotOpened(e) && (t ? this.isLastTabActivated ? this.tabs.splice(this.getActivatedTabIndex, 0, e) : this.tabs.splice(this.getActivatedTabIndex + 1, 0, e) : this.tabs.push(e)), this.setActivatedTab(e));
		},
		closeTab(e) {
			y(this.tabs, (t) => t.name === e.name);
		},
		smartTab(e) {
			let t = B(), n = t.isDetailRoute(e), r = this.convertRouteToTab(e);
			n ? t.hasParameter(e) ? this.openTab(r, n) : (this.closeTab(r), M.getInstance().goBack()) : this.openTab(r, n);
		},
		deleteTab(e) {
			let t = this.convertRouteToTab(e);
			this.closeTab(t);
		},
		closeCurrentTab() {
			this.closeTab(this.activatedTab);
		},
		closeOtherTabs() {
			y(this.tabs, (e) => e.name !== this.activatedTab.name);
		},
		closeLeftTabs() {
			let e = this.getActivatedTabIndex;
			y(this.tabs, (t, n) => n < e);
		},
		closeRightTabs() {
			let e = this.getActivatedTabIndex;
			y(this.tabs, (t, n) => n > e);
		}
	},
	persist: !0
});
//#endregion
//#region src/lib/hooks/useEditFinish.ts
function U() {
	let t = e(), n = B(), r = H();
	return { onFinish: () => {
		let e = t.name;
		n.removeRoutePushParam(e), r.deleteTab(t), M.getInstance().goBack();
	} };
}
//#endregion
//#region src/lib/hooks/useSystemMenu.ts
function W() {
	B();
	let e = R(), t = (e) => e.meta?.title, n = (e) => e.meta?.icon, r = (e) => e.meta?.isHideAllChild, i = (e) => e.children, a = (e) => !!i(e);
	return {
		hasPermission: (t) => {
			let n = e.roles, r = t.meta?.roles;
			return g(r) ? !0 : !(g(n) || g(h(n, r)));
		},
		getItemTitle: t,
		getItemIcon: n,
		getItemChildren: i,
		isDisplayAsItem: (e) => a(e) ? !!r(e) : !0
	};
}
//#endregion
//#region src/lib/hooks/useSystemRoute.ts
function G(e, t, n, r) {
	let i = (e) => e.meta?.isDetailContent, a = (e) => e.meta?.scenario, o = (e, t) => {
		let r = {};
		return r.path = e.name, r.component = t[n(e.componentPath)], e.componentName && (r.name = e.componentName), e.redirect && (r.redirect = e.redirect), r.meta = {
			scenario: e.scenario,
			icon: e.meta.icon,
			title: e.meta.title,
			...e.meta.sort && { sort: e.meta.sort },
			...e.meta.isHaveChild && { isHaveChild: e.meta.isHaveChild },
			...e.meta.isNotKeepAlive && { isNotKeepAlive: e.meta.isNotKeepAlive },
			...e.meta.isHideAllChild && { isHideAllChild: e.meta.isHideAllChild },
			...e.meta.isDetailContent && { isDetailContent: e.meta.isDetailContent },
			...e.meta.isIgnoreAuth && { isIgnoreAuth: e.meta.isIgnoreAuth }
		}, r;
	}, s = (e, t) => {
		let n = B();
		return e.map((e) => {
			let r = o(e, t);
			return i(r) && n.addDetailRoute(r), e.children && e.children.length > 0 && (r.children = s(e.children, t)), r;
		});
	}, c = () => {
		let t = [], n = e;
		return Object.keys(n).forEach((e) => {
			let r = n[e].default || {}, i = Array.isArray(r) ? [...r] : [r];
			t.push(...i);
		}), t;
	}, l = (e, t) => (e.meta?.sort || 0) - (t.meta?.sort || 0), u = (e, t) => {
		let n = B();
		if (console.log("[Herodotus] |- Begin add dynamic routes"), g(t)) console.warn("[Herodotus] |- Dynamic routes is empty, skip!");
		else {
			let r = [], i = [];
			t.forEach((t) => {
				e.addRoute(t), a(t) === k.APP ? r.push(t) : i.push(t);
			}), n.addMenus(r, i), console.log("[Herodotus] |- Dynamic routes add success!");
		}
	};
	return {
		initBackEndRoutes: async (e, n) => {
			let i = (await r(n)).data.menus, a = s(i, t);
			console.log("---routes---", a), u(e, a);
		},
		initFrontEndRoutes: async (e) => {
			let t = c().sort(l);
			console.log(t), u(e, t);
		}
	};
}
//#endregion
//#region src/lib/hooks/useSystemTheme.ts
function K() {
	let e, t = V(), n = C(E.DARK), r = typeof window < "u", i = () => {
		if (r) return window.matchMedia("(prefers-color-scheme: dark)");
	}, a = () => {
		n.value = e.matches ? E.DARK : E.LIGHT;
	}, o = (e) => {
		if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
		let t = window.getComputedStyle(e);
		return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
	}, s = () => {
		let e = performance.now();
		for (let e = 0; e++ < 1e7; e << 9 & 9);
		if (performance.now() - e > 10) return;
		let t = document.querySelector("[data-v-app]");
		t.querySelectorAll("*").forEach((e) => {
			o(e) && (e.dataset.scrollX = String(e.scrollLeft), e.dataset.scrollY = String(e.scrollTop));
		});
		let n = t.cloneNode(!0);
		n.classList.add("app-copy");
		let r = t.getBoundingClientRect();
		n.style.top = r.top + "px", n.style.left = r.left + "px", n.style.width = r.width + "px", n.style.height = r.height + "px";
		let i = document.activeElement.getBoundingClientRect(), a = i.left + i.width / 2 + window.scrollX, s = i.top + i.height / 2 + window.scrollY;
		t.style.setProperty("--clip-pos", `${a}px ${s}px`), t.style.removeProperty("--clip-size"), S(() => {
			t.classList.add("app-transition"), requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					t.style.setProperty("--clip-size", Math.hypot(window.innerWidth, window.innerHeight) + "px");
				});
			});
		}), document.body.append(n), n.querySelectorAll("[data-scroll-x], [data-scroll-y]").forEach((e) => {
			e.scrollLeft = Number(e.dataset.scrollX), e.scrollTop = Number(e.dataset.scrollY);
		});
		function c(e) {
			e.target === e.currentTarget && (n.remove(), t.removeEventListener("transitionend", c), t.removeEventListener("transitioncancel", c), t.classList.remove("app-transition"), t.style.removeProperty("--clip-size"), t.style.removeProperty("--clip-pos"));
		}
		t.addEventListener("transitionend", c), t.addEventListener("transitioncancel", c);
	};
	w(() => t.theme.mode, (t) => {
		t === E.SYSTEM ? (e = i(), e.addEventListener("change", a), a()) : e && e.removeEventListener("change", a);
	}, { immediate: !0 });
	let c = x(() => t.isSystem ? n.value : t.theme.mode);
	return w(c, s), { theme: c };
}
//#endregion
//#region src/lib/main.ts
var q = (e) => {
	j.initialize(e), M.initialize(e.router), I.initialize(e.config), N.initialize(e.signOutExtension);
};
//#endregion
export { D as CaptchaCategoryEnum, T as LayoutModeEnum, k as MenuScenario, j as OptionsUtilities, M as RouterUtilities, I as SecurityApiResources, N as SignOutUtilities, O as SocialSourceEnum, E as ThemeModeEnum, z as getSystemHeaders, q as initializer, A as useApplicationStore, R as useAuthenticationStore, L as useCryptoStore, U as useEditFinish, B as useRouterStore, V as useSettingsStore, W as useSystemMenu, G as useSystemRoute, K as useSystemTheme, H as useTabsViewStore };
