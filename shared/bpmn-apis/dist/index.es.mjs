import { Axios as e, ContentTypeEnum as t, HttpConfig as n, Service as r, Service as i, Swal as a, moment as o, toast as s } from "@herodotus-cloud/core";
import { endsWith as c, isEmpty as l, trimEnd as u } from "lodash-es";
//#region src/lib/base/path.ts
var d = class {
	address;
	action = "";
	constructor(e) {
		this.address = e;
	}
	getWellFormedAddress() {
		let e = this.address;
		return c(e, "/") ? u(e, "/") : e;
	}
	addAction(e) {
		this.action = e;
	}
	appendAction(e) {
		return this.action ? e + "/" + this.action : e;
	}
}, f = class extends d {
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
}, p = class extends d {
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
}, m = class extends i {
	getCountAddress() {
		return this.getBaseAddress() + "/count";
	}
	createAddressByParam(e, t = "") {
		let n = new f(this.getBaseAddress());
		return t ? n.withParam(e).setAction(t).build() : n.withParam(e).build();
	}
	createAddressByRelation(e, t, n) {
		return new p(this.getBaseAddress()).withParam({
			id: e,
			relationId: t,
			action: n
		}).build();
	}
	createAddressById(e, t = "") {
		return this.createAddressByParam({ id: e }, t);
	}
	delete(e, t = {}) {
		return l(t) ? this.getConfig().getHttp().delete(this.createAddressById(e)) : this.getConfig().getHttp().deleteWithParams(this.createAddressById(e), t);
	}
}, h = class extends m {
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
}, g = class extends h {
	get(e) {
		return this.getConfig().getHttp().get(this.createAddressById(e));
	}
}, _ = class extends g {
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
		return l(n) || (a = Object.assign(r, { sorting: n })), new Promise((n, r) => {
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
}, v = class extends _ {}, y = class e extends g {
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
		let n = new FormData();
		n.append("deployment-name", e.deploymentName), n.append("deploy-changed-only", e.deployChangedOnly ? "true" : "false"), n.append("enable-duplicate-filtering", this.getDuplicateFiltering(e)), n.append("deployment-source", e.deploymentSource ? e.deploymentSource : "Dante Cloud UI");
		let r = e.deploymentActivationTime ? e.deploymentActivationTime : /* @__PURE__ */ new Date();
		n.append("deployment-activation-time", o(r).utc().format()), e.tenantId && n.append("tenant-id", e.tenantId);
		let i = new Blob([e.resource], { type: "application/octet-stream" });
		return n.append("data", i, (/* @__PURE__ */ new Date()).getTime() + ".bpmn"), this.getConfig().getHttp().post(this.getCreateAddress(), n, { contentType: t.MULTI_PART });
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
}, b = class e extends g {
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
}, x = class e extends v {
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
}, S = class e extends v {
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
}, C = class e extends _ {
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
}, w = class e extends _ {
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
}, T = class e extends _ {
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
}, E = class e extends v {
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
}, D = class e extends m {
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
}, O = class e extends g {
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
}, k = class e extends m {
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
}, A = class e extends m {
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
}, j = class e extends h {
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
}, M = class e {
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
		return y.getInstance(this.config);
	}
	processDefinition() {
		return b.getInstance(this.config);
	}
	processInstance() {
		return x.getInstance(this.config);
	}
	task() {
		return S.getInstance(this.config);
	}
	historyActivityInstance() {
		return C.getInstance(this.config);
	}
	historyProcessInstance() {
		return w.getInstance(this.config);
	}
	historyTask() {
		return T.getInstance(this.config);
	}
	group() {
		return E.getInstance(this.config);
	}
	groupMember() {
		return D.getInstance(this.config);
	}
	tenant() {
		return O.getInstance(this.config);
	}
	tenantUser() {
		return k.getInstance(this.config);
	}
	tenantGroup() {
		return A.getInstance(this.config);
	}
	user() {
		return j.getInstance(this.config);
	}
}, N = (e, t) => {
	let r = new n(e, t);
	return M.getInstance(r);
};
//#endregion
export { e as Axios, v as BaseBpmnService, M as BpmnApiResources, h as BpmnQueryByGetService, _ as BpmnQueryByPostService, g as BpmnQueryService, m as BpmnService, t as ContentTypeEnum, y as DeploymentService, D as GroupMemberService, E as GroupService, C as HistoryActivityInstanceService, w as HistoryProcessInstanceService, T as HistoryTaskService, n as HttpConfig, b as ProcessDefinitionService, x as ProcessInstanceService, p as RelationPathParamBuilder, r as Service, a as Swal, S as TaskService, A as TenantGroupService, O as TenantService, k as TenantUserService, f as UnionPathParamBuilder, j as UserService, N as createBpmnApi, s as toast };
