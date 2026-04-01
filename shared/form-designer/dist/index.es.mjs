import { QBtn as e, QCard as t, QCardActions as n, QCardSection as r, QDialog as i, QDrawer as a, QExpansionItem as o, QHeader as s, QIcon as c, QInput as l, QLayout as u, QList as d, QPage as f, QPageContainer as p, QPopupEdit as m, QSeparator as h, QSpace as g, QTab as _, QTabPanel as v, QTabPanels as ee, QTable as y, QTabs as te, QTd as ne, QToolbar as re, QToolbarTitle as ie, QTr as ae } from "quasar";
import { Fragment as oe, computed as b, createBlock as x, createCommentVNode as se, createElementBlock as S, createElementVNode as C, createSlots as ce, createTextVNode as w, createVNode as T, defineComponent as E, mergeProps as le, normalizeClass as ue, normalizeStyle as de, onUnmounted as fe, openBlock as D, ref as O, renderList as pe, renderSlot as k, resolveComponent as A, resolveDynamicComponent as me, shallowRef as he, toDisplayString as j, unref as M, watch as N, withCtx as P } from "vue";
import { defineStore as F, storeToRefs as ge } from "pinia";
import { isEmpty as I, remove as _e } from "lodash-es";
import { Swal as ve, Swal as ye, toast as be, toast as xe } from "@herodotus/core";
import { ElementUtils as L, HRendererEngine as Se, HRendererForm as Ce, WIDGET_DEFINITIONS as R } from "@herodotus-cloud/form-engine";
import { HSwitch as z, HTextField as B } from "@herodotus-cloud/components";
import V from "vuedraggable";
//#region src/stores/canvas.ts
var H = F("FormDesignerCanvas", {
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
			return (t) => !I(e.selectedElement) && e.selectedElement.id ? e.selectedElement.config.renderKey === t : !1;
		},
		isEmptyCanvas: (e) => I(e.canvasElements),
		getElements: (e) => e.canvasElements,
		currentSchema() {
			return !I(this.selectedElement) && !I(this.selectedElement.schema) ? this.selectedElement.schema : {};
		},
		currentConfig() {
			return !I(this.selectedElement) && !I(this.selectedElement.config) ? this.selectedElement.config : {};
		},
		currentPanel() {
			return !I(this.currentConfig) && !I(this.currentConfig.panel) ? this.currentConfig.panel : "INFORMATION_PANEL";
		},
		isInformationPanel() {
			return this.currentPanel === "INFORMATION_PANEL";
		},
		condition() {
			return I(this.sheet.condition) && (this.sheet.condition = {
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
			I(this.canvasElements) || this.selectElement(this.canvasElements[0]);
		},
		loading(e) {
			I(e.modeler) || (this.canvasElements = e.modeler.elements, this.sheet = e.modeler.sheet), this.id = e.id, this.name = e.name, this.activityName = e.activityName, this.selectFirstElement();
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
			!I(this.canvasElements) && e.id && (_e(this.canvasElements, (t) => t.id === e.id), this.selectFirstElement());
		}
	}
}), U = F("FormDesignerResources", {
	state: () => ({ resources: {} }),
	getters: { dynamicForm: (e) => e.resources.dynamicForm() },
	actions: { init(e) {
		this.resources = e;
	} }
}), we = E({
	name: "HFormInformation",
	setup() {
		let { id: e, name: t, activityName: n } = H(), r = O(null), i = O(null);
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
}), W = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
//#endregion
//#region src/components/canvas-toolbar/HFormInformation.vue
function Te(e, t, n, r, i, a) {
	let o = l, s = d;
	return D(), x(s, null, {
		default: P(() => [
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
var G = /* @__PURE__ */ W(we, [["render", Te]]), Ee = E({
	name: "HFormUploadDialog",
	components: { HFormInformation: G },
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
		}), r = O(null), i = U(), a = H(), o = () => {
			ye.fire({
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
						n.value = !1, xe.error("保存失败！");
					});
				}
			},
			infoRef: r
		};
	}
});
//#endregion
//#region src/components/canvas-toolbar/HFormUploadDialog.vue
function De(a, o, s, c, l, u) {
	let d = g, f = e, p = r, m = G, h = n, _ = t, v = i;
	return D(), x(v, {
		modelValue: a.isOpen,
		"onUpdate:modelValue": o[3] ||= (e) => a.isOpen = e,
		persistent: "",
		"transition-show": "scale",
		"transition-hide": "scale"
	}, {
		default: P(() => [T(_, { style: { width: "20vw" } }, {
			default: P(() => [
				T(p, { class: "row items-center q-pb-none" }, {
					default: P(() => [
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
					default: P(() => [T(m, { ref: "infoRef" }, null, 512)]),
					_: 1
				}),
				T(h, { align: "right" }, {
					default: P(() => [T(f, {
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
var K = /* @__PURE__ */ W(Ee, [["render", De]]), Oe = E({ name: "HCanvasLayout" });
//#endregion
//#region src/components/library/HCanvasLayout.vue
function ke(e, n, r, i, a, o) {
	let s = t, c = f, l = p;
	return D(), x(l, null, {
		default: P(() => [T(c, null, {
			default: P(() => [T(s, { class: "q-ma-md" }, {
				default: P(() => [k(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		})]),
		_: 3
	});
}
var q = /* @__PURE__ */ W(Oe, [["render", ke]]), Ae = E({
	name: "HExpansionItem",
	props: { headerClass: {
		type: String,
		default: "text-primary"
	} }
});
//#endregion
//#region src/components/library/HExpansionItem.vue
function je(e, n, i, a, s, c) {
	let l = r, u = t, d = o;
	return D(), x(d, le({
		"expand-separator": "",
		"header-class": e.headerClass
	}, e.$attrs), {
		default: P(() => [T(u, null, {
			default: P(() => [T(l, null, {
				default: P(() => [k(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		})]),
		_: 3
	}, 16, ["header-class"]);
}
var J = /* @__PURE__ */ W(Ae, [["render", je]]), Me = E({
	name: "HFormPreviewDialog",
	components: { HRendererForm: Ce },
	props: { modelValue: {
		type: Boolean,
		default: !1
	} },
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let { canvasElements: n } = H(), r = b({
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
function Ne(a, o, s, c, l, u) {
	let d = g, f = e, p = r, m = A("h-renderer-form"), h = n, _ = t, v = i;
	return D(), x(v, {
		modelValue: a.isOpen,
		"onUpdate:modelValue": o[3] ||= (e) => a.isOpen = e,
		persistent: "",
		"transition-show": "scale",
		"transition-hide": "scale"
	}, {
		default: P(() => [T(_, null, {
			default: P(() => [
				T(p, { class: "row items-center q-pb-none" }, {
					default: P(() => [
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
					default: P(() => [T(m, {
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
					default: P(() => [T(f, {
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
var Y = /* @__PURE__ */ W(Me, [["render", Ne]]), Pe = E({
	name: "HCanvasElement",
	components: { HRendererEngine: Se },
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
		let t = O(!1), n = H();
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
function Fe(r, i, a, o, s, c) {
	let l = A("h-renderer-engine"), u = e, d = n, f = t;
	return D(), x(f, {
		class: ue([r.isSelected && !r.isHover ? "canvas-item-selected" : "canvas-item"]),
		onMouseover: i[0] ||= (e) => r.isHover = !0,
		onMouseleave: i[1] ||= (e) => r.isHover = !1
	}, {
		default: P(() => [T(l, { schemas: r.schemas }, null, 8, ["schemas"]), r.isHover ? (D(), x(d, {
			key: 0,
			class: "justify-end q-pa-none"
		}, {
			default: P(() => [
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
var X = /* @__PURE__ */ W(Pe, [["render", Fe], ["__scopeId", "data-v-8129af03"]]), Ie = E({
	name: "HCanvasContainer",
	components: {
		Draggable: V,
		HCanvasElement: X,
		HCanvasLayout: q
	},
	setup(e) {
		let t = H(), { canvasElements: n } = t;
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
function Le(e, t, n, r, i, a) {
	let o = X, s = A("draggable"), c = q;
	return D(), x(c, null, {
		default: P(() => [T(s, {
			"item-key": "id",
			list: e.canvasElements,
			animation: 300,
			group: "widgetGroup",
			class: "canvas-container"
		}, ce({
			item: P(({ element: t }) => [(D(), x(o, {
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
			fn: P(() => [t[0] ||= C("div", { class: "row text-center canvas-container" }, [C("div", { class: "col-12 self-center text-h6 text-weight-medium text-grey-5" }, " 从左侧拖拽或点击来添加字段 ")], -1)]),
			key: "0"
		} : void 0]), 1032, ["list"])]),
		_: 1
	});
}
var Z = /* @__PURE__ */ W(Ie, [["render", Le], ["__scopeId", "data-v-3e653093"]]), Q = {
	HideBottomSpace: "hide-bottom-space",
	ItemAligned: "item-aligned"
}, Re = { class: "q-gutter-y-sm column" }, ze = { class: "q-gutter-y-sm column" }, Be = /* @__PURE__ */ E({
	name: "HDatePanel",
	components: {
		HExpansionItem: J,
		HSwitch: z,
		HTextField: B
	},
	__name: "HDatePanel",
	props: { schema: {} },
	setup(e) {
		let t = e, n = Q, r = b(() => t.schema.attrs), i = b(() => t.schema.models);
		return (e, t) => {
			let a = d;
			return D(), x(a, { bordered: "" }, {
				default: P(() => [
					T(M(J), {
						icon: "mdi-information",
						label: "常规",
						"default-opened": ""
					}, {
						default: P(() => [T(M(B), {
							modelValue: i.value.modelValue.name,
							"onUpdate:modelValue": t[0] ||= (e) => i.value.modelValue.name = e,
							dense: "",
							label: "名称"
						}, null, 8, ["modelValue"]), T(M(B), {
							modelValue: r.value.label,
							"onUpdate:modelValue": t[1] ||= (e) => r.value.label = e,
							dense: "",
							label: "Label"
						}, null, 8, ["modelValue"])]),
						_: 1
					}),
					T(M(J), {
						icon: "mdi-eject-circle",
						label: "状态"
					}, {
						default: P(() => [C("div", Re, [T(M(z), {
							modelValue: r.value.disable,
							"onUpdate:modelValue": t[2] ||= (e) => r.value.disable = e,
							label: "Disable"
						}, null, 8, ["modelValue"]), T(M(z), {
							modelValue: r.value.readonly,
							"onUpdate:modelValue": t[3] ||= (e) => r.value.readonly = e,
							label: "Readonly"
						}, null, 8, ["modelValue"])])]),
						_: 1
					}),
					T(M(J), {
						icon: "mdi-image-edit",
						label: "外观"
					}, {
						default: P(() => [C("div", ze, [
							T(M(z), {
								modelValue: r.value.dark,
								"onUpdate:modelValue": t[4] ||= (e) => r.value.dark = e,
								label: "Dark"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.filled,
								"onUpdate:modelValue": t[5] ||= (e) => r.value.filled = e,
								label: "Filled"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.outlined,
								"onUpdate:modelValue": t[6] ||= (e) => r.value.outlined = e,
								label: "Outlined"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.borderless,
								"onUpdate:modelValue": t[7] ||= (e) => r.value.borderless = e,
								label: "Borderless"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.standout,
								"onUpdate:modelValue": t[8] ||= (e) => r.value.standout = e,
								label: "Standout"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value[M(n).HideBottomSpace],
								"onUpdate:modelValue": t[9] ||= (e) => r.value[M(n).HideBottomSpace] = e,
								label: "Hide Bottom Space"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.rounded,
								"onUpdate:modelValue": t[10] ||= (e) => r.value.rounded = e,
								label: "Rounded"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.square,
								"onUpdate:modelValue": t[11] ||= (e) => r.value.square = e,
								label: "Square"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.dense,
								"onUpdate:modelValue": t[12] ||= (e) => r.value.dense = e,
								label: "Dense"
							}, null, 8, ["modelValue"]),
							T(M(z), {
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
}), Ve = { class: "q-gutter-y-sm column" }, He = { class: "q-gutter-y-sm column" }, Ue = /* @__PURE__ */ E({
	name: "HPasswordPanel",
	components: {
		HExpansionItem: J,
		HSwitch: z,
		HTextField: B
	},
	__name: "HPasswordPanel",
	props: { schema: {} },
	setup(e) {
		let t = e, n = Q, r = b(() => t.schema.attrs), i = b(() => t.schema.models);
		return (e, t) => {
			let a = d;
			return D(), x(a, { bordered: "" }, {
				default: P(() => [
					T(M(J), {
						icon: "mdi-information",
						label: "常规",
						"default-opened": ""
					}, {
						default: P(() => [T(M(B), {
							modelValue: i.value.modelValue.name,
							"onUpdate:modelValue": t[0] ||= (e) => i.value.modelValue.name = e,
							dense: "",
							label: "名称"
						}, null, 8, ["modelValue"]), T(M(B), {
							modelValue: r.value.label,
							"onUpdate:modelValue": t[1] ||= (e) => r.value.label = e,
							dense: "",
							label: "Label"
						}, null, 8, ["modelValue"])]),
						_: 1
					}),
					T(M(J), {
						icon: "mdi-eject-circle",
						label: "状态"
					}, {
						default: P(() => [C("div", Ve, [T(M(z), {
							modelValue: r.value.disable,
							"onUpdate:modelValue": t[2] ||= (e) => r.value.disable = e,
							label: "Disable"
						}, null, 8, ["modelValue"]), T(M(z), {
							modelValue: r.value.readonly,
							"onUpdate:modelValue": t[3] ||= (e) => r.value.readonly = e,
							label: "Readonly"
						}, null, 8, ["modelValue"])])]),
						_: 1
					}),
					T(M(J), {
						icon: "mdi-image-edit",
						label: "外观"
					}, {
						default: P(() => [C("div", He, [
							T(M(z), {
								modelValue: r.value.dark,
								"onUpdate:modelValue": t[4] ||= (e) => r.value.dark = e,
								label: "Dark"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.filled,
								"onUpdate:modelValue": t[5] ||= (e) => r.value.filled = e,
								label: "Filled"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.outlined,
								"onUpdate:modelValue": t[6] ||= (e) => r.value.outlined = e,
								label: "Outlined"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.borderless,
								"onUpdate:modelValue": t[7] ||= (e) => r.value.borderless = e,
								label: "Borderless"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.standout,
								"onUpdate:modelValue": t[8] ||= (e) => r.value.standout = e,
								label: "Standout"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value[M(n).HideBottomSpace],
								"onUpdate:modelValue": t[9] ||= (e) => r.value[M(n).HideBottomSpace] = e,
								label: "Hide Bottom Space"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.rounded,
								"onUpdate:modelValue": t[10] ||= (e) => r.value.rounded = e,
								label: "Rounded"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.square,
								"onUpdate:modelValue": t[11] ||= (e) => r.value.square = e,
								label: "Square"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.dense,
								"onUpdate:modelValue": t[12] ||= (e) => r.value.dense = e,
								label: "Dense"
							}, null, 8, ["modelValue"]),
							T(M(z), {
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
}), We = E({
	name: "HConditionVariable",
	components: {
		HExpansionItem: J,
		HTextField: B
	},
	setup(e) {
		let { condition: t } = H(), n = [{
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
function Ge(e, t, n, r, i, a) {
	let o = A("h-text-field"), s = l, c = m, u = ne, d = ae, f = y, p = J;
	return D(), x(p, {
		icon: "mdi-variable",
		label: "流程变量"
	}, {
		default: P(() => [T(o, {
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
			body: P((t) => [T(d, { props: t }, {
				default: P(() => [T(u, {
					key: "label",
					props: t
				}, {
					default: P(() => [w(j(t.row.label) + " ", 1), T(c, {
						modelValue: t.row.label,
						"onUpdate:modelValue": [(e) => t.row.label = e, e.onModify],
						title: "修改标签",
						buttons: "",
						"label-set": "确定",
						"label-cancel": "取消"
					}, {
						default: P((e) => [T(s, {
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
					default: P(() => [w(j(t.row.value), 1)]),
					_: 2
				}, 1032, ["props"])]),
				_: 2
			}, 1032, ["props"])]),
			_: 1
		}, 8, ["rows", "columns"])]),
		_: 1
	});
}
var Ke = /* @__PURE__ */ W(We, [["render", Ge]]), qe = E({
	name: "HSheetPanel",
	components: { HConditionVariable: Ke }
});
//#endregion
//#region src/components/property-panels/HSheetPanel.vue
function Je(e, t, n, r, i, a) {
	let o = Ke, s = d;
	return D(), x(s, { bordered: "" }, {
		default: P(() => [T(o)]),
		_: 1
	});
}
var Ye = /* @__PURE__ */ W(qe, [["render", Je]]), Xe = { class: "q-gutter-y-sm column" }, Ze = { class: "q-gutter-y-sm column" }, Qe = /* @__PURE__ */ E({
	name: "HTextareaPanel",
	components: {
		HExpansionItem: J,
		HSwitch: z,
		HTextField: B
	},
	__name: "HTextareaPanel",
	props: { schema: {} },
	setup(e) {
		let t = e, n = Q, r = b(() => t.schema.attrs), i = b(() => t.schema.models);
		return (e, t) => {
			let a = d;
			return D(), x(a, { bordered: "" }, {
				default: P(() => [
					T(M(J), {
						icon: "mdi-information",
						label: "常规",
						"default-opened": ""
					}, {
						default: P(() => [T(M(B), {
							modelValue: i.value.modelValue.name,
							"onUpdate:modelValue": t[0] ||= (e) => i.value.modelValue.name = e,
							dense: "",
							label: "名称"
						}, null, 8, ["modelValue"]), T(M(B), {
							modelValue: r.value.label,
							"onUpdate:modelValue": t[1] ||= (e) => r.value.label = e,
							dense: "",
							label: "Label"
						}, null, 8, ["modelValue"])]),
						_: 1
					}),
					T(M(J), {
						icon: "mdi-eject-circle",
						label: "状态"
					}, {
						default: P(() => [C("div", Xe, [T(M(z), {
							modelValue: r.value.disable,
							"onUpdate:modelValue": t[2] ||= (e) => r.value.disable = e,
							label: "Disable"
						}, null, 8, ["modelValue"]), T(M(z), {
							modelValue: r.value.readonly,
							"onUpdate:modelValue": t[3] ||= (e) => r.value.readonly = e,
							label: "Readonly"
						}, null, 8, ["modelValue"])])]),
						_: 1
					}),
					T(M(J), {
						icon: "mdi-image-edit",
						label: "外观"
					}, {
						default: P(() => [C("div", Ze, [
							T(M(z), {
								modelValue: r.value.dark,
								"onUpdate:modelValue": t[4] ||= (e) => r.value.dark = e,
								label: "Dark"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.filled,
								"onUpdate:modelValue": t[5] ||= (e) => r.value.filled = e,
								label: "Filled"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.outlined,
								"onUpdate:modelValue": t[6] ||= (e) => r.value.outlined = e,
								label: "Outlined"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.borderless,
								"onUpdate:modelValue": t[7] ||= (e) => r.value.borderless = e,
								label: "Borderless"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.standout,
								"onUpdate:modelValue": t[8] ||= (e) => r.value.standout = e,
								label: "Standout"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value[M(n).HideBottomSpace],
								"onUpdate:modelValue": t[9] ||= (e) => r.value[M(n).HideBottomSpace] = e,
								label: "Hide Bottom Space"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.rounded,
								"onUpdate:modelValue": t[10] ||= (e) => r.value.rounded = e,
								label: "Rounded"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.square,
								"onUpdate:modelValue": t[11] ||= (e) => r.value.square = e,
								label: "Square"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.dense,
								"onUpdate:modelValue": t[12] ||= (e) => r.value.dense = e,
								label: "Dense"
							}, null, 8, ["modelValue"]),
							T(M(z), {
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
}), $e = { class: "q-gutter-y-sm column" }, et = { class: "q-gutter-y-sm column" }, tt = /* @__PURE__ */ E({
	name: "HTextFieldPanel",
	components: {
		HExpansionItem: J,
		HSwitch: z,
		HTextField: B
	},
	__name: "HTextFieldPanel",
	props: { schema: {} },
	setup(e) {
		let t = e, n = Q, r = b(() => t.schema.attrs), i = b(() => t.schema.models);
		return (e, t) => {
			let a = d;
			return D(), x(a, { bordered: "" }, {
				default: P(() => [
					T(M(J), {
						icon: "mdi-information",
						label: "常规",
						"default-opened": ""
					}, {
						default: P(() => [T(M(B), {
							modelValue: i.value.modelValue.name,
							"onUpdate:modelValue": t[0] ||= (e) => i.value.modelValue.name = e,
							dense: "",
							label: "名称"
						}, null, 8, ["modelValue"]), T(M(B), {
							modelValue: r.value.label,
							"onUpdate:modelValue": t[1] ||= (e) => r.value.label = e,
							dense: "",
							label: "Label"
						}, null, 8, ["modelValue"])]),
						_: 1
					}),
					T(M(J), {
						icon: "mdi-eject-circle",
						label: "状态"
					}, {
						default: P(() => [C("div", $e, [T(M(z), {
							modelValue: r.value.disable,
							"onUpdate:modelValue": t[2] ||= (e) => r.value.disable = e,
							label: "Disable"
						}, null, 8, ["modelValue"]), T(M(z), {
							modelValue: r.value.readonly,
							"onUpdate:modelValue": t[3] ||= (e) => r.value.readonly = e,
							label: "Readonly"
						}, null, 8, ["modelValue"])])]),
						_: 1
					}),
					T(M(J), {
						icon: "mdi-image-edit",
						label: "外观"
					}, {
						default: P(() => [C("div", et, [
							T(M(z), {
								modelValue: r.value.dark,
								"onUpdate:modelValue": t[4] ||= (e) => r.value.dark = e,
								label: "Dark"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.filled,
								"onUpdate:modelValue": t[5] ||= (e) => r.value.filled = e,
								label: "Filled"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.outlined,
								"onUpdate:modelValue": t[6] ||= (e) => r.value.outlined = e,
								label: "Outlined"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.borderless,
								"onUpdate:modelValue": t[7] ||= (e) => r.value.borderless = e,
								label: "Borderless"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.standout,
								"onUpdate:modelValue": t[8] ||= (e) => r.value.standout = e,
								label: "Standout"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value[M(n).HideBottomSpace],
								"onUpdate:modelValue": t[9] ||= (e) => r.value[M(n).HideBottomSpace] = e,
								label: "Hide Bottom Space"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.rounded,
								"onUpdate:modelValue": t[10] ||= (e) => r.value.rounded = e,
								label: "Rounded"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.square,
								"onUpdate:modelValue": t[11] ||= (e) => r.value.square = e,
								label: "Square"
							}, null, 8, ["modelValue"]),
							T(M(z), {
								modelValue: r.value.dense,
								"onUpdate:modelValue": t[12] ||= (e) => r.value.dense = e,
								label: "Dense"
							}, null, 8, ["modelValue"]),
							T(M(z), {
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
}), nt = { class: "q-gutter-y-sm column" }, rt = { class: "q-gutter-y-sm column" }, it = /* @__PURE__ */ E({
	name: "HGeneratorLayout",
	components: {
		HSheetPanel: Ye,
		HFormInformation: G,
		DATE_PICKER: Be,
		PASSWORD: Ue,
		TEXT_AREA: Qe,
		TEXT_FIELD: tt,
		TIME_PICKER: /* @__PURE__ */ E({
			name: "HTimePanel",
			components: {
				HExpansionItem: J,
				HSwitch: z,
				HTextField: B
			},
			__name: "HTimePanel",
			props: { schema: {} },
			setup(e) {
				let t = e, n = Q, r = b(() => t.schema.attrs), i = b(() => t.schema.models);
				return (e, t) => {
					let a = d;
					return D(), x(a, { bordered: "" }, {
						default: P(() => [
							T(M(J), {
								icon: "mdi-information",
								label: "常规",
								"default-opened": ""
							}, {
								default: P(() => [T(M(B), {
									modelValue: i.value.modelValue.name,
									"onUpdate:modelValue": t[0] ||= (e) => i.value.modelValue.name = e,
									dense: "",
									label: "名称"
								}, null, 8, ["modelValue"]), T(M(B), {
									modelValue: r.value.label,
									"onUpdate:modelValue": t[1] ||= (e) => r.value.label = e,
									dense: "",
									label: "Label"
								}, null, 8, ["modelValue"])]),
								_: 1
							}),
							T(M(J), {
								icon: "mdi-eject-circle",
								label: "状态"
							}, {
								default: P(() => [C("div", nt, [T(M(z), {
									modelValue: r.value.disable,
									"onUpdate:modelValue": t[2] ||= (e) => r.value.disable = e,
									label: "Disable"
								}, null, 8, ["modelValue"]), T(M(z), {
									modelValue: r.value.readonly,
									"onUpdate:modelValue": t[3] ||= (e) => r.value.readonly = e,
									label: "Readonly"
								}, null, 8, ["modelValue"])])]),
								_: 1
							}),
							T(M(J), {
								icon: "mdi-image-edit",
								label: "外观"
							}, {
								default: P(() => [C("div", rt, [
									T(M(z), {
										modelValue: r.value.dark,
										"onUpdate:modelValue": t[4] ||= (e) => r.value.dark = e,
										label: "Dark"
									}, null, 8, ["modelValue"]),
									T(M(z), {
										modelValue: r.value.filled,
										"onUpdate:modelValue": t[5] ||= (e) => r.value.filled = e,
										label: "Filled"
									}, null, 8, ["modelValue"]),
									T(M(z), {
										modelValue: r.value.outlined,
										"onUpdate:modelValue": t[6] ||= (e) => r.value.outlined = e,
										label: "Outlined"
									}, null, 8, ["modelValue"]),
									T(M(z), {
										modelValue: r.value.borderless,
										"onUpdate:modelValue": t[7] ||= (e) => r.value.borderless = e,
										label: "Borderless"
									}, null, 8, ["modelValue"]),
									T(M(z), {
										modelValue: r.value.standout,
										"onUpdate:modelValue": t[8] ||= (e) => r.value.standout = e,
										label: "Standout"
									}, null, 8, ["modelValue"]),
									T(M(z), {
										modelValue: r.value[M(n).HideBottomSpace],
										"onUpdate:modelValue": t[9] ||= (e) => r.value[M(n).HideBottomSpace] = e,
										label: "Hide Bottom Space"
									}, null, 8, ["modelValue"]),
									T(M(z), {
										modelValue: r.value.rounded,
										"onUpdate:modelValue": t[10] ||= (e) => r.value.rounded = e,
										label: "Rounded"
									}, null, 8, ["modelValue"]),
									T(M(z), {
										modelValue: r.value.square,
										"onUpdate:modelValue": t[11] ||= (e) => r.value.square = e,
										label: "Square"
									}, null, 8, ["modelValue"]),
									T(M(z), {
										modelValue: r.value.dense,
										"onUpdate:modelValue": t[12] ||= (e) => r.value.dense = e,
										label: "Dense"
									}, null, 8, ["modelValue"]),
									T(M(z), {
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
		let { isInformationPanel: n, currentSchema: r, currentPanel: i } = ge(H()), a = he("info"), o = he("display");
		return (e, s) => {
			let c = _, l = te, u = h, d = v, f = ee, p = t;
			return M(n) ? (D(), x(p, { key: 0 }, {
				default: P(() => [
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
						default: P(() => [T(c, {
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
						default: P(() => [T(d, { name: "info" }, {
							default: P(() => [T(M(G))]),
							_: 1
						})]),
						_: 1
					}, 8, ["modelValue"])
				]),
				_: 1
			})) : (D(), x(p, { key: 1 }, {
				default: P(() => [
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
						default: P(() => [T(c, {
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
						default: P(() => [T(d, {
							name: "display",
							class: "q-pa-none"
						}, {
							default: P(() => [(D(), x(me(M(i)), { schema: M(r) }, null, 8, ["schema"]))]),
							_: 1
						}), T(d, {
							name: "sheet",
							class: "q-pa-none"
						}, {
							default: P(() => [T(M(Ye))]),
							_: 1
						})]),
						_: 1
					}, 8, ["modelValue"])
				]),
				_: 1
			}));
		};
	}
}), at = E({
	name: "HWidgetPanel",
	components: { Draggable: V },
	setup() {
		let e = R, t = H(), n = (e) => L.create(e);
		return {
			widgetGroups: e,
			cloneWidget: n,
			addWidget: (e) => {
				let r = n(e);
				t.addElement(r);
			}
		};
	}
}), ot = { class: "widget-list" }, st = { class: "widget-title" }, ct = ["onClick"], lt = { class: "widget-body" };
function ut(e, t, n, r, i, a) {
	let o = c, s = A("draggable");
	return D(), S("div", ot, [(D(!0), S(oe, null, pe(e.widgetGroups, (t, n) => (D(), S("div", { key: n }, [C("div", st, j(t.title), 1), T(s, {
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
		item: P(({ element: t }) => [C("div", {
			class: "widget-item",
			onClick: (n) => e.addWidget(t)
		}, [C("div", lt, [T(o, { name: t.icon }, null, 8, ["name"]), w(" " + j(t.title), 1)])], 8, ct)]),
		_: 1
	}, 8, [
		"modelValue",
		"onUpdate:modelValue",
		"clone"
	])]))), 128))]);
}
var dt = /* @__PURE__ */ W(at, [["render", ut], ["__scopeId", "data-v-ae3d4bd2"]]), ft = E({
	name: "HDynamicForms",
	components: {
		HWidgetPanel: dt,
		HPropertyPanel: it,
		HCanvasContainer: Z,
		HFormPreviewDialog: Y,
		HFormUploadDialog: K
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
		let n = O(!1), r = O(!1), i = O(!1), a = O(!1), o = U(), s = H();
		return N(() => e.item, (t) => {
			o.init(e.instance), s.loading(t);
		}, {
			deep: !0,
			immediate: !0
		}), N(() => s.isClosed, (e) => {
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
function pt(t, n, r, i, o, c) {
	let l = e, d = ie, f = re, p = s, m = dt, h = a, g = it, _ = Z, v = Y, ee = K, y = u;
	return D(), x(y, {
		view: "lHr LpR lfr",
		container: t.container,
		class: "bg-grey-2",
		style: de(`height: ${t.height}`)
	}, {
		default: P(() => [
			T(p, {
				bordered: "",
				class: "text-primary bg-white"
			}, {
				default: P(() => [T(f, null, {
					default: P(() => [
						T(l, {
							dense: "",
							flat: "",
							round: "",
							icon: "menu",
							onClick: n[0] ||= (e) => t.leftDrawerOpen = !t.leftDrawerOpen
						}),
						T(d, null, {
							default: P(() => [w(j(t.title), 1)]),
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
				default: P(() => [T(m)]),
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
				default: P(() => [T(g)]),
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
var $ = /* @__PURE__ */ W(ft, [["render", pt]]);
//#endregion
//#region src/components/index.ts
$.install = (e) => {
	e.component($.name, $);
};
//#endregion
//#region src/index.ts
var mt = [$], ht = { install: (e) => {
	mt.map((t) => e.component(t.name, t));
} };
//#endregion
export { Q as Attributes, L as ElementUtils, $ as HDynamicForms, ve as Swal, R as WIDGET_DEFINITIONS, ht as default, be as toast };
