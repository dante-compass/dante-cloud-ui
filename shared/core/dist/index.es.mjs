import e from "axios";
import t from "qs";
import { useAxios as n } from "@vueuse/integrations/useAxios";
import { Md5 as r } from "ts-md5";
import { assignIn as i, isEmpty as a, isFunction as o, merge as s, replace as c, toUpper as l } from "lodash-es";
import ee, { default as u, default as d } from "moment";
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
}({}), S = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), C = /* @__PURE__ */ function(e) {
	return e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e;
}({}), w = /* @__PURE__ */ function(e) {
	return e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e;
}({}), ue = /* @__PURE__ */ function(e) {
	return e.BASIC = "Basic ", e.BEARER = "Bearer ", e;
}({}), de = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
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
}({}), ye = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), be = /* @__PURE__ */ function(e) {
	return e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e;
}({}), T = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(T || {}), xe = /* @__PURE__ */ ((e) => (e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e))(xe || {}), Se = /* @__PURE__ */ ((e) => (e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e))(Se || {}), Ce = /* @__PURE__ */ ((e) => (e[e.FORBIDDEN = 0] = "FORBIDDEN", e[e.ENABLE = 1] = "ENABLE", e[e.LOCKING = 2] = "LOCKING", e[e.EXPIRED = 3] = "EXPIRED", e))(Ce || {}), we = /* @__PURE__ */ ((e) => (e.BASIC = "Basic ", e.BEARER = "Bearer ", e))(we || {}), Te = /* @__PURE__ */ ((e) => (e.AUTHORIZATION_CODE = "authorization_code", e.REFRESH_TOKEN = "refresh_token", e.CLIENT_CREDENTIALS = "client_credentials", e.PASSWORD = "password", e.SOCIAL_CREDENTIALS = "social_credentials", e.WEBAUTHN_CREDENTIALS = "webauthn_credentials", e.DEVICE_CODE = "urn:ietf:params:oauth:grant-type:device_code", e.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer", e.TOKEN_EXCHANGE = "urn:ietf:params:oauth:grant-type:token-exchange", e))(Te || {}), Ee = /* @__PURE__ */ ((e) => (e.CLIENT_SECRET_BASIC = "client_secret_basic", e.CLIENT_SECRET_POST = "client_secret_post", e.CLIENT_SECRET_JWT = "client_secret_jwt", e.PRIVATE_KEY_JWT = "private_key_jwt", e.NONE = "none", e.TLS_CLIENT_AUTH = "tls_client_auth", e.SELF_SIGNED_TLS_CLIENT_AUTH = "self_signed_tls_client_auth", e))(Ee || {}), De = /* @__PURE__ */ ((e) => (e.OPENID = "openid", e.EMAIL = "email", e.PROFILE = "profile", e.PHONE = "phone", e.ADDRESS = "address", e.ROLES = "roles", e.CLIENT_CREATE = "client.create", e.CLIENT_READ = "client.read", e))(De || {}), Oe = /* @__PURE__ */ ((e) => (e.CREATE = "create", e.EDIT = "edit", e.AUTHORIZE = "authorize", e.INFO = "info", e.ALLOCATABLE = "allocatable", e.SETUP = "setup", e.INVOKE = "invoke", e))(Oe || {}), E = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(E || {}), ke = /* @__PURE__ */ ((e) => (e[e.URL_ENCODED = 0] = "URL_ENCODED", e[e.MULTI_PART = 1] = "MULTI_PART", e[e.TEXT = 2] = "TEXT", e[e.JSON = 3] = "JSON", e))(ke || {}), Ae = /* @__PURE__ */ ((e) => (e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e))(Ae || {}), je = /* @__PURE__ */ ((e) => (e.BASIC = "Basic ", e.BEARER = "Bearer ", e))(je || {}), D = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(D || {}), O = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(O || {}), k = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(k || {}), A = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(A || {}), j = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(j || {}), M = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.SYSTEM = "system", e))(M || {});
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
var Pe = g.mixin({
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
var Le = g.mixin({
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
var Be = g.mixin({
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
var Ue = g.mixin({
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
var Ke = g.mixin({
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
var Ye = g.mixin({
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
var Qe = g.mixin({
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
var tt = g.mixin({
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
var it = g.mixin({
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
var st = g.mixin({
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
		return st.fire({
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
var ut = g.mixin({
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
		return ut.fire({
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
var pt = g.mixin({
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
		return pt.fire({
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
var gt = g.mixin({
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
		return gt.fire({
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
var yt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), N = (e) => e === M.SYSTEM ? "auto" : e;
(class e {
	static _instance = null;
	static _initialized = !1;
	theme;
	constructor(e) {
		this.theme = N(e);
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
		this.theme = N(e);
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
		this.theme = N(e);
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
		this.theme = N(e);
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
var St = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), P = (e) => e === j.SYSTEM ? "auto" : e;
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
}).initialize(j.LIGHT), class e {
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
var Tt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), F = (e) => e === A.SYSTEM ? "auto" : e;
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
}).initialize(A.LIGHT), class e {
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
var Ot = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), I = (e) => e === k.SYSTEM ? "auto" : e;
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
}).initialize(k.LIGHT), class e {
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
var jt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), L = (e) => e === O.SYSTEM ? "auto" : e;
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
}).initialize(O.LIGHT), class e {
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
var Pt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), R = (e) => e === D.SYSTEM ? "auto" : e;
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
}).initialize(D.LIGHT), class e {
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
var Lt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), z = (e) => e === E.SYSTEM ? "auto" : e;
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
}).initialize(E.LIGHT), class e {
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
var Bt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), B = (e) => e === T.SYSTEM ? "auto" : e;
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
}).initialize(T.LIGHT), class e {
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
var Ut = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), V = (e) => e === be.SYSTEM ? "auto" : e;
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
}).initialize(be.LIGHT), class e {
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
}.initialize(be.LIGHT), class e {
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
var Wt = class e {
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
}, Gt = class e {
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
Wt.getInstance(), Gt.getInstance();
var Kt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), H = (e) => e === ye.SYSTEM ? "auto" : e;
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
}).initialize(ye.LIGHT), class e {
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
		return Kt.fire({
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
}.initialize(ye.LIGHT), class e {
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
var qt = class e {
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
}, Jt = class e {
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
qt.getInstance(), Jt.getInstance();
var Yt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), U = (e) => e === ve.SYSTEM ? "auto" : e;
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
}).initialize(ve.LIGHT), class e {
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
var Xt = class e {
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
}, Zt = class e {
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
Xt.getInstance(), Zt.getInstance();
var Qt = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), W = (e) => e === _e.SYSTEM ? "auto" : e;
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
}).initialize(_e.LIGHT), class e {
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
		return Qt.fire({
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
var $t = class e {
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
}, en = class e {
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
$t.getInstance(), en.getInstance();
var tn = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), G = (e) => e === ge.SYSTEM ? "auto" : e;
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
}).initialize(ge.LIGHT), class e {
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
		return tn.fire({
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
var nn = class e {
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
}, rn = class e {
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
nn.getInstance(), rn.getInstance();
var an = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), K = (e) => e === he.SYSTEM ? "auto" : e;
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
}).initialize(he.LIGHT), class e {
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
var on = class e {
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
}, sn = class e {
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
on.getInstance(), sn.getInstance();
var cn = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), q = (e) => e === me.SYSTEM ? "auto" : e;
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
}).initialize(me.LIGHT), class e {
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
		return cn.fire({
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
var ln = class e {
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
}, un = class e {
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
ln.getInstance(), un.getInstance();
var dn = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), J = (e) => e === pe.SYSTEM ? "auto" : e;
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
}).initialize(pe.LIGHT), class e {
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
		return dn.fire({
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
var fn = class e {
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
}, pn = class e {
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
fn.getInstance(), pn.getInstance();
var mn = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), Y = (e) => e === fe.SYSTEM ? "auto" : e;
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
}).initialize(fe.LIGHT), class e {
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
		return mn.fire({
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
var hn = class e {
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
}, gn = class e {
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
hn.getInstance(), gn.getInstance();
var _n = g.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", g.stopTimer), e.addEventListener("mouseleave", g.resumeTimer);
	}
}), X = (e) => e === de.SYSTEM ? "auto" : e;
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
}).initialize(de.LIGHT), class e {
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
		return _n.fire({
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
}.initialize(de.LIGHT), class e {
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
var vn = class e {
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
}, yn = class e {
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
vn.getInstance(), yn.getInstance();
var bn = _.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", _.stopTimer), e.addEventListener("mouseleave", _.resumeTimer);
	}
}), Z = (e) => e === S.SYSTEM ? "auto" : e;
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
}).initialize(S.LIGHT), class e {
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
		return bn.fire({
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
}.initialize(S.LIGHT), class e {
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
var Q = /* @__PURE__ */ new Map(), xn = (e) => {
	if (!a(e.params)) {
		let t = r.hashStr(e.params);
		return [
			e.method,
			e.url,
			t
		].join("&");
	}
	return [e.method, e.url].join("&");
}, Sn = class {
	addPending(t) {
		this.removePending(t);
		let n = xn(t);
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
		let t = xn(e);
		if (Q.has(t)) {
			let e = Q.get(t);
			e && e(t), Q.delete(t);
		}
	}
	reset() {
		Q = /* @__PURE__ */ new Map();
	}
}, Cn = class {
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
			case C.URL_ENCODED: return {
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				dataConvert: (e) => t.stringify(e, { arrayFormat: "brackets" })
			};
			case C.MULTI_PART: return {
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
		let { requestInterceptors: t, requestInterceptorsError: n, responseInterceptors: r, responseInterceptorsError: i } = e, a = new Sn();
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
	get(e, t = {}, n = { contentType: C.JSON }) {
		return this.process(e, {
			params: t,
			method: w.GET
		}, n);
	}
	post(e, t, n = { contentType: C.JSON }, r) {
		return this.process(e, {
			...r,
			data: t,
			method: w.POST
		}, n);
	}
	postWithParams(e, t, n = {}, r = { contentType: C.JSON }, i) {
		return this.process(e, {
			...i,
			params: t,
			data: n,
			method: w.POST
		}, r);
	}
	put(e, t, n = { contentType: C.JSON }, r) {
		return this.process(e, {
			...r,
			data: t,
			method: w.PUT
		}, n);
	}
	putWithParams(e, t, n = {}, r = { contentType: C.JSON }, i) {
		return this.process(e, {
			...i,
			params: t,
			data: n,
			method: w.PUT
		}, r);
	}
	delete(e, t = {}, n = { contentType: C.JSON }) {
		return this.process(e, {
			data: t,
			method: w.DELETE
		}, n);
	}
	deleteWithParams(e, t, n = {}, r = { contentType: C.JSON }) {
		return this.process(e, {
			params: t,
			data: n,
			method: w.DELETE
		}, r);
	}
}, wn = (e, t) => {
	let n = {};
	n = "statusText" in e ? e.data : e;
	let r = {
		status: e.status,
		code: 0,
		detail: ""
	};
	return r.code = n && n.code ? n.code : 0, r.detail = n.error && n.error.detail ? n.error.detail : "", n.message ? r.message = n.message : n.error && n.error.message ? r.message = n.error.message : t && (r.message = t), r;
}, Tn = (e) => {
	let n = `rgba(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
	console.log("%c┍------------------------------------------------------------------------------------------┑", `color:${n};`), "config" in e ? (console.log("| 请求地址：", e.config.url), console.log("| 请求类型：", l(e.config.method)), console.log("| 请求参数：", t.parse(e.config.params)), console.log("| 响应数据：", e.data)) : "status" in e ? console.log("| 响应数据：", e.data) : console.log("| 响应数据：", e), console.log("%c┕------------------------------------------------------------------------------------------┙", `color:${n};`);
}, En = (e) => e && "statusText" in e ? /^(2|3)\d{2}$/.test(String(e.status)) : !1, Dn = class {
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
}, On = class {
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
}, kn = class extends On {
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
		return this.getConfig().getHttp().put(this.getBaseAddress(), e, { contentType: C.URL_ENCODED });
	}
};
//#endregion
//#region src/lib/utils/moment.ts
u.locale("zh-cn");
var An = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generate(e) {
		return `data:image/svg+xml;utf8,${f(e)}`;
	}
}.getInstance(), jn = class e {
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
}, Mn = class e {
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
}, Nn = jn.getInstance(), Pn = Mn.getInstance(), Fn = h.mixin({
	toast: !0,
	position: "top",
	showConfirmButton: !1,
	timer: 2e3,
	timerProgressBar: !1,
	didOpen: (e) => {
		e.addEventListener("mouseenter", h.stopTimer), e.addEventListener("mouseleave", h.resumeTimer);
	}
}), $ = (e) => e === x.SYSTEM ? "auto" : e, In = class e {
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
}.initialize(x.LIGHT), Ln = class e {
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
		return Fn.fire({
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
}.initialize(x.LIGHT), Rn = (e) => {
	In.setTheme(e), Ln.setTheme(e);
}, zn = class e {
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
function Bn(r) {
	let a = {
		timeout: 1e3 * 12,
		paramsSerializer: (e) => t.stringify(e, { arrayFormat: "brackets" })
	}, o = () => r ? i(a, r) : a, s = (e) => {
		switch (e) {
			case C.URL_ENCODED: return { "Content-Type": "application/x-www-form-urlencoded" };
			case C.MULTI_PART: return { "Content-Type": "multipart/form-data" };
			default: return { "Content-Type": "application/json" };
		}
	}, c = (e, t, n) => {
		let r = { Authorization: ue.BEARER + e };
		return t && (r["X-Herodotus-Session-Id"] = t), n && (r["X-Herodotus-Tenant-Id"] = n), r;
	}, l = (e, t, n, r) => {
		let i = { Authorization: ue.BASIC + te.encode(e + ":" + t) };
		return n && (i["X-Herodotus-Session-Id"] = n), r && (i["X-Herodotus-Tenant-Id"] = r), i;
	}, ee = (e, t) => {
		let n = s(e);
		return t ? i({}, n, t) : n;
	}, u = e.create(o()), d = (e, t = {}, r = {}, i = w.GET, a = C.JSON, o) => {
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
		doGet: (e, t = {}, n) => d(e, "", t, w.GET, C.JSON, n),
		doPost: (e, t = {}, n = C.JSON, r = {}, i) => d(e, t, r, w.POST, n, i),
		doPut: (e, t = {}, n = C.JSON, r = {}) => d(e, t, r, w.PUT, n),
		doDelete: (e, t = {}, n = C.JSON, r = {}) => d(e, t, r, w.DELETE, n),
		createHeaderWithBearer: c,
		createHeaderWithBasic: l
	};
}
//#endregion
export { kn as AbstractService, oe as AuthorizationGrantTypeEnum, ae as AuthorizationTokenEnum, An as AvatarUtils, Cn as Axios, te as Base64, ce as BuildInScopeEnum, se as ClientAuthenticationMethodEnum, ne as ContentTypeEnum, Dn as HttpConfig, re as HttpMethodEnum, le as OperationEnum, zn as PKCE, Nn as SM2Utils, Pn as SM4Utils, On as Service, ie as StatusEnum, h as Swal, x as ThemeModeEnum, Rn as changeSwalTheme, En as isSuccess, Tn as logResponse, u as moment, In as notify, wn as parseResponseStatus, Ln as toast, Bn as useHttp };
