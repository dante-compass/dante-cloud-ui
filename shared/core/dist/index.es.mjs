import e from "axios";
import t from "qs";
import { useAxios as n } from "@vueuse/integrations/useAxios";
import { Md5 as r } from "ts-md5";
import { assignIn as i, isEmpty as a, isFunction as o, merge as s, replace as c, toUpper as l } from "lodash-es";
import ee, { default as u, default as d } from "moment";
import "moment/dist/locale/zh-cn";
import { generateFromString as f } from "generate-avatar";
import { sm2 as p, sm4 as m } from "sm-crypto-v2";
import { Base64 as h } from "js-base64";
import g, { default as _, default as v } from "sweetalert2";
import { SHA256 as y, enc as b, lib as x } from "crypto-js";
//#region src/enums/index.ts
var S = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), te = /* @__PURE__ */ function(e) {
	return e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e;
}({}), ne = /* @__PURE__ */ function(e) {
	return e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e;
}({}), re = /* @__PURE__ */ function(e) {
	return e[e.FORBIDDEN = 0] = "FORBIDDEN", e[e.ENABLE = 1] = "ENABLE", e[e.LOCKING = 2] = "LOCKING", e[e.EXPIRED = 3] = "EXPIRED", e;
}({}), ie = /* @__PURE__ */ function(e) {
	return e.BASIC = "Basic ", e.BEARER = "Bearer ", e;
}({}), ae = /* @__PURE__ */ function(e) {
	return e.AUTHORIZATION_CODE = "authorization_code", e.REFRESH_TOKEN = "refresh_token", e.CLIENT_CREDENTIALS = "client_credentials", e.PASSWORD = "password", e.SOCIAL_CREDENTIALS = "social_credentials", e.WEBAUTHN_CREDENTIALS = "webauthn_credentials", e.DEVICE_CODE = "urn:ietf:params:oauth:grant-type:device_code", e.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer", e.TOKEN_EXCHANGE = "urn:ietf:params:oauth:grant-type:token-exchange", e;
}({}), oe = /* @__PURE__ */ function(e) {
	return e.CLIENT_SECRET_BASIC = "client_secret_basic", e.CLIENT_SECRET_POST = "client_secret_post", e.CLIENT_SECRET_JWT = "client_secret_jwt", e.PRIVATE_KEY_JWT = "private_key_jwt", e.NONE = "none", e.TLS_CLIENT_AUTH = "tls_client_auth", e.SELF_SIGNED_TLS_CLIENT_AUTH = "self_signed_tls_client_auth", e;
}({}), se = /* @__PURE__ */ function(e) {
	return e.OPENID = "openid", e.EMAIL = "email", e.PROFILE = "profile", e.PHONE = "phone", e.ADDRESS = "address", e.ROLES = "roles", e.CLIENT_CREATE = "client.create", e.CLIENT_READ = "client.read", e;
}({}), ce = /* @__PURE__ */ function(e) {
	return e.CREATE = "create", e.EDIT = "edit", e.AUTHORIZE = "authorize", e.INFO = "info", e.ALLOCATABLE = "allocatable", e.SETUP = "setup", e.INVOKE = "invoke", e;
}({}), C = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), w = /* @__PURE__ */ function(e) {
	return e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e;
}({}), T = /* @__PURE__ */ function(e) {
	return e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e;
}({}), E = /* @__PURE__ */ function(e) {
	return e.BASIC = "Basic ", e.BEARER = "Bearer ", e;
}({}), D = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), O = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), k = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), A = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), j = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(j || {}), le = /* @__PURE__ */ ((e) => (e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e))(le || {}), ue = /* @__PURE__ */ ((e) => (e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e))(ue || {}), de = /* @__PURE__ */ ((e) => (e[e.FORBIDDEN = 0] = "FORBIDDEN", e[e.ENABLE = 1] = "ENABLE", e[e.LOCKING = 2] = "LOCKING", e[e.EXPIRED = 3] = "EXPIRED", e))(de || {}), fe = /* @__PURE__ */ ((e) => (e.BASIC = "Basic ", e.BEARER = "Bearer ", e))(fe || {}), pe = /* @__PURE__ */ ((e) => (e.AUTHORIZATION_CODE = "authorization_code", e.REFRESH_TOKEN = "refresh_token", e.CLIENT_CREDENTIALS = "client_credentials", e.PASSWORD = "password", e.SOCIAL_CREDENTIALS = "social_credentials", e.WEBAUTHN_CREDENTIALS = "webauthn_credentials", e.DEVICE_CODE = "urn:ietf:params:oauth:grant-type:device_code", e.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer", e.TOKEN_EXCHANGE = "urn:ietf:params:oauth:grant-type:token-exchange", e))(pe || {}), me = /* @__PURE__ */ ((e) => (e.CLIENT_SECRET_BASIC = "client_secret_basic", e.CLIENT_SECRET_POST = "client_secret_post", e.CLIENT_SECRET_JWT = "client_secret_jwt", e.PRIVATE_KEY_JWT = "private_key_jwt", e.NONE = "none", e.TLS_CLIENT_AUTH = "tls_client_auth", e.SELF_SIGNED_TLS_CLIENT_AUTH = "self_signed_tls_client_auth", e))(me || {}), he = /* @__PURE__ */ ((e) => (e.OPENID = "openid", e.EMAIL = "email", e.PROFILE = "profile", e.PHONE = "phone", e.ADDRESS = "address", e.ROLES = "roles", e.CLIENT_CREATE = "client.create", e.CLIENT_READ = "client.read", e))(he || {}), ge = /* @__PURE__ */ ((e) => (e.CREATE = "create", e.EDIT = "edit", e.AUTHORIZE = "authorize", e.INFO = "info", e.ALLOCATABLE = "allocatable", e.SETUP = "setup", e.INVOKE = "invoke", e))(ge || {}), M = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(M || {}), _e = /* @__PURE__ */ ((e) => (e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e))(_e || {}), ve = /* @__PURE__ */ ((e) => (e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e))(ve || {}), ye = /* @__PURE__ */ ((e) => (e.BASIC = "Basic ", e.BEARER = "Bearer ", e))(ye || {}), N = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(N || {}), P = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(P || {}), F = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(F || {}), I = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(I || {}), L = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(L || {}), R = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(R || {});
d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var be = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, xe = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
be.getInstance(), xe.getInstance();
var Se = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return v.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
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
}).getInstance(), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t) {
		return Se.fire({
			icon: t,
			title: e
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
}.getInstance(), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Ce = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, we = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
Ce.getInstance(), we.getInstance();
var Te = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return v.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
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
}).getInstance(), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t) {
		return Te.fire({
			icon: t,
			title: e
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
}.getInstance(), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Ee = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, De = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
Ee.getInstance(), De.getInstance();
var Oe = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return v.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
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
}).getInstance(), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t) {
		return Oe.fire({
			icon: t,
			title: e
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
}.getInstance(), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var ke = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Ae = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
ke.getInstance(), Ae.getInstance();
var je = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return v.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
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
}).getInstance(), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t) {
		return je.fire({
			icon: t,
			title: e
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
}.getInstance(), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Me = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Ne = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
Me.getInstance(), Ne.getInstance();
var Pe = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return v.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
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
}).getInstance(), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t) {
		return Pe.fire({
			icon: t,
			title: e
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
}.getInstance(), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Fe = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Ie = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
Fe.getInstance(), Ie.getInstance();
var Le = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return v.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
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
}).getInstance(), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t) {
		return Le.fire({
			icon: t,
			title: e
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
}.getInstance(), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Re = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, ze = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
Re.getInstance(), ze.getInstance();
var Be = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return v.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
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
}).getInstance(), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t) {
		return Be.fire({
			icon: t,
			title: e
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
}.getInstance(), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Ve = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, He = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
Ve.getInstance(), He.getInstance();
var Ue = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return v.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
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
}).getInstance(), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t) {
		return Ue.fire({
			icon: t,
			title: e
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
}.getInstance(), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var We = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Ge = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
We.getInstance(), Ge.getInstance();
var Ke = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return v.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
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
}).getInstance(), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t) {
		return Ke.fire({
			icon: t,
			title: e
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
}.getInstance(), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var qe = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Je = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
qe.getInstance(), Je.getInstance();
var Ye = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return v.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
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
}).getInstance(), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t) {
		return Ye.fire({
			icon: t,
			title: e
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
}.getInstance(), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Xe = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Ze = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
Xe.getInstance(), Ze.getInstance();
var Qe = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return v.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
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
}).getInstance(), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t) {
		return Qe.fire({
			icon: t,
			title: e
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
}.getInstance(), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var $e = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, et = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
$e.getInstance(), et.getInstance();
var tt = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return v.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
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
}).getInstance(), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t) {
		return tt.fire({
			icon: t,
			title: e
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
}.getInstance(), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var nt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, rt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
nt.getInstance(), rt.getInstance();
var it = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return v.fire({
			title: e,
			text: t,
			position: "top",
			icon: n,
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
}).getInstance(), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t) {
		return it.fire({
			icon: t,
			title: e
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
}.getInstance(), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var at = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, ot = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
at.getInstance(), ot.getInstance();
var st = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
}), z = (e) => e === R.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = z(e);
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
		this.theme = z(e);
	}
	information(e, t, n) {
		return v.fire({
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
		v.fire({
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
		v.fire({
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
		v.fire({
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
}).initialize(R.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = z(e);
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
		this.theme = z(e);
	}
	information(e, t) {
		return st.fire({
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
}.initialize(R.LIGHT), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var ct = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, lt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
ct.getInstance(), lt.getInstance();
var ut = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
}), B = (e) => e === L.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = B(e);
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
		this.theme = B(e);
	}
	information(e, t, n) {
		return v.fire({
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
		v.fire({
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
		v.fire({
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
		v.fire({
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
}).initialize(L.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = B(e);
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
		this.theme = B(e);
	}
	information(e, t) {
		return ut.fire({
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
}.initialize(L.LIGHT), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var dt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, ft = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
dt.getInstance(), ft.getInstance();
var pt = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
}), V = (e) => e === I.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = V(e);
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
		this.theme = V(e);
	}
	information(e, t, n) {
		return v.fire({
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
		v.fire({
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
		v.fire({
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
		v.fire({
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
}).initialize(I.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = V(e);
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
		this.theme = V(e);
	}
	information(e, t) {
		return pt.fire({
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
}.initialize(I.LIGHT), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var mt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, ht = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
mt.getInstance(), ht.getInstance();
var gt = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
}), H = (e) => e === F.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = H(e);
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
		this.theme = H(e);
	}
	information(e, t, n) {
		return v.fire({
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
		v.fire({
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
		v.fire({
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
		v.fire({
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
}).initialize(F.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = H(e);
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
		this.theme = H(e);
	}
	information(e, t) {
		return gt.fire({
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
}.initialize(F.LIGHT), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var _t = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, vt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
_t.getInstance(), vt.getInstance();
var yt = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
}), U = (e) => e === P.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = U(e);
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
		this.theme = U(e);
	}
	information(e, t, n) {
		return v.fire({
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
		v.fire({
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
		v.fire({
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
		v.fire({
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
}).initialize(P.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = U(e);
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
		this.theme = U(e);
	}
	information(e, t) {
		return yt.fire({
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
}.initialize(P.LIGHT), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var bt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, xt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
bt.getInstance(), xt.getInstance();
var St = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
}), W = (e) => e === N.SYSTEM ? "auto" : e;
(class e {
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
		return v.fire({
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
		v.fire({
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
		v.fire({
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
		v.fire({
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
}).initialize(N.LIGHT), class e {
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
		return St.fire({
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
}.initialize(N.LIGHT), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Ct = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, wt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
Ct.getInstance(), wt.getInstance();
var Tt = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
}), G = (e) => e === M.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = G(e);
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
		this.theme = G(e);
	}
	information(e, t, n) {
		return v.fire({
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
		v.fire({
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
		v.fire({
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
		v.fire({
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
}).initialize(M.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = G(e);
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
		this.theme = G(e);
	}
	information(e, t) {
		return Tt.fire({
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
}.initialize(M.LIGHT), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Et = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Dt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
Et.getInstance(), Dt.getInstance();
var Ot = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
}), K = (e) => e === j.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = K(e);
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
		this.theme = K(e);
	}
	information(e, t, n) {
		return v.fire({
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
		v.fire({
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
		v.fire({
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
		v.fire({
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
}).initialize(j.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = K(e);
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
		this.theme = K(e);
	}
	information(e, t) {
		return Ot.fire({
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
}.initialize(j.LIGHT), class e {
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
		let t = x.WordArray.random(e), n = [];
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
			e !== void 0 && (t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[e % 66]);
		}
		return t;
	}
	generateVerifier(e) {
		return this.random(e);
	}
	generateChallenge(e) {
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var kt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, At = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
kt.getInstance(), At.getInstance();
var jt = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
}), q = (e) => e === A.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = q(e);
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
		this.theme = q(e);
	}
	information(e, t, n) {
		return v.fire({
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
		v.fire({
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
		v.fire({
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
		v.fire({
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
}).initialize(A.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = q(e);
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
		this.theme = q(e);
	}
	information(e, t) {
		return jt.fire({
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
}.initialize(A.LIGHT), class e {
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
		let t = x.WordArray.random(e), n = [];
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
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Mt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Nt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
Mt.getInstance(), Nt.getInstance();
var Pt = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
}), J = (e) => e === k.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = J(e);
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
		this.theme = J(e);
	}
	information(e, t, n) {
		return v.fire({
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
		v.fire({
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
		v.fire({
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
		v.fire({
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
}).initialize(k.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = J(e);
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
		this.theme = J(e);
	}
	information(e, t) {
		return Pt.fire({
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
}.initialize(k.LIGHT), class e {
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
		let t = x.WordArray.random(e), n = [];
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
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Ft = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, It = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
Ft.getInstance(), It.getInstance();
var Lt = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
}), Y = (e) => e === O.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = Y(e);
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
		this.theme = Y(e);
	}
	information(e, t, n) {
		return v.fire({
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
		v.fire({
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
		v.fire({
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
		v.fire({
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
}).initialize(O.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = Y(e);
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
		this.theme = Y(e);
	}
	information(e, t) {
		return Lt.fire({
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
}.initialize(O.LIGHT), class e {
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
		let t = x.WordArray.random(e), n = [];
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
		return y(e).toString(b.Base64url);
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
}.getInstance(), d.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Rt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, zt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
Rt.getInstance(), zt.getInstance();
var Bt = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
}), X = (e) => e === D.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = X(e);
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
		this.theme = X(e);
	}
	information(e, t, n) {
		return v.fire({
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
		v.fire({
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
		v.fire({
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
		v.fire({
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
}).initialize(D.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = X(e);
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
		this.theme = X(e);
	}
	information(e, t) {
		return Bt.fire({
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
}.initialize(D.LIGHT), class e {
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
		let t = x.WordArray.random(e), n = [];
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
		return y(e).toString(b.Base64url);
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
}.getInstance(), ee.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Vt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Ht = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
};
Vt.getInstance(), Ht.getInstance();
var Ut = _.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", _.stopTimer), e.addEventListener("mouseleave", _.resumeTimer);
	}
}), Z = (e) => e === C.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = Z(e);
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
		this.theme = Z(e);
	}
	information(e, t, n) {
		return _.fire({
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
		_.fire({
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
		_.fire({
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
		_.fire({
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
}).initialize(C.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = Z(e);
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
		this.theme = Z(e);
	}
	information(e, t) {
		return Ut.fire({
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
}.initialize(C.LIGHT), class e {
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
		let t = x.WordArray.random(e), n = [];
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
		return y(e).toString(b.Base64url);
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
//#region src/lib/definitions/axios/canceler.ts
var Q = /* @__PURE__ */ new Map(), Wt = (e) => {
	if (!a(e.params)) {
		let t = r.hashStr(e.params);
		return [
			e.method,
			e.url,
			t
		].join("&");
	}
	return [e.method, e.url].join("&");
}, Gt = class {
	addPending(t) {
		this.removePending(t);
		let n = Wt(t);
		t.cancelToken = t.cancelToken || new e.CancelToken((e) => {
			Q.has(n) || Q.set(n, e);
		});
	}
	removeAllPending() {
		Q.forEach((e) => {
			e && o(e) && e();
		}), Q.clear();
	}
	removePending(e) {
		let t = Wt(e);
		if (Q.has(t)) {
			let e = Q.get(t);
			e && e(t), Q.delete(t);
		}
	}
	reset() {
		Q = /* @__PURE__ */ new Map();
	}
}, Kt = class {
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
			case w.URL_ENCODED: return {
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				dataConvert: (e) => t.stringify(e, { arrayFormat: "brackets" })
			};
			case w.MULTI_PART: return {
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
		let { requestInterceptors: t, requestInterceptorsError: n, responseInterceptors: r, responseInterceptorsError: i } = e, a = new Gt();
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
	get(e, t = {}, n = { contentType: w.JSON }) {
		return this.process(e, {
			params: t,
			method: T.GET
		}, n);
	}
	post(e, t, n = { contentType: w.JSON }, r) {
		return this.process(e, {
			...r,
			data: t,
			method: T.POST
		}, n);
	}
	postWithParams(e, t, n = {}, r = { contentType: w.JSON }, i) {
		return this.process(e, {
			...i,
			params: t,
			data: n,
			method: T.POST
		}, r);
	}
	put(e, t, n = { contentType: w.JSON }, r) {
		return this.process(e, {
			...r,
			data: t,
			method: T.PUT
		}, n);
	}
	putWithParams(e, t, n = {}, r = { contentType: w.JSON }, i) {
		return this.process(e, {
			...i,
			params: t,
			data: n,
			method: T.PUT
		}, r);
	}
	delete(e, t = {}, n = { contentType: w.JSON }) {
		return this.process(e, {
			data: t,
			method: T.DELETE
		}, n);
	}
	deleteWithParams(e, t, n = {}, r = { contentType: w.JSON }) {
		return this.process(e, {
			params: t,
			data: n,
			method: T.DELETE
		}, r);
	}
}, qt = (e, t) => {
	let n = {};
	n = "statusText" in e ? e.data : e;
	let r = {
		status: e.status,
		code: 0,
		detail: ""
	};
	return r.code = n && n.code ? n.code : 0, r.detail = n.error && n.error.detail ? n.error.detail : "", n.message ? r.message = n.message : n.error && n.error.message ? r.message = n.error.message : t && (r.message = t), r;
}, Jt = (e) => {
	let n = `rgba(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
	console.log("%c┍------------------------------------------------------------------------------------------┑", `color:${n};`), "config" in e ? (console.log("| 请求地址：", e.config.url), console.log("| 请求类型：", l(e.config.method)), console.log("| 请求参数：", t.parse(e.config.params)), console.log("| 响应数据：", e.data)) : "status" in e ? console.log("| 响应数据：", e.data) : console.log("| 响应数据：", e), console.log("%c┕------------------------------------------------------------------------------------------┙", `color:${n};`);
}, Yt = (e) => e && "statusText" in e ? /^(2|3)\d{2}$/.test(String(e.status)) : !1, Xt = class {
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
}, Zt = class {
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
}, Qt = class extends Zt {
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
		return this.getConfig().getHttp().put(this.getBaseAddress(), e, { contentType: w.URL_ENCODED });
	}
};
//#endregion
//#region src/lib/utils/moment.ts
u.locale("zh-cn");
var $t = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance(), en = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return p.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + p.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return p.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, tn = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return m.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return m.decrypt(e, t, { output: "string" });
	}
}, nn = en.getInstance(), rn = tn.getInstance(), an = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), $ = (e) => e === S.SYSTEM ? "auto" : e, on = class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = $(e);
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
		this.theme = $(e);
	}
	information(e, t, n) {
		return g.fire({
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
		g.fire({
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
		g.fire({
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
		g.fire({
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
}.initialize(S.LIGHT), sn = class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = $(e);
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
		this.theme = $(e);
	}
	information(e, t) {
		return an.fire({
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
}.initialize(S.LIGHT), cn = (e) => {
	on.setTheme(e), sn.setTheme(e);
}, ln = class e {
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
		let t = x.WordArray.random(e), n = [];
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
		return y(e).toString(b.Base64url);
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
function un(r) {
	let a = {
		timeout: 1e3 * 12,
		paramsSerializer: (e) => t.stringify(e, { arrayFormat: "brackets" })
	}, o = () => r ? i(a, r) : a, s = (e) => {
		switch (e) {
			case w.URL_ENCODED: return { "Content-Type": "application/x-www-form-urlencoded" };
			case w.MULTI_PART: return { "Content-Type": "multipart/form-data" };
			default: return { "Content-Type": "application/json" };
		}
	}, c = (e, t, n) => {
		let r = { Authorization: E.BEARER + e };
		return t && (r["X-Herodotus-Session-Id"] = t), n && (r["X-Herodotus-Tenant-Id"] = n), r;
	}, l = (e, t, n, r) => {
		let i = { Authorization: E.BASIC + h.encode(e + ":" + t) };
		return n && (i["X-Herodotus-Session-Id"] = n), r && (i["X-Herodotus-Tenant-Id"] = r), i;
	}, ee = (e, t) => {
		let n = s(e);
		return t ? i({}, n, t) : n;
	}, u = e.create(o()), d = (e, t = {}, r = {}, i = T.GET, a = w.JSON, o) => {
		let { execute: s } = n(e, {
			headers: ee(a, o),
			method: i
		}, u, { immediate: !1 }), c = {};
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
		doGet: (e, t = {}, n) => d(e, "", t, T.GET, w.JSON, n),
		doPost: (e, t = {}, n = w.JSON, r = {}, i) => d(e, t, r, T.POST, n, i),
		doPut: (e, t = {}, n = w.JSON, r = {}) => d(e, t, r, T.PUT, n),
		doDelete: (e, t = {}, n = w.JSON, r = {}) => d(e, t, r, T.DELETE, n),
		createHeaderWithBearer: c,
		createHeaderWithBasic: l
	};
}
//#endregion
export { Qt as AbstractService, ae as AuthorizationGrantTypeEnum, ie as AuthorizationTokenEnum, $t as AvatarUtils, Kt as Axios, h as Base64, se as BuildInScopeEnum, oe as ClientAuthenticationMethodEnum, te as ContentTypeEnum, Xt as HttpConfig, ne as HttpMethodEnum, ce as OperationEnum, ln as PKCE, nn as SM2Utils, rn as SM4Utils, Zt as Service, re as StatusEnum, g as Swal, S as ThemeModeEnum, cn as changeSwalTheme, Yt as isSuccess, Jt as logResponse, u as moment, on as notify, qt as parseResponseStatus, sn as toast, un as useHttp };
