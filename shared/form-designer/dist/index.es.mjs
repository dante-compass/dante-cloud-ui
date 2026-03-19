import { QBtn as e, QCard as t, QCardActions as n, QCardSection as r, QDialog as i, QDrawer as a, QExpansionItem as o, QHeader as s, QIcon as c, QInput as l, QLayout as u, QList as d, QPage as f, QPageContainer as p, QPopupEdit as m, QSeparator as h, QSpace as g, QTab as _, QTabPanel as v, QTabPanels as ee, QTable as y, QTabs as te, QTd as ne, QToolbar as re, QToolbarTitle as ie, QTr as ae } from "quasar";
import { Fragment as oe, computed as b, createBlock as x, createCommentVNode as se, createElementBlock as S, createElementVNode as C, createSlots as ce, createTextVNode as w, createVNode as T, defineComponent as E, mergeProps as le, normalizeClass as ue, normalizeStyle as de, onUnmounted as fe, openBlock as D, ref as O, renderList as pe, renderSlot as k, resolveComponent as A, resolveDynamicComponent as me, shallowRef as he, toDisplayString as j, unref as M, watch as ge, withCtx as N } from "vue";
import { defineStore as P, storeToRefs as _e } from "pinia";
import { isEmpty as F, remove as ve } from "lodash-es";
import { Swal as I, toast as L } from "@herodotus-cloud/core";
import { ElementUtils as R, HRendererEngine as ye, HRendererForm as be, WIDGET_DEFINITIONS as z } from "@herodotus-cloud/form-engine";
import { HSwitch as B, HTextField as V } from "@herodotus-cloud/components";
import H from "vuedraggable";
//#region src/stores/canvas.ts
var U = P("FormDesignerCanvas", {
	state: () => ({
		isClosed: !1,
		canvasElements: [],
		sheet: {},
		selectedElement: {},
		id: "",
		name: "",
		activityName: ""
	}),
	getters: {
		isSelected(e) {
			return (t) => !F(e.selectedElement) && e.selectedElement.id ? e.selectedElement.config.renderKey === t : !1;
		},
		isEmptyCanvas: (e) => F(e.canvasElements),
		getElements: (e) => e.canvasElements,
		currentSchema() {
			return !F(this.selectedElement) && !F(this.selectedElement.schema) ? this.selectedElement.schema : {};
		},
		currentConfig() {
			return !F(this.selectedElement) && !F(this.selectedElement.config) ? this.selectedElement.config : {};
		},
		currentPanel() {
			return !F(this.currentConfig) && !F(this.currentConfig.panel) ? this.currentConfig.panel : "INFORMATION_PANEL";
		},
		isInformationPanel() {
			return this.currentPanel === "INFORMATION_PANEL";
		},
		condition() {
			return F(this.sheet.condition) && (this.sheet.condition = {
				variable: "",
				options: []
			}), this.sheet.condition;
		}
	},
	actions: {
		selectElement(e) {
			this.selectedElement = e;
		},
		selectFirstElement() {
			F(this.canvasElements) || this.selectElement(this.canvasElements[0]);
		},
		loading(e) {
			F(e.modeler) || (this.canvasElements = e.modeler.elements, this.sheet = e.modeler.sheet), this.id = e.id, this.name = e.name, this.activityName = e.activityName, this.selectFirstElement();
		},
		compose() {
			return {
				id: this.id,
				name: this.name,
				activityName: this.activityName,
				modeler: {
					elements: this.canvasElements,
					sheet: this.sheet
				}
			};
		},
		addElement(e) {
			this.canvasElements === void 0 && (this.canvasElements = []), this.canvasElements.push(e), this.selectElement(e);
		},
		removeElement(e) {
			!F(this.canvasElements) && e.id && (ve(this.canvasElements, (t) => t.id === e.id), this.selectFirstElement());
		}
	}
}), W = P("FormDesignerResources", {
	state: () => ({ resources: {} }),
	getters: { dynamicForm: (e) => e.resources.dynamicForm() },
	actions: { init(e) {
		this.resources = e;
	} }
}), xe = E({
	name: "HFormInformation",
	setup() {
		let { id: e, name: t, activityName: n } = U(), r = O(null), i = O(null);
		return {
			id: e,
			name: t,
			activityName: n,
			nameRef: r,
			activityNameRef: i,
			validate: () => {
				let e = r.value, t = i.value;
				return e.validate(), t.validate(), !e.hasError && !t.hasError;
			}
		};
	}
}), G = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
//#endregion
//#region src/components/canvas-toolbar/HFormInformation.vue
function Se(e, t, n, r, i, a) {
	let o = l, s = d;
	return D(), x(s, null, {
		default: N(() => [
			T(o, {
				modelValue: e.id,
				"onUpdate:modelValue": t[0] ||= (t) => e.id = t,
				dense: "",
				outlined: "",
				label: "ID"
			}, null, 8, ["modelValue"]),
			T(o, {
				ref: "nameRef",
				modelValue: e.name,
				"onUpdate:modelValue": t[1] ||= (t) => e.name = t,
				dense: "",
				outlined: "",
				label: "表单名称",
				rules: [(e) => !!e || "表单名称不能为空"]
			}, null, 8, ["modelValue", "rules"]),
			T(o, {
				ref: "activityNameRef",
				modelValue: e.activityName,
				"onUpdate:modelValue": t[2] ||= (t) => e.activityName = t,
				dense: "",
				outlined: "",
				label: "流程节点名称",
				rules: [(e) => !!e || "流程节点不能为空"]
			}, null, 8, ["modelValue", "rules"])
		]),
		_: 1
	});
}
var K = /* @__PURE__ */ G(xe, [["render", Se]]), Ce = E({
	name: "HFormUploadDialog",
	components: { HFormInformation: K },
	props: { modelValue: {
		type: Boolean,
		default: !1
	} },
	emits: [
		"update:modelValue",
		"update:open",
		"save"
	],
	setup(e, { emit: t }) {
		let n = b({
			get: () => e.modelValue,
			set: (e) => {
				t("update:modelValue", e);
			}
		}), r = O(null), i = W(), a = U(), o = () => {
			I.fire({
				title: "保存成功！",
				text: "您是否需要关闭设计器？",
				icon: "success",
				showCancelButton: !0,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "确定!",
				cancelButtonText: "取消",
				showClass: { popup: "animate__animated animate__fadeIn" },
				hideClass: { popup: "animate__animated animate__fadeOut" }
			}).then((e) => {
				e.value && (a.isClosed = !0);
			});
		};
		return {
			isOpen: n,
			onSave: () => {
				if (r.value && r.value.validate()) {
					let e = a.compose();
					i.dynamicForm.saveOrUpdate(e).then((e) => {
						n.value = !1, o();
					}).catch((e) => {
						n.value = !1, L.error("保存失败！");
					});
				}
			},
			infoRef: r
		};
	}
});
//#endregion
//#region src/components/canvas-toolbar/HFormUploadDialog.vue
function we(a, o, s, c, l, u) {
	let d = g, f = e, p = r, m = K, h = n, _ = t, v = i;
	return D(), x(v, {
		modelValue: a.isOpen,
		"onUpdate:modelValue": o[3] ||= (e) => a.isOpen = e,
		persistent: "",
		"transition-show": "scale",
		"transition-hide": "scale"
	}, {
		default: N(() => [T(_, { style: { width: "20vw" } }, {
			default: N(() => [
				T(p, { class: "row items-center q-pb-none" }, {
					default: N(() => [
						o[4] ||= C("div", { class: "text-h6" }, "上传表单", -1),
						T(d),
						T(f, {
							icon: "close",
							flat: "",
							round: "",
							dense: "",
							onClick: o[0] ||= (e) => a.isOpen = !1
						})
					]),
					_: 1
				}),
				T(p, null, {
					default: N(() => [T(m, { ref: "infoRef" }, null, 512)]),
					_: 1
				}),
				T(h, { align: "right" }, {
					default: N(() => [T(f, {
						label: "取消",
						color: "red",
						onClick: o[1] ||= (e) => a.isOpen = !1
					}), T(f, {
						label: "保存",
						color: "primary",
						onClick: o[2] ||= (e) => a.onSave()
					})]),
					_: 1
				})
			]),
			_: 1
		})]),
		_: 1
	}, 8, ["modelValue"]);
}
var q = /* @__PURE__ */ G(Ce, [["render", we]]), Te = E({ name: "HCanvasLayout" });
//#endregion
//#region src/components/library/HCanvasLayout.vue
function Ee(e, n, r, i, a, o) {
	let s = t, c = f, l = p;
	return D(), x(l, null, {
		default: N(() => [T(c, null, {
			default: N(() => [T(s, { class: "q-ma-md" }, {
				default: N(() => [k(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		})]),
		_: 3
	});
}
var J = /* @__PURE__ */ G(Te, [["render", Ee]]), De = E({
	name: "HExpansionItem",
	props: { headerClass: {
		type: String,
		default: "text-primary"
	} }
});
//#endregion
//#region src/components/library/HExpansionItem.vue
function Oe(e, n, i, a, s, c) {
	let l = r, u = t, d = o;
	return D(), x(d, le({
		"expand-separator": "",
		"header-class": e.headerClass
	}, e.$attrs), {
		default: N(() => [T(u, null, {
			default: N(() => [T(l, null, {
				default: N(() => [k(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		})]),
		_: 3
	}, 16, ["header-class"]);
}
var Y = /* @__PURE__ */ G(De, [["render", Oe]]), ke = E({
	name: "HFormPreviewDialog",
	components: { HRendererForm: be },
	props: { modelValue: {
		type: Boolean,
		default: !1
	} },
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let { canvasElements: n } = U(), r = b({
			get: () => e.modelValue,
			set: (e) => {
				t("update:modelValue", e);
			}
		});
		return {
			isOpen: r,
			state: O({}),
			canvasElements: n,
			onClose: () => {
				r.value = !1;
			}
		};
	}
});
//#endregion
//#region src/components/canvas-toolbar/HFormPreviewDialog.vue
function Ae(a, o, s, c, l, u) {
	let d = g, f = e, p = r, m = A("h-renderer-form"), h = n, _ = t, v = i;
	return D(), x(v, {
		modelValue: a.isOpen,
		"onUpdate:modelValue": o[3] ||= (e) => a.isOpen = e,
		persistent: "",
		"transition-show": "scale",
		"transition-hide": "scale"
	}, {
		default: N(() => [T(_, null, {
			default: N(() => [
				T(p, { class: "row items-center q-pb-none" }, {
					default: N(() => [
						o[4] ||= C("div", { class: "text-h6" }, "预览", -1),
						T(d),
						T(f, {
							icon: "close",
							flat: "",
							round: "",
							dense: "",
							onClick: o[0] ||= (e) => a.onClose()
						})
					]),
					_: 1
				}),
				T(p, null, {
					default: N(() => [T(m, {
						modelValue: a.state,
						"onUpdate:modelValue": o[1] ||= (e) => a.state = e,
						elements: a.canvasElements
					}, null, 8, ["modelValue", "elements"])]),
					_: 1
				}),
				T(h, {
					align: "right",
					class: "bg-white text-red"
				}, {
					default: N(() => [T(f, {
						flat: "",
						label: "确定",
						onClick: o[2] ||= (e) => a.onClose()
					})]),
					_: 1
				})
			]),
			_: 1
		})]),
		_: 1
	}, 8, ["modelValue"]);
}
var X = /* @__PURE__ */ G(ke, [["render", Ae]]), je = E({
	name: "HCanvasElement",
	components: { HRendererEngine: ye },
	props: {
		element: {
			type: Object,
			required: !0
		},
		selectedId: {
			type: Number,
			required: !0
		}
	},
	setup(e) {
		let t = O(!1), n = U();
		return {
			isHover: t,
			schemas: b(() => [e.element.schema]),
			isSelected: b(() => n.isSelected(e.selectedId)),
			onDelete: () => {
				n.removeElement(e.element);
			}
		};
	}
});
//#endregion
//#region src/components/canvas/HCanvasElement.vue
function Me(r, i, a, o, s, c) {
	let l = A("h-renderer-engine"), u = e, d = n, f = t;
	return D(), x(f, {
		class: ue([r.isSelected && !r.isHover ? "canvas-item-selected" : "canvas-item"]),
		onMouseover: i[0] ||= (e) => r.isHover = !0,
		onMouseleave: i[1] ||= (e) => r.isHover = !1
	}, {
		default: N(() => [T(l, { schemas: r.schemas }, null, 8, ["schemas"]), r.isHover ? (D(), x(d, {
			key: 0,
			class: "justify-end q-pa-none"
		}, {
			default: N(() => [
				T(u, {
					flat: "",
					round: "",
					size: "sm",
					color: "red",
					icon: "mdi-delete",
					onClick: r.onDelete
				}, null, 8, ["onClick"]),
				T(u, {
					flat: "",
					round: "",
					size: "sm",
					color: "accent",
					icon: "bookmark"
				}),
				T(u, {
					flat: "",
					round: "",
					size: "sm",
					color: "primary",
					icon: "share"
				})
			]),
			_: 1
		})) : se("", !0)]),
		_: 1
	}, 8, ["class"]);
}
var Z = /* @__PURE__ */ G(je, [["render", Me], ["__scopeId", "data-v-8129af03"]]), Ne = E({
	name: "HCanvasContainer",
	components: {
		Draggable: H,
		HCanvasElement: Z,
		HCanvasLayout: J
	},
	setup(e) {
		let t = U(), { canvasElements: n } = t;
		return {
			isEmptyCanvas: b(() => t.isEmptyCanvas),
			canvasElements: n,
			onSelectedItem: (e) => {
				t.selectElement(e);
			}
		};
	}
});
//#endregion
//#region src/components/canvas/HCanvasContainer.vue
function Pe(e, t, n, r, i, a) {
	let o = Z, s = A("draggable"), c = J;
	return D(), x(c, null, {
		default: N(() => [T(s, {
			"item-key": "id",
			list: e.canvasElements,
			animation: 300,
			group: "widgetGroup",
			class: "canvas-container"
		}, ce({
			item: N(({ element: t }) => [(D(), x(o, {
				element: t,
				key: t.config.renderKey,
				"selected-id": t.config.renderKey,
				onClick: (n) => e.onSelectedItem(t)
			}, null, 8, [
				"element",
				"selected-id",
				"onClick"
			]))]),
			_: 2
		}, [e.isEmptyCanvas ? {
			name: "footer",
			fn: N(() => [t[0] ||= C("div", { class: "row text-center canvas-container" }, [C("div", { class: "col-12 self-center text-h6 text-weight-medium text-grey-5" }, " 从左侧拖拽或点击来添加字段 ")], -1)]),
			key: "0"
		} : void 0]), 1032, ["list"])]),
		_: 1
	});
}
var Fe = /* @__PURE__ */ G(Ne, [["render", Pe], ["__scopeId", "data-v-b8c7d9b0"]]), Q = {
	HideBottomSpace: "hide-bottom-space",
	ItemAligned: "item-aligned"
}, Ie = { class: "q-gutter-y-sm column" }, Le = { class: "q-gutter-y-sm column" }, Re = /* @__PURE__ */ E({
	name: "HDatePanel",
	components: {
		HExpansionItem: Y,
		HSwitch: B,
		HTextField: V
	},
	__name: "HDatePanel",
	props: { schema: {} },
	setup(e) {
		let t = e, n = Q, r = b(() => t.schema.attrs), i = b(() => t.schema.models);
		return (e, t) => {
			let a = d;
			return D(), x(a, { bordered: "" }, {
				default: N(() => [
					T(M(Y), {
						icon: "mdi-information",
						label: "常规",
						"default-opened": ""
					}, {
						default: N(() => [T(M(V), {
							modelValue: i.value.modelValue.name,
							"onUpdate:modelValue": t[0] ||= (e) => i.value.modelValue.name = e,
							dense: "",
							label: "名称"
						}, null, 8, ["modelValue"]), T(M(V), {
							modelValue: r.value.label,
							"onUpdate:modelValue": t[1] ||= (e) => r.value.label = e,
							dense: "",
							label: "Label"
						}, null, 8, ["modelValue"])]),
						_: 1
					}),
					T(M(Y), {
						icon: "mdi-eject-circle",
						label: "状态"
					}, {
						default: N(() => [C("div", Ie, [T(M(B), {
							modelValue: r.value.disable,
							"onUpdate:modelValue": t[2] ||= (e) => r.value.disable = e,
							label: "Disable"
						}, null, 8, ["modelValue"]), T(M(B), {
							modelValue: r.value.readonly,
							"onUpdate:modelValue": t[3] ||= (e) => r.value.readonly = e,
							label: "Readonly"
						}, null, 8, ["modelValue"])])]),
						_: 1
					}),
					T(M(Y), {
						icon: "mdi-image-edit",
						label: "外观"
					}, {
						default: N(() => [C("div", Le, [
							T(M(B), {
								modelValue: r.value.dark,
								"onUpdate:modelValue": t[4] ||= (e) => r.value.dark = e,
								label: "Dark"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.filled,
								"onUpdate:modelValue": t[5] ||= (e) => r.value.filled = e,
								label: "Filled"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.outlined,
								"onUpdate:modelValue": t[6] ||= (e) => r.value.outlined = e,
								label: "Outlined"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.borderless,
								"onUpdate:modelValue": t[7] ||= (e) => r.value.borderless = e,
								label: "Borderless"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.standout,
								"onUpdate:modelValue": t[8] ||= (e) => r.value.standout = e,
								label: "Standout"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value[M(n).HideBottomSpace],
								"onUpdate:modelValue": t[9] ||= (e) => r.value[M(n).HideBottomSpace] = e,
								label: "Hide Bottom Space"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.rounded,
								"onUpdate:modelValue": t[10] ||= (e) => r.value.rounded = e,
								label: "Rounded"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.square,
								"onUpdate:modelValue": t[11] ||= (e) => r.value.square = e,
								label: "Square"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.dense,
								"onUpdate:modelValue": t[12] ||= (e) => r.value.dense = e,
								label: "Dense"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value[M(n).ItemAligned],
								"onUpdate:modelValue": t[13] ||= (e) => r.value[M(n).ItemAligned] = e,
								label: "Item Aligned"
							}, null, 8, ["modelValue"])
						])]),
						_: 1
					})
				]),
				_: 1
			});
		};
	}
}), ze = { class: "q-gutter-y-sm column" }, Be = { class: "q-gutter-y-sm column" }, Ve = /* @__PURE__ */ E({
	name: "HPasswordPanel",
	components: {
		HExpansionItem: Y,
		HSwitch: B,
		HTextField: V
	},
	__name: "HPasswordPanel",
	props: { schema: {} },
	setup(e) {
		let t = e, n = Q, r = b(() => t.schema.attrs), i = b(() => t.schema.models);
		return (e, t) => {
			let a = d;
			return D(), x(a, { bordered: "" }, {
				default: N(() => [
					T(M(Y), {
						icon: "mdi-information",
						label: "常规",
						"default-opened": ""
					}, {
						default: N(() => [T(M(V), {
							modelValue: i.value.modelValue.name,
							"onUpdate:modelValue": t[0] ||= (e) => i.value.modelValue.name = e,
							dense: "",
							label: "名称"
						}, null, 8, ["modelValue"]), T(M(V), {
							modelValue: r.value.label,
							"onUpdate:modelValue": t[1] ||= (e) => r.value.label = e,
							dense: "",
							label: "Label"
						}, null, 8, ["modelValue"])]),
						_: 1
					}),
					T(M(Y), {
						icon: "mdi-eject-circle",
						label: "状态"
					}, {
						default: N(() => [C("div", ze, [T(M(B), {
							modelValue: r.value.disable,
							"onUpdate:modelValue": t[2] ||= (e) => r.value.disable = e,
							label: "Disable"
						}, null, 8, ["modelValue"]), T(M(B), {
							modelValue: r.value.readonly,
							"onUpdate:modelValue": t[3] ||= (e) => r.value.readonly = e,
							label: "Readonly"
						}, null, 8, ["modelValue"])])]),
						_: 1
					}),
					T(M(Y), {
						icon: "mdi-image-edit",
						label: "外观"
					}, {
						default: N(() => [C("div", Be, [
							T(M(B), {
								modelValue: r.value.dark,
								"onUpdate:modelValue": t[4] ||= (e) => r.value.dark = e,
								label: "Dark"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.filled,
								"onUpdate:modelValue": t[5] ||= (e) => r.value.filled = e,
								label: "Filled"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.outlined,
								"onUpdate:modelValue": t[6] ||= (e) => r.value.outlined = e,
								label: "Outlined"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.borderless,
								"onUpdate:modelValue": t[7] ||= (e) => r.value.borderless = e,
								label: "Borderless"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.standout,
								"onUpdate:modelValue": t[8] ||= (e) => r.value.standout = e,
								label: "Standout"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value[M(n).HideBottomSpace],
								"onUpdate:modelValue": t[9] ||= (e) => r.value[M(n).HideBottomSpace] = e,
								label: "Hide Bottom Space"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.rounded,
								"onUpdate:modelValue": t[10] ||= (e) => r.value.rounded = e,
								label: "Rounded"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.square,
								"onUpdate:modelValue": t[11] ||= (e) => r.value.square = e,
								label: "Square"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.dense,
								"onUpdate:modelValue": t[12] ||= (e) => r.value.dense = e,
								label: "Dense"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value[M(n).ItemAligned],
								"onUpdate:modelValue": t[13] ||= (e) => r.value[M(n).ItemAligned] = e,
								label: "Item Aligned"
							}, null, 8, ["modelValue"])
						])]),
						_: 1
					})
				]),
				_: 1
			});
		};
	}
}), He = E({
	name: "HConditionVariable",
	components: {
		HExpansionItem: Y,
		HTextField: V
	},
	setup(e) {
		let { condition: t } = U(), n = [{
			align: "center",
			name: "label",
			field: "calories",
			label: "标签"
		}, {
			align: "center",
			name: "value",
			field: "fat",
			label: "值"
		}], r = O([{
			label: "option1",
			value: !0
		}, {
			label: "option2",
			value: !1
		}]);
		return {
			tableColumns: n,
			tableRows: r,
			condition: t,
			onModify: () => {
				t.options = r.value;
			}
		};
	}
});
//#endregion
//#region src/components/property-elements/HConditionVariable.vue
function Ue(e, t, n, r, i, a) {
	let o = A("h-text-field"), s = l, c = m, u = ne, d = ae, f = y, p = Y;
	return D(), x(p, {
		icon: "mdi-variable",
		label: "流程变量"
	}, {
		default: N(() => [T(o, {
			modelValue: e.condition.variable,
			"onUpdate:modelValue": t[0] ||= (t) => e.condition.variable = t,
			dense: "",
			label: "变量名称"
		}, null, 8, ["modelValue"]), T(f, {
			rows: e.tableRows,
			columns: e.tableColumns,
			"row-key": "name",
			dense: "",
			flat: "",
			bordered: "",
			"hide-pagination": "",
			"card-container-class": "q-ml-2"
		}, {
			body: N((t) => [T(d, { props: t }, {
				default: N(() => [T(u, {
					key: "label",
					props: t
				}, {
					default: N(() => [w(j(t.row.label) + " ", 1), T(c, {
						modelValue: t.row.label,
						"onUpdate:modelValue": [(e) => t.row.label = e, e.onModify],
						title: "修改标签",
						buttons: "",
						"label-set": "确定",
						"label-cancel": "取消"
					}, {
						default: N((e) => [T(s, {
							modelValue: e.value,
							"onUpdate:modelValue": (t) => e.value = t,
							dense: "",
							autofocus: ""
						}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
						_: 1
					}, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 2
				}, 1032, ["props"]), T(u, {
					key: "value",
					props: t
				}, {
					default: N(() => [w(j(t.row.value), 1)]),
					_: 2
				}, 1032, ["props"])]),
				_: 2
			}, 1032, ["props"])]),
			_: 1
		}, 8, ["rows", "columns"])]),
		_: 1
	});
}
var We = /* @__PURE__ */ G(He, [["render", Ue]]), Ge = E({
	name: "HSheetPanel",
	components: { HConditionVariable: We }
});
//#endregion
//#region src/components/property-panels/HSheetPanel.vue
function Ke(e, t, n, r, i, a) {
	let o = We, s = d;
	return D(), x(s, { bordered: "" }, {
		default: N(() => [T(o)]),
		_: 1
	});
}
var qe = /* @__PURE__ */ G(Ge, [["render", Ke]]), Je = { class: "q-gutter-y-sm column" }, Ye = { class: "q-gutter-y-sm column" }, Xe = /* @__PURE__ */ E({
	name: "HTextareaPanel",
	components: {
		HExpansionItem: Y,
		HSwitch: B,
		HTextField: V
	},
	__name: "HTextareaPanel",
	props: { schema: {} },
	setup(e) {
		let t = e, n = Q, r = b(() => t.schema.attrs), i = b(() => t.schema.models);
		return (e, t) => {
			let a = d;
			return D(), x(a, { bordered: "" }, {
				default: N(() => [
					T(M(Y), {
						icon: "mdi-information",
						label: "常规",
						"default-opened": ""
					}, {
						default: N(() => [T(M(V), {
							modelValue: i.value.modelValue.name,
							"onUpdate:modelValue": t[0] ||= (e) => i.value.modelValue.name = e,
							dense: "",
							label: "名称"
						}, null, 8, ["modelValue"]), T(M(V), {
							modelValue: r.value.label,
							"onUpdate:modelValue": t[1] ||= (e) => r.value.label = e,
							dense: "",
							label: "Label"
						}, null, 8, ["modelValue"])]),
						_: 1
					}),
					T(M(Y), {
						icon: "mdi-eject-circle",
						label: "状态"
					}, {
						default: N(() => [C("div", Je, [T(M(B), {
							modelValue: r.value.disable,
							"onUpdate:modelValue": t[2] ||= (e) => r.value.disable = e,
							label: "Disable"
						}, null, 8, ["modelValue"]), T(M(B), {
							modelValue: r.value.readonly,
							"onUpdate:modelValue": t[3] ||= (e) => r.value.readonly = e,
							label: "Readonly"
						}, null, 8, ["modelValue"])])]),
						_: 1
					}),
					T(M(Y), {
						icon: "mdi-image-edit",
						label: "外观"
					}, {
						default: N(() => [C("div", Ye, [
							T(M(B), {
								modelValue: r.value.dark,
								"onUpdate:modelValue": t[4] ||= (e) => r.value.dark = e,
								label: "Dark"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.filled,
								"onUpdate:modelValue": t[5] ||= (e) => r.value.filled = e,
								label: "Filled"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.outlined,
								"onUpdate:modelValue": t[6] ||= (e) => r.value.outlined = e,
								label: "Outlined"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.borderless,
								"onUpdate:modelValue": t[7] ||= (e) => r.value.borderless = e,
								label: "Borderless"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.standout,
								"onUpdate:modelValue": t[8] ||= (e) => r.value.standout = e,
								label: "Standout"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value[M(n).HideBottomSpace],
								"onUpdate:modelValue": t[9] ||= (e) => r.value[M(n).HideBottomSpace] = e,
								label: "Hide Bottom Space"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.rounded,
								"onUpdate:modelValue": t[10] ||= (e) => r.value.rounded = e,
								label: "Rounded"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.square,
								"onUpdate:modelValue": t[11] ||= (e) => r.value.square = e,
								label: "Square"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.dense,
								"onUpdate:modelValue": t[12] ||= (e) => r.value.dense = e,
								label: "Dense"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value[M(n).ItemAligned],
								"onUpdate:modelValue": t[13] ||= (e) => r.value[M(n).ItemAligned] = e,
								label: "Item Aligned"
							}, null, 8, ["modelValue"])
						])]),
						_: 1
					})
				]),
				_: 1
			});
		};
	}
}), Ze = { class: "q-gutter-y-sm column" }, Qe = { class: "q-gutter-y-sm column" }, $e = /* @__PURE__ */ E({
	name: "HTextFieldPanel",
	components: {
		HExpansionItem: Y,
		HSwitch: B,
		HTextField: V
	},
	__name: "HTextFieldPanel",
	props: { schema: {} },
	setup(e) {
		let t = e, n = Q, r = b(() => t.schema.attrs), i = b(() => t.schema.models);
		return (e, t) => {
			let a = d;
			return D(), x(a, { bordered: "" }, {
				default: N(() => [
					T(M(Y), {
						icon: "mdi-information",
						label: "常规",
						"default-opened": ""
					}, {
						default: N(() => [T(M(V), {
							modelValue: i.value.modelValue.name,
							"onUpdate:modelValue": t[0] ||= (e) => i.value.modelValue.name = e,
							dense: "",
							label: "名称"
						}, null, 8, ["modelValue"]), T(M(V), {
							modelValue: r.value.label,
							"onUpdate:modelValue": t[1] ||= (e) => r.value.label = e,
							dense: "",
							label: "Label"
						}, null, 8, ["modelValue"])]),
						_: 1
					}),
					T(M(Y), {
						icon: "mdi-eject-circle",
						label: "状态"
					}, {
						default: N(() => [C("div", Ze, [T(M(B), {
							modelValue: r.value.disable,
							"onUpdate:modelValue": t[2] ||= (e) => r.value.disable = e,
							label: "Disable"
						}, null, 8, ["modelValue"]), T(M(B), {
							modelValue: r.value.readonly,
							"onUpdate:modelValue": t[3] ||= (e) => r.value.readonly = e,
							label: "Readonly"
						}, null, 8, ["modelValue"])])]),
						_: 1
					}),
					T(M(Y), {
						icon: "mdi-image-edit",
						label: "外观"
					}, {
						default: N(() => [C("div", Qe, [
							T(M(B), {
								modelValue: r.value.dark,
								"onUpdate:modelValue": t[4] ||= (e) => r.value.dark = e,
								label: "Dark"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.filled,
								"onUpdate:modelValue": t[5] ||= (e) => r.value.filled = e,
								label: "Filled"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.outlined,
								"onUpdate:modelValue": t[6] ||= (e) => r.value.outlined = e,
								label: "Outlined"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.borderless,
								"onUpdate:modelValue": t[7] ||= (e) => r.value.borderless = e,
								label: "Borderless"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.standout,
								"onUpdate:modelValue": t[8] ||= (e) => r.value.standout = e,
								label: "Standout"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value[M(n).HideBottomSpace],
								"onUpdate:modelValue": t[9] ||= (e) => r.value[M(n).HideBottomSpace] = e,
								label: "Hide Bottom Space"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.rounded,
								"onUpdate:modelValue": t[10] ||= (e) => r.value.rounded = e,
								label: "Rounded"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.square,
								"onUpdate:modelValue": t[11] ||= (e) => r.value.square = e,
								label: "Square"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value.dense,
								"onUpdate:modelValue": t[12] ||= (e) => r.value.dense = e,
								label: "Dense"
							}, null, 8, ["modelValue"]),
							T(M(B), {
								modelValue: r.value[M(n).ItemAligned],
								"onUpdate:modelValue": t[13] ||= (e) => r.value[M(n).ItemAligned] = e,
								label: "Item Aligned"
							}, null, 8, ["modelValue"])
						])]),
						_: 1
					})
				]),
				_: 1
			});
		};
	}
}), et = { class: "q-gutter-y-sm column" }, tt = { class: "q-gutter-y-sm column" }, nt = /* @__PURE__ */ E({
	name: "HGeneratorLayout",
	components: {
		HSheetPanel: qe,
		HFormInformation: K,
		DATE_PICKER: Re,
		PASSWORD: Ve,
		TEXT_AREA: Xe,
		TEXT_FIELD: $e,
		TIME_PICKER: /* @__PURE__ */ E({
			name: "HTimePanel",
			components: {
				HExpansionItem: Y,
				HSwitch: B,
				HTextField: V
			},
			__name: "HTimePanel",
			props: { schema: {} },
			setup(e) {
				let t = e, n = Q, r = b(() => t.schema.attrs), i = b(() => t.schema.models);
				return (e, t) => {
					let a = d;
					return D(), x(a, { bordered: "" }, {
						default: N(() => [
							T(M(Y), {
								icon: "mdi-information",
								label: "常规",
								"default-opened": ""
							}, {
								default: N(() => [T(M(V), {
									modelValue: i.value.modelValue.name,
									"onUpdate:modelValue": t[0] ||= (e) => i.value.modelValue.name = e,
									dense: "",
									label: "名称"
								}, null, 8, ["modelValue"]), T(M(V), {
									modelValue: r.value.label,
									"onUpdate:modelValue": t[1] ||= (e) => r.value.label = e,
									dense: "",
									label: "Label"
								}, null, 8, ["modelValue"])]),
								_: 1
							}),
							T(M(Y), {
								icon: "mdi-eject-circle",
								label: "状态"
							}, {
								default: N(() => [C("div", et, [T(M(B), {
									modelValue: r.value.disable,
									"onUpdate:modelValue": t[2] ||= (e) => r.value.disable = e,
									label: "Disable"
								}, null, 8, ["modelValue"]), T(M(B), {
									modelValue: r.value.readonly,
									"onUpdate:modelValue": t[3] ||= (e) => r.value.readonly = e,
									label: "Readonly"
								}, null, 8, ["modelValue"])])]),
								_: 1
							}),
							T(M(Y), {
								icon: "mdi-image-edit",
								label: "外观"
							}, {
								default: N(() => [C("div", tt, [
									T(M(B), {
										modelValue: r.value.dark,
										"onUpdate:modelValue": t[4] ||= (e) => r.value.dark = e,
										label: "Dark"
									}, null, 8, ["modelValue"]),
									T(M(B), {
										modelValue: r.value.filled,
										"onUpdate:modelValue": t[5] ||= (e) => r.value.filled = e,
										label: "Filled"
									}, null, 8, ["modelValue"]),
									T(M(B), {
										modelValue: r.value.outlined,
										"onUpdate:modelValue": t[6] ||= (e) => r.value.outlined = e,
										label: "Outlined"
									}, null, 8, ["modelValue"]),
									T(M(B), {
										modelValue: r.value.borderless,
										"onUpdate:modelValue": t[7] ||= (e) => r.value.borderless = e,
										label: "Borderless"
									}, null, 8, ["modelValue"]),
									T(M(B), {
										modelValue: r.value.standout,
										"onUpdate:modelValue": t[8] ||= (e) => r.value.standout = e,
										label: "Standout"
									}, null, 8, ["modelValue"]),
									T(M(B), {
										modelValue: r.value[M(n).HideBottomSpace],
										"onUpdate:modelValue": t[9] ||= (e) => r.value[M(n).HideBottomSpace] = e,
										label: "Hide Bottom Space"
									}, null, 8, ["modelValue"]),
									T(M(B), {
										modelValue: r.value.rounded,
										"onUpdate:modelValue": t[10] ||= (e) => r.value.rounded = e,
										label: "Rounded"
									}, null, 8, ["modelValue"]),
									T(M(B), {
										modelValue: r.value.square,
										"onUpdate:modelValue": t[11] ||= (e) => r.value.square = e,
										label: "Square"
									}, null, 8, ["modelValue"]),
									T(M(B), {
										modelValue: r.value.dense,
										"onUpdate:modelValue": t[12] ||= (e) => r.value.dense = e,
										label: "Dense"
									}, null, 8, ["modelValue"]),
									T(M(B), {
										modelValue: r.value[M(n).ItemAligned],
										"onUpdate:modelValue": t[13] ||= (e) => r.value[M(n).ItemAligned] = e,
										label: "Item Aligned"
									}, null, 8, ["modelValue"])
								])]),
								_: 1
							})
						]),
						_: 1
					});
				};
			}
		})
	},
	__name: "HPropertyPanel",
	setup(e) {
		let { isInformationPanel: n, currentSchema: r, currentPanel: i } = _e(U()), a = he("info"), o = he("display");
		return (e, s) => {
			let c = _, l = te, u = h, d = v, f = ee, p = t;
			return M(n) ? (D(), x(p, { key: 0 }, {
				default: N(() => [
					T(l, {
						modelValue: a.value,
						"onUpdate:modelValue": s[0] ||= (e) => a.value = e,
						dense: "",
						class: "text-grey",
						"active-color": "primary",
						"indicator-color": "primary",
						align: "justify",
						"narrow-indicator": ""
					}, {
						default: N(() => [T(c, {
							name: "info",
							label: "信息"
						})]),
						_: 1
					}, 8, ["modelValue"]),
					T(u),
					T(f, {
						modelValue: a.value,
						"onUpdate:modelValue": s[1] ||= (e) => a.value = e,
						animated: ""
					}, {
						default: N(() => [T(d, { name: "info" }, {
							default: N(() => [T(M(K))]),
							_: 1
						})]),
						_: 1
					}, 8, ["modelValue"])
				]),
				_: 1
			})) : (D(), x(p, { key: 1 }, {
				default: N(() => [
					T(l, {
						modelValue: o.value,
						"onUpdate:modelValue": s[2] ||= (e) => o.value = e,
						dense: "",
						class: "text-grey",
						"active-color": "primary",
						"indicator-color": "primary",
						align: "justify",
						"narrow-indicator": ""
					}, {
						default: N(() => [T(c, {
							name: "display",
							label: "显示"
						}), T(c, {
							name: "sheet",
							label: "表单"
						})]),
						_: 1
					}, 8, ["modelValue"]),
					T(u),
					T(f, {
						modelValue: o.value,
						"onUpdate:modelValue": s[3] ||= (e) => o.value = e,
						animated: ""
					}, {
						default: N(() => [T(d, {
							name: "display",
							class: "q-pa-none"
						}, {
							default: N(() => [(D(), x(me(M(i)), { schema: M(r) }, null, 8, ["schema"]))]),
							_: 1
						}), T(d, {
							name: "sheet",
							class: "q-pa-none"
						}, {
							default: N(() => [T(M(qe))]),
							_: 1
						})]),
						_: 1
					}, 8, ["modelValue"])
				]),
				_: 1
			}));
		};
	}
}), rt = E({
	name: "HWidgetPanel",
	components: { Draggable: H },
	setup() {
		let e = z, t = U(), n = (e) => R.create(e);
		return {
			widgetGroups: e,
			cloneWidget: n,
			addWidget: (e) => {
				let r = n(e);
				t.addElement(r);
			}
		};
	}
}), it = { class: "widget-list" }, at = { class: "widget-title" }, ot = ["onClick"], st = { class: "widget-body" };
function ct(e, t, n, r, i, a) {
	let o = c, s = A("draggable");
	return D(), S("div", it, [(D(!0), S(oe, null, pe(e.widgetGroups, (t, n) => (D(), S("div", { key: n }, [C("div", at, j(t.title), 1), T(s, {
		modelValue: t.list,
		"onUpdate:modelValue": (e) => t.list = e,
		"item-key": "schemaName",
		draggable: ".widget-item",
		sort: !1,
		group: {
			name: "widgetGroup",
			pull: "clone",
			put: !1
		},
		clone: e.cloneWidget
	}, {
		item: N(({ element: t }) => [C("div", {
			class: "widget-item",
			onClick: (n) => e.addWidget(t)
		}, [C("div", st, [T(o, { name: t.icon }, null, 8, ["name"]), w(" " + j(t.title), 1)])], 8, ot)]),
		_: 1
	}, 8, [
		"modelValue",
		"onUpdate:modelValue",
		"clone"
	])]))), 128))]);
}
var lt = /* @__PURE__ */ G(rt, [["render", ct], ["__scopeId", "data-v-ae3d4bd2"]]), ut = E({
	name: "HDynamicForms",
	components: {
		HWidgetPanel: lt,
		HPropertyPanel: nt,
		HCanvasContainer: Fe,
		HFormPreviewDialog: X,
		HFormUploadDialog: q
	},
	props: {
		instance: {
			type: Object,
			required: !0
		},
		title: {
			type: String,
			default: "Dante Cloud Form Designer"
		},
		container: {
			type: Boolean,
			default: !1
		},
		height: {
			type: String,
			default: "90vh"
		},
		item: {
			type: Object,
			default: () => ({})
		}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = O(!1), r = O(!1), i = O(!1), a = O(!1), o = W(), s = U();
		return ge(() => e.item, (t) => {
			o.init(e.instance), s.loading(t);
		}, {
			deep: !0,
			immediate: !0
		}), ge(() => s.isClosed, (e) => {
			e && t("close");
		}), fe(() => {
			o.$reset(), s.$reset();
		}), {
			leftDrawerOpen: n,
			toggleLeftDrawer() {
				n.value = !n.value;
			},
			rightDrawerOpen: r,
			toggleRightDrawer() {
				r.value = !r.value;
			},
			openPreview: i,
			openUpload: a
		};
	}
});
//#endregion
//#region src/components/HDynamicForms.vue
function dt(t, n, r, i, o, c) {
	let l = e, d = ie, f = re, p = s, m = lt, h = a, g = nt, _ = Fe, v = X, ee = q, y = u;
	return D(), x(y, {
		view: "lHr LpR lfr",
		container: t.container,
		class: "bg-grey-2",
		style: de(`height: ${t.height}`)
	}, {
		default: N(() => [
			T(p, {
				bordered: "",
				class: "text-primary bg-white"
			}, {
				default: N(() => [T(f, null, {
					default: N(() => [
						T(l, {
							dense: "",
							flat: "",
							round: "",
							icon: "menu",
							onClick: n[0] ||= (e) => t.leftDrawerOpen = !t.leftDrawerOpen
						}),
						T(d, null, {
							default: N(() => [w(j(t.title), 1)]),
							_: 1
						}),
						T(l, {
							flat: "",
							round: "",
							dense: "",
							icon: "mdi-eye",
							class: "q-mr-xs",
							onClick: n[1] ||= (e) => t.openPreview = !0
						}),
						T(l, {
							flat: "",
							round: "",
							dense: "",
							icon: "mdi-cloud-upload",
							onClick: n[2] ||= (e) => t.openUpload = !0
						})
					]),
					_: 1
				})]),
				_: 1
			}),
			T(h, {
				"show-if-above": "",
				modelValue: t.leftDrawerOpen,
				"onUpdate:modelValue": n[3] ||= (e) => t.leftDrawerOpen = e,
				side: "left",
				behavior: "desktop",
				bordered: ""
			}, {
				default: N(() => [T(m)]),
				_: 1
			}, 8, ["modelValue"]),
			T(h, {
				"show-if-above": "",
				modelValue: t.rightDrawerOpen,
				"onUpdate:modelValue": n[4] ||= (e) => t.rightDrawerOpen = e,
				side: "right",
				behavior: "desktop",
				bordered: ""
			}, {
				default: N(() => [T(g)]),
				_: 1
			}, 8, ["modelValue"]),
			T(_),
			T(v, {
				modelValue: t.openPreview,
				"onUpdate:modelValue": n[5] ||= (e) => t.openPreview = e
			}, null, 8, ["modelValue"]),
			T(ee, {
				modelValue: t.openUpload,
				"onUpdate:modelValue": n[6] ||= (e) => t.openUpload = e
			}, null, 8, ["modelValue"])
		]),
		_: 1
	}, 8, ["container", "style"]);
}
var $ = /* @__PURE__ */ G(ut, [["render", dt]]);
//#endregion
//#region src/components/index.ts
$.install = (e) => {
	e.component($.name, $);
};
//#endregion
//#region src/index.ts
var ft = [$], pt = { install: (e) => {
	ft.map((t) => e.component(t.name, t));
} };
//#endregion
export { Q as Attributes, R as ElementUtils, $ as HDynamicForms, I as Swal, z as WIDGET_DEFINITIONS, pt as default, L as toast };
