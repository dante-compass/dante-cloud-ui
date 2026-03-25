import e from "axios";
import t from "qs";
import { useAxios as n } from "@vueuse/integrations/useAxios";
import { Md5 as r } from "ts-md5";
import { assignIn as i, isEmpty as a, isFunction as o, merge as s, replace as c, toUpper as l } from "lodash-es";
import u, { default as ee, default as d } from "moment";
import "moment/dist/locale/zh-cn";
import { generateFromString as f } from "generate-avatar";
import { sm2 as p, sm4 as m } from "sm-crypto-v2";
import { Base64 as te } from "js-base64";
import h, { default as g, default as _ } from "sweetalert2";
import { SHA256 as v, enc as y, lib as b } from "crypto-js";
//#region src/enums/index.ts
var x = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), ne = /* @__PURE__ */ function(e) {
	return e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e;
}({}), re = /* @__PURE__ */ function(e) {
	return e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e;
}({}), ie = /* @__PURE__ */ function(e) {
	return e[e.FORBIDDEN = 0] = "FORBIDDEN", e[e.ENABLE = 1] = "ENABLE", e[e.LOCKING = 2] = "LOCKING", e[e.EXPIRED = 3] = "EXPIRED", e;
}({}), ae = /* @__PURE__ */ function(e) {
	return e.BASIC = "Basic ", e.BEARER = "Bearer ", e;
}({}), oe = /* @__PURE__ */ function(e) {
	return e.AUTHORIZATION_CODE = "authorization_code", e.REFRESH_TOKEN = "refresh_token", e.CLIENT_CREDENTIALS = "client_credentials", e.PASSWORD = "password", e.SOCIAL_CREDENTIALS = "social_credentials", e.WEBAUTHN_CREDENTIALS = "webauthn_credentials", e.DEVICE_CODE = "urn:ietf:params:oauth:grant-type:device_code", e.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer", e.TOKEN_EXCHANGE = "urn:ietf:params:oauth:grant-type:token-exchange", e;
}({}), se = /* @__PURE__ */ function(e) {
	return e.CLIENT_SECRET_BASIC = "client_secret_basic", e.CLIENT_SECRET_POST = "client_secret_post", e.CLIENT_SECRET_JWT = "client_secret_jwt", e.PRIVATE_KEY_JWT = "private_key_jwt", e.NONE = "none", e.TLS_CLIENT_AUTH = "tls_client_auth", e.SELF_SIGNED_TLS_CLIENT_AUTH = "self_signed_tls_client_auth", e;
}({}), ce = /* @__PURE__ */ function(e) {
	return e.OPENID = "openid", e.EMAIL = "email", e.PROFILE = "profile", e.PHONE = "phone", e.ADDRESS = "address", e.ROLES = "roles", e.CLIENT_CREATE = "client.create", e.CLIENT_READ = "client.read", e;
}({}), le = /* @__PURE__ */ function(e) {
	return e.CREATE = "create", e.EDIT = "edit", e.AUTHORIZE = "authorize", e.INFO = "info", e.ALLOCATABLE = "allocatable", e.SETUP = "setup", e.INVOKE = "invoke", e;
}({}), ue = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), S = /* @__PURE__ */ function(e) {
	return e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e;
}({}), C = /* @__PURE__ */ function(e) {
	return e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e;
}({}), de = /* @__PURE__ */ function(e) {
	return e.BASIC = "Basic ", e.BEARER = "Bearer ", e;
}({}), fe = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), pe = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), me = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), he = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), ge = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), _e = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), ve = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), w = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), T = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), E = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(E || {}), ye = /* @__PURE__ */ ((e) => (e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e))(ye || {}), be = /* @__PURE__ */ ((e) => (e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e))(be || {}), xe = /* @__PURE__ */ ((e) => (e[e.FORBIDDEN = 0] = "FORBIDDEN", e[e.ENABLE = 1] = "ENABLE", e[e.LOCKING = 2] = "LOCKING", e[e.EXPIRED = 3] = "EXPIRED", e))(xe || {}), Se = /* @__PURE__ */ ((e) => (e.BASIC = "Basic ", e.BEARER = "Bearer ", e))(Se || {}), Ce = /* @__PURE__ */ ((e) => (e.AUTHORIZATION_CODE = "authorization_code", e.REFRESH_TOKEN = "refresh_token", e.CLIENT_CREDENTIALS = "client_credentials", e.PASSWORD = "password", e.SOCIAL_CREDENTIALS = "social_credentials", e.WEBAUTHN_CREDENTIALS = "webauthn_credentials", e.DEVICE_CODE = "urn:ietf:params:oauth:grant-type:device_code", e.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer", e.TOKEN_EXCHANGE = "urn:ietf:params:oauth:grant-type:token-exchange", e))(Ce || {}), we = /* @__PURE__ */ ((e) => (e.CLIENT_SECRET_BASIC = "client_secret_basic", e.CLIENT_SECRET_POST = "client_secret_post", e.CLIENT_SECRET_JWT = "client_secret_jwt", e.PRIVATE_KEY_JWT = "private_key_jwt", e.NONE = "none", e.TLS_CLIENT_AUTH = "tls_client_auth", e.SELF_SIGNED_TLS_CLIENT_AUTH = "self_signed_tls_client_auth", e))(we || {}), Te = /* @__PURE__ */ ((e) => (e.OPENID = "openid", e.EMAIL = "email", e.PROFILE = "profile", e.PHONE = "phone", e.ADDRESS = "address", e.ROLES = "roles", e.CLIENT_CREATE = "client.create", e.CLIENT_READ = "client.read", e))(Te || {}), Ee = /* @__PURE__ */ ((e) => (e.CREATE = "create", e.EDIT = "edit", e.AUTHORIZE = "authorize", e.INFO = "info", e.ALLOCATABLE = "allocatable", e.SETUP = "setup", e.INVOKE = "invoke", e))(Ee || {}), D = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(D || {}), De = /* @__PURE__ */ ((e) => (e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e))(De || {}), Oe = /* @__PURE__ */ ((e) => (e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e))(Oe || {}), ke = /* @__PURE__ */ ((e) => (e.BASIC = "Basic ", e.BEARER = "Bearer ", e))(ke || {}), O = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(O || {}), k = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(k || {}), A = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(A || {}), j = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(j || {}), M = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(M || {}), N = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(N || {});
u.locale("zh-cn"), class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Ae = class e {
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
}, je = class e {
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
Ae.getInstance(), je.getInstance();
var Me = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return g.fire({
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
		return Me.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Ne = class e {
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
}, Pe = class e {
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
Ne.getInstance(), Pe.getInstance();
var Fe = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return g.fire({
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
		return Fe.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Ie = class e {
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
}, Le = class e {
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
Ie.getInstance(), Le.getInstance();
var Re = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return g.fire({
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
		return Re.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var ze = class e {
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
}, Be = class e {
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
ze.getInstance(), Be.getInstance();
var Ve = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return g.fire({
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
		return Ve.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var He = class e {
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
}, Ue = class e {
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
He.getInstance(), Ue.getInstance();
var We = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return g.fire({
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
		return We.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Ge = class e {
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
}, Ke = class e {
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
Ge.getInstance(), Ke.getInstance();
var qe = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return g.fire({
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
		return qe.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Je = class e {
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
}, Ye = class e {
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
Je.getInstance(), Ye.getInstance();
var Xe = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return g.fire({
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
		return Xe.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Ze = class e {
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
}, Qe = class e {
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
Ze.getInstance(), Qe.getInstance();
var $e = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return g.fire({
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
		return $e.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var et = class e {
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
}, tt = class e {
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
et.getInstance(), tt.getInstance();
var nt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return g.fire({
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
		return nt.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var rt = class e {
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
}, it = class e {
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
rt.getInstance(), it.getInstance();
var at = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return g.fire({
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
		return at.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var ot = class e {
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
}, st = class e {
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
ot.getInstance(), st.getInstance();
var ct = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return g.fire({
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
		return ct.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var lt = class e {
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
}, ut = class e {
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
lt.getInstance(), ut.getInstance();
var dt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return g.fire({
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
		return dt.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var ft = class e {
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
}, pt = class e {
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
ft.getInstance(), pt.getInstance();
var mt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
});
(class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	information(e, t, n) {
		return g.fire({
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
		return mt.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var ht = class e {
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
}, gt = class e {
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
ht.getInstance(), gt.getInstance();
var _t = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), P = (e) => e === N.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = P(e);
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
		this.theme = P(e);
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
}).initialize(N.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = P(e);
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
		this.theme = P(e);
	}
	information(e, t) {
		return _t.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var vt = class e {
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
}, yt = class e {
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
vt.getInstance(), yt.getInstance();
var bt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), F = (e) => e === M.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = F(e);
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
		this.theme = F(e);
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
}).initialize(M.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = F(e);
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
		this.theme = F(e);
	}
	information(e, t) {
		return bt.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var xt = class e {
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
}, St = class e {
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
xt.getInstance(), St.getInstance();
var Ct = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), I = (e) => e === j.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = I(e);
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
		this.theme = I(e);
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
}).initialize(j.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = I(e);
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
		this.theme = I(e);
	}
	information(e, t) {
		return Ct.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var wt = class e {
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
}, Tt = class e {
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
wt.getInstance(), Tt.getInstance();
var Et = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), L = (e) => e === A.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = L(e);
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
		this.theme = L(e);
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
}).initialize(A.LIGHT), class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = L(e);
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
		this.theme = L(e);
	}
	information(e, t) {
		return Et.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Dt = class e {
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
}, Ot = class e {
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
Dt.getInstance(), Ot.getInstance();
var kt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), R = (e) => e === k.SYSTEM ? "auto" : e;
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
}).initialize(k.LIGHT), class e {
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
		return kt.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var At = class e {
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
}, jt = class e {
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
At.getInstance(), jt.getInstance();
var Mt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), z = (e) => e === O.SYSTEM ? "auto" : e;
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
}).initialize(O.LIGHT), class e {
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
		return Mt.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Nt = class e {
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
}, Pt = class e {
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
Nt.getInstance(), Pt.getInstance();
var Ft = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), B = (e) => e === D.SYSTEM ? "auto" : e;
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
}).initialize(D.LIGHT), class e {
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
		return Ft.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var It = class e {
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
}, Lt = class e {
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
It.getInstance(), Lt.getInstance();
var Rt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), V = (e) => e === E.SYSTEM ? "auto" : e;
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
}).initialize(E.LIGHT), class e {
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
		return Rt.fire({
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
}.initialize(E.LIGHT), class e {
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var zt = class e {
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
}, Bt = class e {
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
zt.getInstance(), Bt.getInstance();
var Vt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), H = (e) => e === T.SYSTEM ? "auto" : e;
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
}).initialize(T.LIGHT), class e {
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
		return Vt.fire({
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
}.initialize(T.LIGHT), class e {
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Ht = class e {
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
}, Ut = class e {
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
Ht.getInstance(), Ut.getInstance();
var Wt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), U = (e) => e === w.SYSTEM ? "auto" : e;
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
}).initialize(w.LIGHT), class e {
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
		return Wt.fire({
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Gt = class e {
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
}, Kt = class e {
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
Gt.getInstance(), Kt.getInstance();
var qt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), W = (e) => e === ve.SYSTEM ? "auto" : e;
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
}).initialize(ve.LIGHT), class e {
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
		return qt.fire({
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
}.initialize(ve.LIGHT), class e {
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Jt = class e {
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
}, Yt = class e {
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
Jt.getInstance(), Yt.getInstance();
var Xt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), G = (e) => e === _e.SYSTEM ? "auto" : e;
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
}).initialize(_e.LIGHT), class e {
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
		return Xt.fire({
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
}.initialize(_e.LIGHT), class e {
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var Zt = class e {
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
}, Qt = class e {
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
Zt.getInstance(), Qt.getInstance();
var $t = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), K = (e) => e === ge.SYSTEM ? "auto" : e;
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
}).initialize(ge.LIGHT), class e {
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
		return $t.fire({
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
}.initialize(ge.LIGHT), class e {
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var en = class e {
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
};
en.getInstance(), tn.getInstance();
var nn = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), q = (e) => e === he.SYSTEM ? "auto" : e;
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
}).initialize(he.LIGHT), class e {
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
		return nn.fire({
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
}.initialize(he.LIGHT), class e {
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var rn = class e {
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
}, an = class e {
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
rn.getInstance(), an.getInstance();
var on = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), J = (e) => e === me.SYSTEM ? "auto" : e;
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
}).initialize(me.LIGHT), class e {
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
		return on.fire({
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
}.initialize(me.LIGHT), class e {
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var sn = class e {
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
}, cn = class e {
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
sn.getInstance(), cn.getInstance();
var ln = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), Y = (e) => e === pe.SYSTEM ? "auto" : e;
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
}).initialize(pe.LIGHT), class e {
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
		return ln.fire({
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
}.initialize(pe.LIGHT), class e {
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance();
var un = class e {
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
}, dn = class e {
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
un.getInstance(), dn.getInstance();
var fn = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), X = (e) => e === fe.SYSTEM ? "auto" : e;
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
}).initialize(fe.LIGHT), class e {
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
		return fn.fire({
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
}.initialize(fe.LIGHT), class e {
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
var pn = class e {
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
}, mn = class e {
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
pn.getInstance(), mn.getInstance();
var hn = _.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", _.stopTimer), e.addEventListener("mouseleave", _.resumeTimer);
	}
}), Z = (e) => e === ue.SYSTEM ? "auto" : e;
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
}).initialize(ue.LIGHT), class e {
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
		return hn.fire({
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
}.initialize(ue.LIGHT), class e {
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
var Q = /* @__PURE__ */ new Map(), gn = (e) => {
	if (!a(e.params)) {
		let t = r.hashStr(e.params);
		return [
			e.method,
			e.url,
			t
		].join("&");
	}
	return [e.method, e.url].join("&");
}, _n = class {
	addPending(t) {
		this.removePending(t);
		let n = gn(t);
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
		let t = gn(e);
		if (Q.has(t)) {
			let e = Q.get(t);
			e && e(t), Q.delete(t);
		}
	}
	reset() {
		Q = /* @__PURE__ */ new Map();
	}
}, vn = class {
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
			case S.URL_ENCODED: return {
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				dataConvert: (e) => t.stringify(e, { arrayFormat: "brackets" })
			};
			case S.MULTI_PART: return {
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
		let { requestInterceptors: t, requestInterceptorsError: n, responseInterceptors: r, responseInterceptorsError: i } = e, a = new _n();
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
	get(e, t = {}, n = { contentType: S.JSON }) {
		return this.process(e, {
			params: t,
			method: C.GET
		}, n);
	}
	post(e, t, n = { contentType: S.JSON }, r) {
		return this.process(e, {
			...r,
			data: t,
			method: C.POST
		}, n);
	}
	postWithParams(e, t, n = {}, r = { contentType: S.JSON }, i) {
		return this.process(e, {
			...i,
			params: t,
			data: n,
			method: C.POST
		}, r);
	}
	put(e, t, n = { contentType: S.JSON }, r) {
		return this.process(e, {
			...r,
			data: t,
			method: C.PUT
		}, n);
	}
	putWithParams(e, t, n = {}, r = { contentType: S.JSON }, i) {
		return this.process(e, {
			...i,
			params: t,
			data: n,
			method: C.PUT
		}, r);
	}
	delete(e, t = {}, n = { contentType: S.JSON }) {
		return this.process(e, {
			data: t,
			method: C.DELETE
		}, n);
	}
	deleteWithParams(e, t, n = {}, r = { contentType: S.JSON }) {
		return this.process(e, {
			params: t,
			data: n,
			method: C.DELETE
		}, r);
	}
}, yn = (e, t) => {
	let n = {};
	n = "statusText" in e ? e.data : e;
	let r = {
		status: e.status,
		code: 0,
		detail: ""
	};
	return r.code = n && n.code ? n.code : 0, r.detail = n.error && n.error.detail ? n.error.detail : "", n.message ? r.message = n.message : n.error && n.error.message ? r.message = n.error.message : t && (r.message = t), r;
}, bn = (e) => {
	let n = `rgba(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
	console.log("%c┍------------------------------------------------------------------------------------------┑", `color:${n};`), "config" in e ? (console.log("| 请求地址：", e.config.url), console.log("| 请求类型：", l(e.config.method)), console.log("| 请求参数：", t.parse(e.config.params)), console.log("| 响应数据：", e.data)) : "status" in e ? console.log("| 响应数据：", e.data) : console.log("| 响应数据：", e), console.log("%c┕------------------------------------------------------------------------------------------┙", `color:${n};`);
}, xn = (e) => e && "statusText" in e ? /^(2|3)\d{2}$/.test(String(e.status)) : !1, Sn = class {
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
}, Cn = class {
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
}, wn = class extends Cn {
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
		return this.getConfig().getHttp().put(this.getBaseAddress(), e, { contentType: S.URL_ENCODED });
	}
};
//#endregion
//#region src/lib/utils/moment.ts
ee.locale("zh-cn");
var Tn = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance(), En = class e {
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
}, Dn = class e {
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
}, On = En.getInstance(), kn = Dn.getInstance(), An = h.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", h.stopTimer), e.addEventListener("mouseleave", h.resumeTimer);
	}
}), $ = (e) => e === x.SYSTEM ? "auto" : e, jn = class e {
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
}.initialize(x.LIGHT), Mn = class e {
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
		return An.fire({
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
}.initialize(x.LIGHT), Nn = (e) => {
	jn.setTheme(e), Mn.setTheme(e);
}, Pn = class e {
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
		let t = b.WordArray.random(e), n = [];
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
		return v(e).toString(y.Base64url);
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
function Fn(r) {
	let a = {
		timeout: 1e3 * 12,
		paramsSerializer: (e) => t.stringify(e, { arrayFormat: "brackets" })
	}, o = () => r ? i(a, r) : a, s = (e) => {
		switch (e) {
			case S.URL_ENCODED: return { "Content-Type": "application/x-www-form-urlencoded" };
			case S.MULTI_PART: return { "Content-Type": "multipart/form-data" };
			default: return { "Content-Type": "application/json" };
		}
	}, c = (e, t, n) => {
		let r = { Authorization: de.BEARER + e };
		return t && (r["X-Herodotus-Session-Id"] = t), n && (r["X-Herodotus-Tenant-Id"] = n), r;
	}, l = (e, t, n, r) => {
		let i = { Authorization: de.BASIC + te.encode(e + ":" + t) };
		return n && (i["X-Herodotus-Session-Id"] = n), r && (i["X-Herodotus-Tenant-Id"] = r), i;
	}, u = (e, t) => {
		let n = s(e);
		return t ? i({}, n, t) : n;
	}, ee = e.create(o()), d = (e, t = {}, r = {}, i = C.GET, a = S.JSON, o) => {
		let { execute: s } = n(e, {
			headers: u(a, o),
			method: i
		}, ee, { immediate: !1 }), c = {};
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
		doGet: (e, t = {}, n) => d(e, "", t, C.GET, S.JSON, n),
		doPost: (e, t = {}, n = S.JSON, r = {}, i) => d(e, t, r, C.POST, n, i),
		doPut: (e, t = {}, n = S.JSON, r = {}) => d(e, t, r, C.PUT, n),
		doDelete: (e, t = {}, n = S.JSON, r = {}) => d(e, t, r, C.DELETE, n),
		createHeaderWithBearer: c,
		createHeaderWithBasic: l
	};
}
//#endregion
export { wn as AbstractService, oe as AuthorizationGrantTypeEnum, ae as AuthorizationTokenEnum, Tn as AvatarUtils, vn as Axios, te as Base64, ce as BuildInScopeEnum, se as ClientAuthenticationMethodEnum, ne as ContentTypeEnum, Sn as HttpConfig, re as HttpMethodEnum, le as OperationEnum, Pn as PKCE, On as SM2Utils, kn as SM4Utils, Cn as Service, ie as StatusEnum, h as Swal, x as ThemeModeEnum, Nn as changeSwalTheme, xn as isSuccess, bn as logResponse, ee as moment, jn as notify, yn as parseResponseStatus, Mn as toast, Fn as useHttp };
