import e from "axios";
import t from "qs";
import { useAxios as n } from "@vueuse/integrations/useAxios";
import { Md5 as r } from "ts-md5";
import { assignIn as i, isEmpty as a, isFunction as o, merge as s, replace as c, toUpper as l } from "lodash-es";
import u, { default as d, default as f } from "moment";
import "moment/dist/locale/zh-cn";
import { generateFromString as p } from "generate-avatar";
import { sm2 as m, sm4 as h } from "sm-crypto-v2";
import { Base64 as g } from "js-base64";
import _, { default as v, default as y } from "sweetalert2";
import { SHA256 as b, enc as x, lib as S } from "crypto-js";
//#region src/enums/index.ts
var C = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), ee = /* @__PURE__ */ function(e) {
	return e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e;
}({}), te = /* @__PURE__ */ function(e) {
	return e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e;
}({}), ne = /* @__PURE__ */ function(e) {
	return e[e.FORBIDDEN = 0] = "FORBIDDEN", e[e.ENABLE = 1] = "ENABLE", e[e.LOCKING = 2] = "LOCKING", e[e.EXPIRED = 3] = "EXPIRED", e;
}({}), re = /* @__PURE__ */ function(e) {
	return e.BASIC = "Basic ", e.BEARER = "Bearer ", e;
}({}), ie = /* @__PURE__ */ function(e) {
	return e.AUTHORIZATION_CODE = "authorization_code", e.REFRESH_TOKEN = "refresh_token", e.CLIENT_CREDENTIALS = "client_credentials", e.PASSWORD = "password", e.SOCIAL_CREDENTIALS = "social_credentials", e.WEBAUTHN_CREDENTIALS = "webauthn_credentials", e.DEVICE_CODE = "urn:ietf:params:oauth:grant-type:device_code", e.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer", e.TOKEN_EXCHANGE = "urn:ietf:params:oauth:grant-type:token-exchange", e;
}({}), ae = /* @__PURE__ */ function(e) {
	return e.CLIENT_SECRET_BASIC = "client_secret_basic", e.CLIENT_SECRET_POST = "client_secret_post", e.CLIENT_SECRET_JWT = "client_secret_jwt", e.PRIVATE_KEY_JWT = "private_key_jwt", e.NONE = "none", e.TLS_CLIENT_AUTH = "tls_client_auth", e.SELF_SIGNED_TLS_CLIENT_AUTH = "self_signed_tls_client_auth", e;
}({}), oe = /* @__PURE__ */ function(e) {
	return e.OPENID = "openid", e.EMAIL = "email", e.PROFILE = "profile", e.PHONE = "phone", e.ADDRESS = "address", e.ROLES = "roles", e.CLIENT_CREATE = "client.create", e.CLIENT_READ = "client.read", e;
}({}), se = /* @__PURE__ */ function(e) {
	return e.CREATE = "create", e.EDIT = "edit", e.AUTHORIZE = "authorize", e.INFO = "info", e.ALLOCATABLE = "allocatable", e.SETUP = "setup", e.INVOKE = "invoke", e;
}({}), w = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), T = /* @__PURE__ */ function(e) {
	return e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e;
}({}), E = /* @__PURE__ */ function(e) {
	return e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e;
}({}), D = /* @__PURE__ */ function(e) {
	return e.BASIC = "Basic ", e.BEARER = "Bearer ", e;
}({}), O = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), k = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), A = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(A || {}), ce = /* @__PURE__ */ ((e) => (e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e))(ce || {}), le = /* @__PURE__ */ ((e) => (e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e))(le || {}), ue = /* @__PURE__ */ ((e) => (e[e.FORBIDDEN = 0] = "FORBIDDEN", e[e.ENABLE = 1] = "ENABLE", e[e.LOCKING = 2] = "LOCKING", e[e.EXPIRED = 3] = "EXPIRED", e))(ue || {}), de = /* @__PURE__ */ ((e) => (e.BASIC = "Basic ", e.BEARER = "Bearer ", e))(de || {}), fe = /* @__PURE__ */ ((e) => (e.AUTHORIZATION_CODE = "authorization_code", e.REFRESH_TOKEN = "refresh_token", e.CLIENT_CREDENTIALS = "client_credentials", e.PASSWORD = "password", e.SOCIAL_CREDENTIALS = "social_credentials", e.WEBAUTHN_CREDENTIALS = "webauthn_credentials", e.DEVICE_CODE = "urn:ietf:params:oauth:grant-type:device_code", e.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer", e.TOKEN_EXCHANGE = "urn:ietf:params:oauth:grant-type:token-exchange", e))(fe || {}), pe = /* @__PURE__ */ ((e) => (e.CLIENT_SECRET_BASIC = "client_secret_basic", e.CLIENT_SECRET_POST = "client_secret_post", e.CLIENT_SECRET_JWT = "client_secret_jwt", e.PRIVATE_KEY_JWT = "private_key_jwt", e.NONE = "none", e.TLS_CLIENT_AUTH = "tls_client_auth", e.SELF_SIGNED_TLS_CLIENT_AUTH = "self_signed_tls_client_auth", e))(pe || {}), me = /* @__PURE__ */ ((e) => (e.OPENID = "openid", e.EMAIL = "email", e.PROFILE = "profile", e.PHONE = "phone", e.ADDRESS = "address", e.ROLES = "roles", e.CLIENT_CREATE = "client.create", e.CLIENT_READ = "client.read", e))(me || {}), he = /* @__PURE__ */ ((e) => (e.CREATE = "create", e.EDIT = "edit", e.AUTHORIZE = "authorize", e.INFO = "info", e.ALLOCATABLE = "allocatable", e.SETUP = "setup", e.INVOKE = "invoke", e))(he || {}), j = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(j || {}), ge = /* @__PURE__ */ ((e) => (e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e))(ge || {}), _e = /* @__PURE__ */ ((e) => (e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e))(_e || {}), ve = /* @__PURE__ */ ((e) => (e.BASIC = "Basic ", e.BEARER = "Bearer ", e))(ve || {}), M = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(M || {}), N = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(N || {}), P = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(P || {}), F = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(F || {}), I = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(I || {}), L = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(L || {});
f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var ye = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, be = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
ye.getInstance(), be.getInstance();
var xe = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return y.fire({
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
		return xe.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var Se = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Ce = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
Se.getInstance(), Ce.getInstance();
var we = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return y.fire({
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
		return we.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var Te = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Ee = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
Te.getInstance(), Ee.getInstance();
var De = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return y.fire({
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
		return De.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var Oe = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, ke = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
Oe.getInstance(), ke.getInstance();
var Ae = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return y.fire({
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
		return Ae.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var je = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Me = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
je.getInstance(), Me.getInstance();
var Ne = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return y.fire({
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
		return Ne.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var Pe = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Fe = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
Pe.getInstance(), Fe.getInstance();
var Ie = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return y.fire({
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
		return Ie.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var Le = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Re = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
Le.getInstance(), Re.getInstance();
var ze = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return y.fire({
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
		return ze.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var Be = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Ve = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
Be.getInstance(), Ve.getInstance();
var He = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return y.fire({
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
		return He.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var Ue = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, We = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
Ue.getInstance(), We.getInstance();
var Ge = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return y.fire({
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
		return Ge.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var Ke = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, qe = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
Ke.getInstance(), qe.getInstance();
var Je = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return y.fire({
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
		return Je.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var Ye = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Xe = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
Ye.getInstance(), Xe.getInstance();
var Ze = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return y.fire({
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
		return Ze.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var Qe = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, $e = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
Qe.getInstance(), $e.getInstance();
var et = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return y.fire({
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
		return et.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var tt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, nt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
tt.getInstance(), nt.getInstance();
var rt = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return y.fire({
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
		return rt.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var it = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, at = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
it.getInstance(), at.getInstance();
var ot = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
}), R = (e) => e === L.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = R(e);
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
		this.theme = R(e);
	}
	information(e, t, n) {
		return y.fire({
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
		y.fire({
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
		y.fire({
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
		y.fire({
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
		this.theme = R(e);
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
		this.theme = R(e);
	}
	information(e, t) {
		return ot.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var st = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, ct = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
st.getInstance(), ct.getInstance();
var lt = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
}), z = (e) => e === I.SYSTEM ? "auto" : e;
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
		return y.fire({
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
		y.fire({
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
		y.fire({
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
		y.fire({
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
		return lt.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var ut = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, dt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
ut.getInstance(), dt.getInstance();
var ft = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
}), B = (e) => e === F.SYSTEM ? "auto" : e;
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
		return y.fire({
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
		y.fire({
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
		y.fire({
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
		y.fire({
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
		return ft.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var pt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, mt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
pt.getInstance(), mt.getInstance();
var ht = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
}), V = (e) => e === P.SYSTEM ? "auto" : e;
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
		return y.fire({
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
		y.fire({
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
		y.fire({
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
		y.fire({
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
		return ht.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var gt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, _t = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
gt.getInstance(), _t.getInstance();
var vt = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
}), H = (e) => e === N.SYSTEM ? "auto" : e;
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
		return y.fire({
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
		y.fire({
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
		y.fire({
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
		y.fire({
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
		return vt.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var yt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, bt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
yt.getInstance(), bt.getInstance();
var xt = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
}), U = (e) => e === M.SYSTEM ? "auto" : e;
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
		return y.fire({
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
		y.fire({
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
		y.fire({
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
		y.fire({
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
		return xt.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var St = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Ct = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
St.getInstance(), Ct.getInstance();
var wt = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
}), W = (e) => e === j.SYSTEM ? "auto" : e;
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
		return y.fire({
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
		y.fire({
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
		y.fire({
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
		y.fire({
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
		return wt.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var Tt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Et = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
Tt.getInstance(), Et.getInstance();
var Dt = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
}), G = (e) => e === A.SYSTEM ? "auto" : e;
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
		return y.fire({
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
		y.fire({
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
		y.fire({
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
		y.fire({
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
		return Dt.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var Ot = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, kt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
Ot.getInstance(), kt.getInstance();
var At = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
}), K = (e) => e === k.SYSTEM ? "auto" : e;
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
		return y.fire({
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
		y.fire({
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
		y.fire({
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
		y.fire({
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
		return At.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), f.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var jt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Mt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
jt.getInstance(), Mt.getInstance();
var Nt = y.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", y.stopTimer), e.addEventListener("mouseleave", y.resumeTimer);
	}
}), q = (e) => e === O.SYSTEM ? "auto" : e;
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
		return y.fire({
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
		y.fire({
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
		y.fire({
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
		y.fire({
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
		return Nt.fire({
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
}.getInstance(), u.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance();
var Pt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Ft = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
};
Pt.getInstance(), Ft.getInstance();
var It = v.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", v.stopTimer), e.addEventListener("mouseleave", v.resumeTimer);
	}
}), J = (e) => e === w.SYSTEM ? "auto" : e;
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
}).initialize(w.LIGHT), class e {
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
		return It.fire({
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
}.initialize(w.LIGHT), class e {
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
var Y = /* @__PURE__ */ new Map(), X = (e) => {
	if (!a(e.params)) {
		let t = r.hashStr(e.params);
		return [
			e.method,
			e.url,
			t
		].join("&");
	}
	return [e.method, e.url].join("&");
}, Lt = class {
	addPending(t) {
		this.removePending(t);
		let n = X(t);
		t.cancelToken = t.cancelToken || new e.CancelToken((e) => {
			Y.has(n) || Y.set(n, e);
		});
	}
	removeAllPending() {
		Y.forEach((e) => {
			e && o(e) && e();
		}), Y.clear();
	}
	removePending(e) {
		let t = X(e);
		if (Y.has(t)) {
			let e = Y.get(t);
			e && e(t), Y.delete(t);
		}
	}
	reset() {
		Y = /* @__PURE__ */ new Map();
	}
}, Rt = class {
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
			case T.URL_ENCODED: return {
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				dataConvert: (e) => t.stringify(e, { arrayFormat: "brackets" })
			};
			case T.MULTI_PART: return {
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
		let { requestInterceptors: t, requestInterceptorsError: n, responseInterceptors: r, responseInterceptorsError: i } = e, a = new Lt();
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
	get(e, t = {}, n = { contentType: T.JSON }) {
		return this.process(e, {
			params: t,
			method: E.GET
		}, n);
	}
	post(e, t, n = { contentType: T.JSON }, r) {
		return this.process(e, {
			...r,
			data: t,
			method: E.POST
		}, n);
	}
	postWithParams(e, t, n = {}, r = { contentType: T.JSON }, i) {
		return this.process(e, {
			...i,
			params: t,
			data: n,
			method: E.POST
		}, r);
	}
	put(e, t, n = { contentType: T.JSON }, r) {
		return this.process(e, {
			...r,
			data: t,
			method: E.PUT
		}, n);
	}
	putWithParams(e, t, n = {}, r = { contentType: T.JSON }, i) {
		return this.process(e, {
			...i,
			params: t,
			data: n,
			method: E.PUT
		}, r);
	}
	delete(e, t = {}, n = { contentType: T.JSON }) {
		return this.process(e, {
			data: t,
			method: E.DELETE
		}, n);
	}
	deleteWithParams(e, t, n = {}, r = { contentType: T.JSON }) {
		return this.process(e, {
			params: t,
			data: n,
			method: E.DELETE
		}, r);
	}
}, zt = (e, t) => {
	let n = {};
	n = "statusText" in e ? e.data : e;
	let r = {
		status: e.status,
		code: 0,
		detail: ""
	};
	return r.code = n && n.code ? n.code : 0, r.detail = n.error && n.error.detail ? n.error.detail : "", n.message ? r.message = n.message : n.error && n.error.message ? r.message = n.error.message : t && (r.message = t), r;
}, Bt = (e) => {
	let n = `rgba(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
	console.log("%c┍------------------------------------------------------------------------------------------┑", `color:${n};`), "config" in e ? (console.log("| 请求地址：", e.config.url), console.log("| 请求类型：", l(e.config.method)), console.log("| 请求参数：", t.parse(e.config.params)), console.log("| 响应数据：", e.data)) : "status" in e ? console.log("| 响应数据：", e.data) : console.log("| 响应数据：", e), console.log("%c┕------------------------------------------------------------------------------------------┙", `color:${n};`);
}, Vt = (e) => e && "statusText" in e ? /^(2|3)\d{2}$/.test(String(e.status)) : !1, Ht = class {
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
}, Z = class {
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
}, Ut = class extends Z {
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
		return this.getConfig().getHttp().put(this.getBaseAddress(), e, { contentType: T.URL_ENCODED });
	}
};
//#endregion
//#region src/lib/utils/moment.ts
d.locale("zh-cn");
var Wt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${p(e)}`;
	}
}.getInstance(), Gt = class e {
	static instance = new e();
	cipherMode = 1;
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	createKeyPair() {
		return m.generateKeyPairHex();
	}
	encrypt(e, t) {
		return "04" + m.doEncrypt(e, t, this.cipherMode);
	}
	decrypt(e, t) {
		let n = e.substring(2).toLocaleLowerCase();
		return m.doDecrypt(n, t, this.cipherMode, { output: "string" });
	}
}, Kt = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	encrypt(e, t) {
		return h.encrypt(e, t, { output: "string" });
	}
	decrypt(e, t) {
		return h.decrypt(e, t, { output: "string" });
	}
}, qt = Gt.getInstance(), Jt = Kt.getInstance(), Yt = _.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", _.stopTimer), e.addEventListener("mouseleave", _.resumeTimer);
	}
}), Q = (e) => e === C.SYSTEM ? "auto" : e, Xt = class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = Q(e);
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
		this.theme = Q(e);
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
}.initialize(C.LIGHT), $ = class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = Q(e);
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
		this.theme = Q(e);
	}
	information(e, t) {
		return Yt.fire({
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
}.initialize(C.LIGHT), Zt = (e) => {
	Xt.setTheme(e), $.setTheme(e);
}, Qt = class e {
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
		let t = S.WordArray.random(e), n = [];
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
		return b(e).toString(x.Base64url);
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
function $t(r) {
	let a = {
		timeout: 1e3 * 12,
		paramsSerializer: (e) => t.stringify(e, { arrayFormat: "brackets" })
	}, o = () => r ? i(a, r) : a, s = (e) => {
		switch (e) {
			case T.URL_ENCODED: return { "Content-Type": "application/x-www-form-urlencoded" };
			case T.MULTI_PART: return { "Content-Type": "multipart/form-data" };
			default: return { "Content-Type": "application/json" };
		}
	}, c = (e, t, n) => {
		let r = { Authorization: D.BEARER + e };
		return t && (r["X-Herodotus-Session-Id"] = t), n && (r["X-Herodotus-Tenant-Id"] = n), r;
	}, l = (e, t, n, r) => {
		let i = { Authorization: D.BASIC + g.encode(e + ":" + t) };
		return n && (i["X-Herodotus-Session-Id"] = n), r && (i["X-Herodotus-Tenant-Id"] = r), i;
	}, u = (e, t) => {
		let n = s(e);
		return t ? i({}, n, t) : n;
	}, d = e.create(o()), f = (e, t = {}, r = {}, i = E.GET, a = T.JSON, o) => {
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
		doGet: (e, t = {}, n) => f(e, "", t, E.GET, T.JSON, n),
		doPost: (e, t = {}, n = T.JSON, r = {}, i) => f(e, t, r, E.POST, n, i),
		doPut: (e, t = {}, n = T.JSON, r = {}) => f(e, t, r, E.PUT, n),
		doDelete: (e, t = {}, n = T.JSON, r = {}) => f(e, t, r, E.DELETE, n),
		createHeaderWithBearer: c,
		createHeaderWithBasic: l
	};
}
//#endregion
export { Ut as AbstractService, ie as AuthorizationGrantTypeEnum, re as AuthorizationTokenEnum, Wt as AvatarUtils, Rt as Axios, g as Base64, oe as BuildInScopeEnum, ae as ClientAuthenticationMethodEnum, ee as ContentTypeEnum, Ht as HttpConfig, te as HttpMethodEnum, se as OperationEnum, Qt as PKCE, qt as SM2Utils, Jt as SM4Utils, Z as Service, ne as StatusEnum, _ as Swal, C as ThemeModeEnum, Zt as changeSwalTheme, Vt as isSuccess, Bt as logResponse, d as moment, Xt as notify, zt as parseResponseStatus, $ as toast, $t as useHttp };
