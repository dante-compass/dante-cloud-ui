import { Axios as e, Base64 as t, HttpConfig as n, Service as r, Service as i, moment as a } from "@herodotus-cloud/core";
import { isEmpty as o } from "lodash-es";
//#region src/lib/base/service.ts
var s = class extends i {
	getConditionAddress() {
		return this.getBaseAddress() + "/condition";
	}
	getListAddress() {
		return this.getBaseAddress() + "/list";
	}
	fetchByPage(e, t = {}) {
		if (o(t)) return this.getConfig().getHttp().get(this.getBaseAddress(), e);
		{
			let n = Object.assign(e, t);
			return this.getConfig().getHttp().get(this.getConditionAddress(), n);
		}
	}
	fetchAll(e = {}) {
		return this.getConfig().getHttp().get(this.getListAddress(), e);
	}
	fetchById(e) {
		return this.getConfig().getHttp().get(this.getIdPath(e));
	}
	saveOrUpdate(e) {
		return this.getConfig().getHttp().post(this.getBaseAddress(), e);
	}
	delete(e) {
		return this.getConfig().getHttp().delete(this.getIdPath(e));
	}
}, c = class e extends s {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn(!0, !0) + "/dynamic-form";
	}
}, l = class e extends s {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn(!0, !0) + "/process-comments";
	}
}, u = class e extends s {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn(!0, !0) + "/process-specifics";
	}
}, d = class e {
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
	dynamicForm() {
		return c.getInstance(this.config);
	}
	processComments() {
		return l.getInstance(this.config);
	}
	processSpecifics() {
		return u.getInstance(this.config);
	}
}, f = (e, t) => {
	let r = new n(e, t);
	return d.getInstance(r);
};
//#endregion
export { e as Axios, t as Base64, s as BaseMongoService, c as DynamicFormService, d as FormApiResources, n as HttpConfig, l as ProcessCommentsService, u as ProcessSpecificsService, r as Service, f as createFormApi, a as moment };
