import { Axios as e, HttpConfig as t, Service as n, moment as r } from "@herodotus/core";
import { isEmpty as i } from "lodash-es";
//#region src/lib/base/service.ts
var a = class extends n {
	getConditionAddress() {
		return this.getBaseAddress() + "/condition";
	}
	getListAddress() {
		return this.getBaseAddress() + "/list";
	}
	fetchByPage(e, t = {}) {
		if (i(t)) return this.getConfig().getHttp().get(this.getBaseAddress(), e);
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
}, o = class e extends a {
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
}, s = class e extends a {
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
}, c = class e extends a {
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
}, l = class e {
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
		return o.getInstance(this.config);
	}
	processComments() {
		return s.getInstance(this.config);
	}
	processSpecifics() {
		return c.getInstance(this.config);
	}
}, u = (e, n) => {
	let r = new t(e, n);
	return l.getInstance(r);
};
//#endregion
export { e as Axios, a as BaseMongoService, o as DynamicFormService, l as FormApiResources, t as HttpConfig, s as ProcessCommentsService, c as ProcessSpecificsService, n as Service, u as createFormApi, r as moment };
