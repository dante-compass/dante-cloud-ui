import { Axios as e, ContentTypeEnum as t, ContentTypeEnum as n, HttpConfig as r, Service as i, Swal as a, moment as o, moment as s, toast as c } from "@herodotus/core";
import { endsWith as l, isEmpty as u, trimEnd as d } from "lodash-es";
// src/lib/base/path.ts
var f = class {
	address;
	action = "";
	constructor(e) {
		this.address = e;
	}
	getWellFormedAddress() {
		let e = this.address;
		return l(e, "/") ? d(e, "/") : e;
	}
	addAction(e) {
		this.action = e;
	}
	appendAction(e) {
		return this.action ? e + "/" + this.action : e;
	}
}, p = class extends f {
	id = "";
	key = "";
	tenantId = "";
	constructor(e) {
		super(e);
	}
	setAction(e) {
		return this.addAction(e), this;
	}
	withParam(e) {
		return this.id = e.id, this.key = e.key, this.tenantId = e.tenantId, this;
	}
	build() {
		let e = this.getWellFormedAddress();
		return this.id ? e += "/" + this.id : (this.key && (e += "/key/" + this.key), this.tenantId && (e += "/tenant-id/" + this.tenantId)), this.appendAction(e);
	}
}, m = class extends f {
	id = "";
	relationId = "";
	constructor(e) {
		super(e);
	}
	withParam(e) {
		return this.id = e.id, this.relationId = e.relationId, this.addAction(e.action), this;
	}
	build() {
		let e = this.getWellFormedAddress();
		return e += "/" + this.id, e = this.appendAction(e), e += "/" + this.relationId, e;
	}
}, h = class extends i {
	getCountAddress() {
		return this.getBaseAddress() + "/count";
	}
	createAddressByParam(e, t = "") {
		let n = new p(this.getBaseAddress());
		return t ? n.withParam(e).setAction(t).build() : n.withParam(e).build();
	}
	createAddressByRelation(e, t, n) {
		return new m(this.getBaseAddress()).withParam({
			id: e,
			relationId: t,
			action: n
		}).build();
	}
	createAddressById(e, t = "") {
		return this.createAddressByParam({ id: e }, t);
	}
	delete(e, t = {}) {
		return u(t) ? this.getConfig().getHttp().delete(this.createAddressById(e)) : this.getConfig().getHttp().deleteWithParams(this.createAddressById(e), t);
	}
}, g = class extends h {
	getCount(e = {}) {
		return new Promise((t, n) => {
			this.getConfig().getHttp().get(this.getCountAddress(), e).then((e) => {
				e && t(e.count);
			}).catch((e) => {
				n(e);
			});
		});
	}
	getList(e, t, n = {}) {
		let r = Object.assign({
			sortBy: e.sortBy,
			sortOrder: e.sortOrder,
			firstResult: e.pageNumber * e.pageSize,
			maxResults: e.pageSize
		}, n);
		return new Promise((n, i) => {
			this.getConfig().getHttp().get(this.getBaseAddress(), r).then((r) => {
				n({
					content: r,
					totalPages: t && (t + e.pageSize - 1) / e.pageSize,
					totalElements: String(t)
				});
			}).catch((e) => {
				i(e);
			});
		});
	}
	getByPage(e, t = {}) {
		return new Promise((n, r) => {
			this.getCount(t).then((r) => {
				this.getList(e, r, t).then((e) => {
					n(e);
				});
			}).catch((e) => {
				r(e);
			});
		});
	}
	getAll(e, t = {}) {
		return new Promise((n, r) => {
			this.getCount(t).then((r) => {
				let i = Object.assign(t, {
					sortBy: e.sortBy,
					sortOrder: e.sortOrder,
					firstResult: 0,
					maxResults: r
				});
				this.getConfig().getHttp().get(this.getBaseAddress(), i).then((e) => {
					n(e);
				});
			}).catch((e) => {
				r(e);
			});
		});
	}
}, _ = class extends g {
	get(e) {
		return this.getConfig().getHttp().get(this.createAddressById(e));
	}
}, v = class extends _ {
	getPostCount(e = {}) {
		return new Promise((t, n) => {
			this.getConfig().getHttp().get(this.getCountAddress(), e).then((e) => {
				e && t(e.count);
			}).catch((e) => {
				n(e);
			});
		});
	}
	getPostList(e, t, n = [], r = {}) {
		let i = {
			firstResult: (e.pageNumber - 1) * e.pageSize,
			maxResults: e.pageSize
		}, a = {};
		return u(n) || (a = Object.assign(r, { sorting: n })), new Promise((n, r) => {
			this.getConfig().getHttp().postWithParams(this.getBaseAddress(), i, a).then((r) => {
				n({
					content: r,
					totalPages: t && (t + e.pageSize - 1) / e.pageSize,
					totalElements: String(t)
				});
			}).catch((e) => {
				r(e);
			});
		});
	}
	getPostByPage(e, t = [], n = {}) {
		return new Promise((r, i) => {
			this.getPostCount(n).then((i) => {
				this.getPostList(e, i, t, n).then((e) => {
					r(e);
				});
			}).catch((e) => {
				i(e);
			});
		});
	}
}, y = class extends v {}, b = class e extends _ {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn() + "/deployment";
	}
	getCreateAddress() {
		return this.getBaseAddress() + "/create";
	}
	getDuplicateFiltering(e) {
		return e.deployChangedOnly ? "true" : e.enableDuplicateFiltering ? String(e.enableDuplicateFiltering) : "false";
	}
	create(e) {
		let t = new FormData();
		t.append("deployment-name", e.deploymentName), t.append("deploy-changed-only", e.deployChangedOnly ? "true" : "false"), t.append("enable-duplicate-filtering", this.getDuplicateFiltering(e)), t.append("deployment-source", e.deploymentSource ? e.deploymentSource : "Dante Cloud UI");
		let r = e.deploymentActivationTime ? e.deploymentActivationTime : /* @__PURE__ */ new Date();
		t.append("deployment-activation-time", s(r).utc().format()), e.tenantId && t.append("tenant-id", e.tenantId);
		let i = new Blob([e.resource], { type: "application/octet-stream" });
		return t.append("data", i, (/* @__PURE__ */ new Date()).getTime() + ".bpmn"), this.getConfig().getHttp().post(this.getCreateAddress(), t, { contentType: n.MULTI_PART });
	}
	redeploy(e, t) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "redeploy"), t);
	}
	getResources(e) {
		return this.getConfig().getHttp().get(this.createAddressById(e, "resources"));
	}
	getResource(e, t) {
		return this.getConfig().getHttp().get(this.createAddressByRelation(e, t, "resources"));
	}
	getBinaryResource(e, t) {
		let n = this.createAddressByRelation(e, t, "resources") + "/data";
		return this.getConfig().getHttp().get(n);
	}
	getRegisteredDeployments() {
		let e = this.getBaseAddress() + "/registered";
		return this.getConfig().getHttp().get(e);
	}
}, x = class e extends _ {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn() + "/process-definition";
	}
	getActivityInstanceStatistics(e, t) {
		return this.getConfig().getHttp().get(this.createAddressByParam(e, "statistics"), t);
	}
	getStaticCalledProcessDefinitions(e) {
		return this.getConfig().getHttp().get(this.createAddressById(e, "static-called-process-definitions"));
	}
	getDiagram(e) {
		return this.getConfig().getHttp().get(this.createAddressByParam(e, "diagram"));
	}
	getStartFormVariables(e, t) {
		return this.getConfig().getHttp().get(this.createAddressByParam(e, "form-variables"), t);
	}
	getRenderedFormStartForm(e) {
		return this.getConfig().getHttp().get(this.createAddressByParam(e, "rendered-form"));
	}
	getStartFormKey(e) {
		return this.getConfig().getHttp().get(this.createAddressByParam(e, "startForm"));
	}
	getProcessInstanceStatistics(e) {
		let t = this.getBaseAddress() + "/statistics";
		return this.getConfig().getHttp().get(t, e);
	}
	getXml(e) {
		return this.getConfig().getHttp().get(this.createAddressByParam(e, "xml"));
	}
	getByPathParams(e) {
		return this.getConfig().getHttp().get(this.createAddressByParam(e));
	}
	start(e, t) {
		return this.getConfig().getHttp().post(this.createAddressByParam(e, "start"), t);
	}
	submitStartForm(e, t) {
		return this.getConfig().getHttp().post(this.createAddressByParam(e, "submit-form"), t);
	}
	activateOrSuspendById(e, t) {
		return this.getConfig().getHttp().put(this.createAddressByParam(e, "suspended"), t);
	}
	activateOrSuspendByKey(e) {
		let t = this.getBaseAddress() + "/suspended";
		return this.getConfig().getHttp().put(t, e);
	}
	updateHistoryTimeToLive(e, t) {
		return this.getConfig().getHttp().put(this.createAddressByParam(e, "history-time-to-live"), t);
	}
	deleteByKey(e, t = "", n) {
		return this.getConfig().getHttp().deleteWithParams(this.createAddressByParam({
			key: e,
			tenantId: t
		}, "delete"), n);
	}
	getDeployedStartForm(e) {
		return this.getConfig().getHttp().get(this.createAddressByParam(e, "deployed-start-form"));
	}
	restartProcessInstance(e, t) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "restart"), t);
	}
	restartAsync(e, t) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "restart-async"), t);
	}
}, S = class e extends y {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn() + "/process-instance";
	}
	getActivityInstance(e) {
		return this.getConfig().getHttp().get(this.createAddressById(e, "activity-instances"));
	}
	modify(e, t) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "modification"), t);
	}
	modifyAsync(e, t) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "modification-async"), t);
	}
	deleteAsync(e) {
		let t = this.getBaseAddress() + "/delete";
		return this.getConfig().getHttp().post(t, e);
	}
	deleteAsyncHistoricQueryBased(e) {
		let t = this.getBaseAddress() + "/delete-historic-query-based";
		return this.getConfig().getHttp().post(t, e);
	}
	setJobRetriesAsync(e) {
		let t = this.getBaseAddress() + "/job-retries";
		return this.getConfig().getHttp().post(t, e);
	}
	setJobRetriesAsyncHistoricQueryBased(e) {
		let t = this.getBaseAddress() + "/job-retries-historic-query-based";
		return this.getConfig().getHttp().post(t, e);
	}
	setVariablesAsync(e) {
		let t = this.getBaseAddress() + "variables-async";
		return this.getConfig().getHttp().post(t, e);
	}
	correlateMessageAsync(e) {
		let t = this.getBaseAddress() + "message-async";
		return this.getConfig().getHttp().post(t, e);
	}
	activateOrSuspendById(e, t) {
		return this.getConfig().getHttp().put(this.createAddressById(e, "suspended"), t);
	}
	activateOrSuspendByProcessDefinitionId(e) {
		let t = this.getBaseAddress() + "/suspended";
		return this.getConfig().getHttp().put(t, e);
	}
	activateOrSuspendByProcessDefinitionKey(e) {
		let t = this.getBaseAddress() + "/suspended";
		return this.getConfig().getHttp().put(t, e);
	}
	activateOrSuspendInGroup(e) {
		let t = this.getBaseAddress() + "suspended-async";
		return this.getConfig().getHttp().post(t, e);
	}
	activateOrSuspendInBatch(e) {
		let t = this.getBaseAddress() + "suspended-async";
		return this.getConfig().getHttp().post(t, e);
	}
}, C = class e extends y {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn() + "/task";
	}
	getCreateAddress() {
		return this.getBaseAddress() + "/create";
	}
	getFormKey(e) {
		return this.getConfig().getHttp().get(this.createAddressById(e, "form"));
	}
	claim(e, t) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "claim"), t);
	}
	unclaim(e) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "unclaim"), {});
	}
	complete(e, t) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "complete"), t);
	}
	submitForm(e, t) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "submit-form"), t);
	}
	resolve(e, t) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "resolve"), t);
	}
	setAssignee(e, t) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "assignee"), t);
	}
	delegate(e, t) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "delegate"), t);
	}
	getDeployedForm(e) {
		return this.getConfig().getHttp().get(this.createAddressById(e, "deployed-form"));
	}
	getRenderedForm(e) {
		return this.getConfig().getHttp().get(this.createAddressById(e, "rendered-form"));
	}
	getTaskFormVariables(e, t) {
		return this.getConfig().getHttp().get(this.createAddressById(e, "form-variables"), t);
	}
	create(e) {
		return this.getConfig().getHttp().post(this.getCreateAddress(), e);
	}
	update(e, t) {
		return this.getConfig().getHttp().put(this.createAddressById(e), t);
	}
	handleBpmnError(e, t) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "bpmnError"), t);
	}
	handleBpmnEscalation(e, t) {
		return this.getConfig().getHttp().post(this.createAddressById(e, "bpmnEscalation"), t);
	}
}, w = class e extends v {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn() + "/history/activity-instance";
	}
}, T = class e extends v {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn() + "/history/process-instance";
	}
}, E = class e extends v {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn() + "/history/task";
	}
}, D = class e extends y {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn() + "/group";
	}
	getCreateAddress() {
		return this.getBaseAddress() + "/create";
	}
	create(e) {
		return this.getConfig().getHttp().post(this.getCreateAddress(), e);
	}
	update(e, t) {
		return this.getConfig().getHttp().put(this.createAddressById(e), t);
	}
}, O = class e extends h {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn() + "/group";
	}
	getRelationAddress(e, t = "") {
		return this.createAddressByRelation(e, t, "members");
	}
	create(e, t) {
		return this.getConfig().getHttp().put(this.getRelationAddress(e, t), "");
	}
	deleteByRelation(e, t) {
		return this.getConfig().getHttp().delete(this.getRelationAddress(e, t));
	}
}, k = class e extends _ {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn() + "/tenant";
	}
	getCreateAddress() {
		return this.getBaseAddress() + "/create";
	}
	createTenant(e) {
		return this.getConfig().getHttp().post(this.getCreateAddress(), e);
	}
	update(e, t) {
		return this.getConfig().getHttp().put(this.createAddressById(e), t);
	}
}, A = class e extends h {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn() + "/tenant";
	}
	getRelationAddress(e, t = "") {
		return this.createAddressByRelation(e, t, "user-members");
	}
	create(e, t) {
		return this.getConfig().getHttp().put(this.getRelationAddress(e, t), "");
	}
	deleteByRelation(e, t) {
		return this.getConfig().getHttp().delete(this.getRelationAddress(e, t));
	}
}, j = class e extends h {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn() + "/tenant";
	}
	getRelationAddress(e, t = "") {
		return this.createAddressByRelation(e, t, "group-members");
	}
	create(e, t) {
		return this.getConfig().getHttp().put(this.getRelationAddress(e, t), "");
	}
	deleteByRelation(e, t) {
		return this.getConfig().getHttp().delete(this.getRelationAddress(e, t));
	}
}, M = class e extends g {
	static instance;
	constructor(e) {
		super(e);
	}
	static getInstance(t) {
		return this.instance ??= new e(t), this.instance;
	}
	getBaseAddress() {
		return this.getConfig().getBpmn() + "/user";
	}
	getCreateAddress() {
		return this.getBaseAddress() + "/create";
	}
}, N = class e {
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
	deployment() {
		return b.getInstance(this.config);
	}
	processDefinition() {
		return x.getInstance(this.config);
	}
	processInstance() {
		return S.getInstance(this.config);
	}
	task() {
		return C.getInstance(this.config);
	}
	historyActivityInstance() {
		return w.getInstance(this.config);
	}
	historyProcessInstance() {
		return T.getInstance(this.config);
	}
	historyTask() {
		return E.getInstance(this.config);
	}
	group() {
		return D.getInstance(this.config);
	}
	groupMember() {
		return O.getInstance(this.config);
	}
	tenant() {
		return k.getInstance(this.config);
	}
	tenantUser() {
		return A.getInstance(this.config);
	}
	tenantGroup() {
		return j.getInstance(this.config);
	}
	user() {
		return M.getInstance(this.config);
	}
}, P = (e, t) => {
	let n = new r(e, t);
	return N.getInstance(n);
};
export { e as Axios, y as BaseBpmnService, N as BpmnApiResources, g as BpmnQueryByGetService, v as BpmnQueryByPostService, _ as BpmnQueryService, h as BpmnService, t as ContentTypeEnum, b as DeploymentService, O as GroupMemberService, D as GroupService, w as HistoryActivityInstanceService, T as HistoryProcessInstanceService, E as HistoryTaskService, r as HttpConfig, x as ProcessDefinitionService, S as ProcessInstanceService, m as RelationPathParamBuilder, i as Service, a as Swal, C as TaskService, j as TenantGroupService, k as TenantService, A as TenantUserService, p as UnionPathParamBuilder, M as UserService, P as createBpmnApi, o as moment, c as toast };
