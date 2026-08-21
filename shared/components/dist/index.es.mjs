import { computed as e, createBlock as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, createSlots as a, createTextVNode as o, createVNode as s, defineComponent as c, guardReactiveProps as l, mergeModels as u, mergeProps as d, normalizeClass as f, normalizeProps as p, normalizeStyle as m, onBeforeMount as ee, onMounted as te, onUnmounted as ne, openBlock as h, reactive as re, ref as g, renderSlot as _, resolveDirective as ie, resolveDynamicComponent as ae, shallowRef as v, toDisplayString as y, unref as b, useModel as x, watch as S, withCtx as C, withDirectives as oe } from "vue";
import { ClosePopup as se, QBtn as w, QCard as T, QCardActions as ce, QCardSection as E, QDate as le, QDialog as ue, QIcon as D, QInnerLoading as de, QInput as O, QItem as k, QItemLabel as fe, QItemSection as A, QPagination as pe, QPopupProxy as j, QSelect as me, QSeparator as he, QSpace as ge, QSpinner as _e, QSpinnerAudio as ve, QSpinnerBall as ye, QSpinnerBars as be, QSpinnerBox as xe, QSpinnerClock as Se, QSpinnerComment as Ce, QSpinnerCube as we, QSpinnerDots as Te, QSpinnerFacebook as Ee, QSpinnerGears as De, QSpinnerGrid as Oe, QSpinnerHearts as ke, QSpinnerHourglass as Ae, QSpinnerInfinity as je, QSpinnerIos as Me, QSpinnerOrbit as Ne, QSpinnerOval as Pe, QSpinnerPie as Fe, QSpinnerPuff as Ie, QSpinnerRadio as Le, QSpinnerRings as Re, QSpinnerTail as ze, QTime as Be, QToggle as Ve, QTooltip as He, QTree as Ue, Ripple as We } from "quasar";
import { moment as Ge, moment as Ke } from "@herodotus/core";
import * as qe from "@mdi/js";
import { find as Je, isEmpty as Ye, kebabCase as Xe } from "lodash-es";
import { tsParticles as Ze } from "@tsparticles/engine";
import { loadTrianglesPreset as Qe } from "@tsparticles/preset-triangles";
//#endregion
//#region src/HButton/HButton.vue
var M = /* @__PURE__ */ c({
	name: "HButton",
	components: {
		QBtn: w,
		QTooltip: He
	},
	__name: "HButton",
	props: { tooltip: { default: "" } },
	setup(e) {
		return (n, r) => (h(), t(b(w), p(l(n.$attrs)), a({
			loading: C(() => [_(n.$slots, "loading")]),
			_: 2
		}, [e.tooltip ? {
			name: "default",
			fn: C(() => [s(b(He), null, {
				default: C(() => [o(y(e.tooltip), 1)]),
				_: 1
			})]),
			key: "0"
		} : void 0]), 1040));
	}
}), N = /* @__PURE__ */ c({
	name: "HIconButton",
	components: { HButton: M },
	__name: "HIconButton",
	props: {
		color: { default: "" },
		size: { default: "" },
		dense: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (n, r) => (h(), t(M, d({
			flat: "",
			round: "",
			color: e.color,
			dense: e.dense,
			size: e.size
		}, n.$attrs), null, 16, [
			"color",
			"dense",
			"size"
		]));
	}
}), P = /* @__PURE__ */ c({
	name: "HVisibilityButton",
	components: { QIcon: D },
	__name: "HVisibilityButton",
	props: {
		modelValue: { type: Boolean },
		modelModifiers: {}
	},
	emits: ["update:modelValue"],
	setup(e) {
		let n = x(e, "modelValue");
		return (e, r) => (h(), t(b(D), {
			name: n.value ? "visibility" : "visibility_off",
			class: "cursor-pointer",
			onClick: r[0] ||= (e) => n.value = !n.value
		}, null, 8, ["name"]));
	}
});
M.install = (e) => {
	e.component(M.name, M);
}, N.install = (e) => {
	e.component(N.name, N);
}, P.install = (e) => {
	e.component(P.name, P);
};
//#endregion
//#region src/HCard/HCardTitle.vue?vue&type=script&setup=true&lang.ts
var $e = { class: "title-toolbar row items-center q-pr-sm" }, et = { class: "card-title q-my-xs q-mr-sm cursor-pointer" }, tt = /*@__PURE__*/ c({
	name: "HCardTitle",
	__name: "HCardTitle",
	props: { text: { default: "" } },
	setup(e) {
		return (t, n) => (h(), r("div", $e, [i("div", et, y(e.text), 1)]));
	}
}), nt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, F = /*#__PURE__*/ nt(tt, [["__scopeId", "data-v-9c5433ec"]]), rt = { class: "text-h6" }, it = {
	key: 0,
	class: "text-subtitle2"
}, I = /* @__PURE__ */ c({
	name: "HChartCard",
	components: {
		QCard: T,
		QCardSection: E,
		QSeparator: he
	},
	__name: "HChartCard",
	props: {
		title: {},
		subtitle: { default: "" }
	},
	setup(e) {
		return (a, o) => (h(), t(b(T), null, {
			default: C(() => [
				s(b(E), null, {
					default: C(() => [i("div", rt, y(e.title), 1), e.subtitle ? (h(), r("div", it, y(e.subtitle), 1)) : n("", !0)]),
					_: 1
				}),
				s(b(he), { inset: "" }),
				s(b(E), null, {
					default: C(() => [_(a.$slots, "default")]),
					_: 3
				})
			]),
			_: 3
		}));
	}
});
F.install = (e) => {
	e.component(F.name, F);
}, I.install = (e) => {
	e.component(I.name, I);
};
//#endregion
//#region src/HDateTime/HDateTime.vue?vue&type=script&setup=true&lang.ts
var at = { class: "row items-center justify-end" }, ot = { class: "row items-center justify-end" }, L = /* @__PURE__ */ c({
	name: "HDateTime",
	components: {
		QInput: O,
		QIcon: D,
		QPopupProxy: j,
		QTime: Be,
		QBtn: w,
		QDate: le
	},
	directives: { ClosePopup: se },
	__name: "HDateTime",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		modelModifiers: {}
	},
	emits: ["update:modelValue"],
	setup(e) {
		let n = x(e, "modelValue");
		return (e, r) => {
			let a = ie("close-popup");
			return h(), t(b(O), d({
				modelValue: n.value,
				"onUpdate:modelValue": r[2] ||= (e) => n.value = e,
				outlined: "",
				"bottom-slots": ""
			}, e.$attrs), {
				prepend: C(() => [s(b(D), {
					name: "event",
					class: "cursor-pointer"
				}, {
					default: C(() => [s(b(j), {
						cover: "",
						"transition-show": "scale",
						"transition-hide": "scale"
					}, {
						default: C(() => [s(b(le), {
							modelValue: n.value,
							"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
							mask: "YYYY-MM-DD HH:mm:ss"
						}, {
							default: C(() => [i("div", at, [oe(s(b(w), {
								label: "关闭",
								color: "primary"
							}, null, 512), [[a]])])]),
							_: 1
						}, 8, ["modelValue"])]),
						_: 1
					})]),
					_: 1
				})]),
				append: C(() => [s(b(D), {
					name: "access_time",
					class: "cursor-pointer"
				}, {
					default: C(() => [s(b(j), {
						cover: "",
						"transition-show": "scale",
						"transition-hide": "scale"
					}, {
						default: C(() => [s(b(Be), {
							modelValue: n.value,
							"onUpdate:modelValue": r[1] ||= (e) => n.value = e,
							mask: "YYYY-MM-DD HH:mm:ss",
							format24h: "",
							"with-seconds": ""
						}, {
							default: C(() => [i("div", ot, [oe(s(b(w), {
								label: "关闭",
								color: "primary"
							}, null, 512), [[a]])])]),
							_: 1
						}, 8, ["modelValue"])]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}, 16, ["modelValue"]);
		};
	}
}), st = [
	{
		text: "天",
		value: "days"
	},
	{
		text: "小时",
		value: "hours"
	},
	{
		text: "分",
		value: "minutes"
	},
	{
		text: "秒",
		value: "seconds"
	}
], ct = { DASH: "-" }, lt = {
	text: "text",
	bg: "bg"
}, R = {
	auto: "auto",
	col: "col"
}, z = (e, ...t) => e + ct.DASH + t.join(ct.DASH), ut = (e) => z(lt.text, e), dt = (e) => z(lt.bg, e), B = (e = "", t = "") => e && t ? z(R.col, e, t) : e ? z(R.col, e) : t ? z(R.col, t) : R.col, V = /* @__PURE__ */ c({
	name: "HIconSelect",
	components: {
		QSelect: me,
		QIcon: D,
		QItem: k,
		QItemSection: A,
		QItemLabel: fe
	},
	__name: "HIconSelect",
	props: {
		modelValue: {},
		modelModifiers: {}
	},
	emits: ["update:modelValue"],
	setup(e) {
		let n = x(e, "modelValue"), r = [], i = g(r);
		te(() => {
			r = Object.keys(qe).map((e) => Xe(e));
		});
		let c = (e, t, n) => {
			if (e.length < 3) {
				n();
				return;
			}
			t(() => {
				let t = e.toLowerCase();
				i.value = r.filter((e) => e.toLowerCase().match(t));
			});
		};
		return (e, r) => (h(), t(b(me), d({
			ref: "selectRef",
			modelValue: n.value,
			"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
			options: i.value,
			outlined: "",
			clearable: "",
			"use-input": "",
			"use-chips": "",
			"emit-value": "",
			"bottom-slots": "",
			"input-debounce": "300",
			"transition-show": "scale",
			"transition-hide": "scale",
			onFilter: c
		}, e.$attrs), a({
			option: C((e) => [s(b(k), p(l(e.itemProps)), {
				default: C(() => [s(b(A), { avatar: "" }, {
					default: C(() => [s(b(D), { name: e.opt }, null, 8, ["name"])]),
					_: 2
				}, 1024), s(b(A), null, {
					default: C(() => [s(b(fe), null, {
						default: C(() => [o(y(e.opt), 1)]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024)]),
				_: 2
			}, 1040)]),
			"no-option": C(() => [s(b(k), null, {
				default: C(() => [s(b(A), { class: "text-grey" }, {
					default: C(() => [...r[1] ||= [o("没有数据", -1)]]),
					_: 1
				})]),
				_: 1
			})]),
			_: 2
		}, [n.value ? {
			name: "prepend",
			fn: C(() => [s(b(D), {
				name: n.value,
				color: "primary"
			}, null, 8, ["name"])]),
			key: "0"
		} : void 0]), 1040, ["modelValue", "options"]));
	}
}), H = /* @__PURE__ */ c({
	name: "HSelect",
	components: { QSelect: me },
	__name: "HSelect",
	props: /*@__PURE__*/ u({
		optionLabel: { default: "text" },
		optionValue: { default: "value" },
		errorMessage: {}
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(n) {
		let r = n, i = x(n, "modelValue"), a = e(() => !!r.errorMessage);
		return (e, r) => (h(), t(b(me), d({
			modelValue: i.value,
			"onUpdate:modelValue": r[0] ||= (e) => i.value = e,
			"option-label": n.optionLabel,
			"option-value": n.optionValue,
			outlined: "",
			clearable: "",
			"emit-value": "",
			"map-options": "",
			"transition-show": "scale",
			"transition-hide": "scale",
			"bottom-slots": a.value,
			error: a.value,
			"error-message": n.errorMessage
		}, e.$attrs), null, 16, [
			"modelValue",
			"option-label",
			"option-value",
			"bottom-slots",
			"error",
			"error-message"
		]));
	}
}), U = /* @__PURE__ */ c({
	name: "HSwitch",
	components: { QToggle: Ve },
	__name: "HSwitch",
	props: /*@__PURE__*/ u({
		trueValue: {
			type: [
				Boolean,
				String,
				Number
			],
			default: !0
		},
		falseValue: {
			type: [
				Boolean,
				String,
				Number
			],
			default: !1
		},
		color: { default: "primary" }
	}, {
		modelValue: {
			type: [
				Boolean,
				String,
				Number
			],
			default: !1
		},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let n = x(e, "modelValue");
		return (r, i) => (h(), t(b(Ve), d({
			modelValue: n.value,
			"onUpdate:modelValue": i[0] ||= (e) => n.value = e,
			"true-value": e.trueValue,
			"false-value": e.falseValue,
			color: e.color
		}, r.$attrs), null, 16, [
			"modelValue",
			"true-value",
			"false-value",
			"color"
		]));
	}
}), ft = { class: "q-gutter-xs row q-mb-xs" }, pt = { class: "ext-body2" }, W = /* @__PURE__ */ c({
	name: "HFieldLabel",
	components: {
		QIcon: D,
		QTooltip: He
	},
	__name: "HFieldLabel",
	props: {
		required: {
			type: Boolean,
			default: !1
		},
		text: {},
		tooltip: {}
	},
	setup(e) {
		return (a, c) => (h(), r("div", ft, [
			e.required ? (h(), t(b(D), {
				key: 0,
				name: "mdi-star",
				color: "red",
				class: "q-pt-xs",
				size: "10px"
			})) : n("", !0),
			i("div", pt, y(e.text), 1),
			e.tooltip ? (h(), t(b(D), {
				key: 1,
				name: "mdi-information-variant-circle",
				color: "grey",
				size: "xs"
			}, {
				default: C(() => [s(b(He), null, {
					default: C(() => [o(y(e.tooltip), 1)]),
					_: 1
				})]),
				_: 1
			})) : n("", !0)
		]));
	}
}), G = /* @__PURE__ */ c({
	name: "HTextField",
	components: { QInput: O },
	__name: "HTextField",
	props: {
		modelValue: { required: !0 },
		modelModifiers: {}
	},
	emits: ["update:modelValue"],
	setup(e) {
		let n = x(e, "modelValue");
		return (e, r) => (h(), t(b(O), d({
			modelValue: n.value,
			"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
			outlined: "",
			clearable: "",
			"bottom-slots": ""
		}, e.$attrs), a({
			append: C(() => [_(e.$slots, "append")]),
			_: 2
		}, [e.$slots.before ? {
			name: "before",
			fn: C(() => [_(e.$slots, "before")]),
			key: "0"
		} : void 0, e.$slots.after ? {
			name: "after",
			fn: C(() => [_(e.$slots, "after")]),
			key: "1"
		} : void 0]), 1040, ["modelValue"]));
	}
}), K = /* @__PURE__ */ c({
	name: "HTreeField",
	components: {
		QInput: O,
		QPopupProxy: j,
		QCard: T,
		QCardSection: E,
		QTree: Ue
	},
	__name: "HTreeField",
	props: /*@__PURE__*/ u({
		items: {},
		label: {},
		value: {}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let n = e, r = x(e, "modelValue"), i = g([]), a = g(null), o = v(""), c = v(!1), l = (e) => {
			let t = [];
			for (let n of e) {
				let { children: e, ...r } = n;
				e && e.length && (t = t.concat(l(e))), t.push(r);
			}
			return t;
		}, u = (e) => {
			if (!Ye(e) && Ye(i.value)) {
				i.value = l(e);
				let t = Je(i.value, (e) => e.id == r.value);
				o.value = t?.name;
			}
		};
		return S(() => n.items, (e) => {
			Ye(e) || u(e);
		}, { immediate: !0 }), S(r, (e) => {
			if (e) {
				let t = a.value?.getNodeByKey(e);
				t && (o.value = t.name), c.value = !1;
			}
		}, { immediate: !0 }), (n, i) => (h(), t(b(O), d({
			modelValue: o.value,
			"onUpdate:modelValue": i[2] ||= (e) => o.value = e,
			label: e.label,
			outlined: "",
			clearable: ""
		}, n.$attrs), {
			default: C(() => [s(b(j), {
				modelValue: c.value,
				"onUpdate:modelValue": i[1] ||= (e) => c.value = e
			}, {
				default: C(() => [s(b(T), null, {
					default: C(() => [s(b(E), null, {
						default: C(() => [s(b(Ue), {
							ref_key: "treeRef",
							ref: a,
							nodes: e.items,
							"node-key": "id",
							"label-key": "name",
							"selected-color": "primary",
							selected: r.value,
							"onUpdate:selected": i[0] ||= (e) => r.value = e
						}, null, 8, ["nodes", "selected"])]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}, 8, ["modelValue"])]),
			_: 1
		}, 16, ["modelValue", "label"]));
	}
}), q = /* @__PURE__ */ c({
	name: "HLabel",
	__name: "HLabel",
	props: {
		size: { default: "" },
		weight: { default: "medium" },
		align: { default: "center" },
		text: {}
	},
	setup(t) {
		let n = t, i = (e) => "text-" + e, a = () => "font-weight-" + n.weight, o = () => n.size ? i(n.size) : "", s = () => i(n.align), c = e(() => {
			let e = [s(), a()], t = o();
			return t && e.push(t), e.join(" ");
		});
		return (e, n) => (h(), r("div", { class: f(c.value) }, y(t.text), 3));
	}
}), mt = { class: "col-12 self-center" }, J = /* @__PURE__ */ c({
	name: "HCenterLabel",
	__name: "HCenterLabel",
	props: {
		height: { default: "100px" },
		text: {}
	},
	setup(e) {
		return (t, n) => (h(), r("div", {
			class: "row text-center",
			style: m(`height: ${e.height}`)
		}, [i("div", mt, y(e.text), 1)], 4));
	}
});
V.install = (e) => {
	e.component(V.name, V);
}, H.install = (e) => {
	e.component(H.name, H);
}, U.install = (e) => {
	e.component(U.name, U);
}, G.install = (e) => {
	e.component(G.name, G);
}, W.install = (e) => {
	e.component(W.name, W);
}, K.install = (e) => {
	e.component(K.name, K);
}, q.install = (e) => {
	e.component(q.name, q);
}, J.install = (e) => {
	e.component(J.name, J);
};
//#endregion
//#region src/lib/enums/index.ts
var Y = /* @__PURE__ */ function(e) {
	return e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e;
}({}), ht = /* @__PURE__ */ function(e) {
	return e.DEFAULT = "default", e.AUDIO = "audio", e.BALL = "ball", e.BARS = "bars", e.BOX = "box", e.CLOCK = "clock", e.COMMENT = "comment", e.CUBE = "cube", e.DOTS = "dots", e.FACEBOOK = "facebook", e.GEARS = "gears", e.GRID = "grid", e.HEARTS = "hearts", e.HOURGLASS = "hourglass", e.INFINITY = "infinity", e.IOS = "ios", e.ORBIT = "orbit", e.OVAL = "oval", e.PIE = "pie", e.PUFF = "puff", e.RADIO = "radio", e.RINGS = "rings", e.TAIL = "tail", e;
}({}), X = /* @__PURE__ */ c({
	name: "HColumn",
	__name: "HColumn",
	props: {
		cols: { default: "" },
		xs: { default: "" },
		sm: { default: "" },
		md: { default: "" },
		lg: { default: "" },
		xl: { default: "" },
		auto: {
			type: Boolean,
			default: !1
		},
		color: { default: "" }
	},
	setup(t) {
		let n = t, i = e(() => {
			let e = [];
			return n.auto ? e.push(B(R.auto)) : n.cols ? e.push(B("", n.cols)) : (e.push(B()), n.xs && e.push(B(Y.xs, n.xs)), n.sm && e.push(B(Y.sm, n.sm)), n.md && e.push(B(Y.md, n.md)), n.lg && e.push(B(Y.lg, n.lg)), n.xl && e.push(B(Y.xl, n.xl))), n.color && e.push(ut(n.color)), e;
		});
		return (e, t) => (h(), r("div", { class: f(i.value) }, [_(e.$slots, "default")], 2));
	}
}), Z = /* @__PURE__ */ c({
	name: "HRow",
	__name: "HRow",
	props: {
		column: {
			type: Boolean,
			default: !1
		},
		self: {
			type: Boolean,
			default: !1
		},
		align: {
			type: String,
			default: "none"
		},
		justify: {
			type: String,
			default: "none"
		},
		gutter: {
			type: String,
			default: "none"
		},
		gutterCol: {
			type: Boolean,
			default: !1
		},
		horizontal: {
			type: Boolean,
			default: !1
		},
		vertical: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = {
			row: "row",
			column: "column",
			justify: "justify",
			self: "self",
			align: "items",
			gutter: "q-gutter",
			gutterWithCol: "q-col-gutter"
		}, n = e, i = re([]), a = () => n.column ? t.column : t.row, o = (e = "", r = "") => {
			let i = t.gutter;
			return n.gutterCol && (i = t.gutterWithCol), r && (i = i + "-" + r), i = i + "-" + e, i;
		}, s = () => n.justify === "none" ? "" : t.justify + "-" + n.justify, c = () => {
			if (n.align !== "none") {
				let e = t.align;
				return n.self && (e = t.self), e + "-" + n.align;
			}
			return "";
		}, l = (e) => o(e, "x"), u = (e) => o(e, "y"), d = (e) => {
			e && i.push(e);
		}, p = () => i.length > 1 ? i.join(" ") : i.length === 1 ? i[0] : t.row, m = () => {
			d(a()), d(s()), d(c()), n.gutter !== "none" && (!n.horizontal && !n.vertical ? d(o(n.gutter)) : (n.horizontal && d(l(n.gutter)), n.vertical && d(u(n.gutter))));
		};
		return te(() => {
			m();
		}), (e, t) => (h(), r("div", { class: f(p()) }, [_(e.$slots, "default")], 2));
	}
}), gt = 6, _t = 4, Q = /* @__PURE__ */ c({
	name: "HContainer",
	components: {
		HRow: Z,
		HColumn: X
	},
	__name: "HContainer",
	props: {
		mode: { default: "three" },
		wider: { default: "default" },
		offset: { default: 0 }
	},
	setup(n) {
		let r = n, i = v(4), a = v(4), o = v(4), c = e(() => r.mode === "two"), l = (e) => e + r.offset, u = (e) => e - r.offset, f = (e) => Math.abs(e % 2) === 0, m = () => _t + r.offset, ee = () => 12 - m(), te = () => Math.floor(ee() / 2), ne = (e) => {
			i.value = l(e), o.value = u(e);
		}, re = (e) => {
			i.value = u(e), o.value = l(e);
		}, g = (e, t = 0) => {
			i.value = e, o.value = e + t;
		}, ie = () => {
			g(gt);
		}, ae = () => {
			a.value = _t;
		}, y = () => {
			ae(), g(_t);
		}, b = e(() => i.value > o.value), x = e(() => i.value < o.value), oe = () => {
			if (c.value) switch (r.wider) {
				case "start":
					ne(gt);
					break;
				case "end":
					re(gt);
					break;
				default: ie();
			}
			else switch (r.wider) {
				case "center":
					a.value = m();
					let e = te();
					f(ee()) ? g(e) : g(e, 1);
					break;
				case "start":
					ae(), ne(_t);
					break;
				case "end":
					ae(), re(_t);
					break;
				default: y();
			}
		};
		return S(() => r, () => {
			oe();
		}, { immediate: !0 }), (e, n) => c.value ? (h(), t(Z, p(d({ key: 0 }, e.$attrs)), {
			default: C(() => [s(X, { cols: i.value }, {
				default: C(() => [b.value ? _(e.$slots, "default", {}, void 0, void 0, 0) : _(e.$slots, "left", {}, void 0, void 0, 1)]),
				_: 3
			}, 8, ["cols"]), s(X, { cols: o.value }, {
				default: C(() => [x.value ? _(e.$slots, "default", {}, void 0, void 0, 0) : _(e.$slots, "right", {}, void 0, void 0, 1)]),
				_: 3
			}, 8, ["cols"])]),
			_: 3
		}, 16)) : (h(), t(Z, p(d({ key: 1 }, e.$attrs)), {
			default: C(() => [
				s(X, { cols: i.value }, {
					default: C(() => [_(e.$slots, "left")]),
					_: 3
				}, 8, ["cols"]),
				s(X, { cols: a.value }, {
					default: C(() => [_(e.$slots, "default")]),
					_: 3
				}, 8, ["cols"]),
				s(X, { cols: o.value }, {
					default: C(() => [_(e.$slots, "right")]),
					_: 3
				}, 8, ["cols"])
			]),
			_: 3
		}, 16));
	}
});
X.install = (e) => {
	e.component(X.name, X);
}, Q.install = (e) => {
	e.component(Q.name, Q);
}, Z.install = (e) => {
	e.component(Z.name, Z);
};
//#endregion
//#region src/HDateTime/HDuration.vue
var vt = /* @__PURE__ */ c({
	name: "HDuration",
	components: {
		HSelect: H,
		HTextField: G,
		HContainer: Q
	},
	__name: "HDuration",
	props: {
		modelValue: { default: "" },
		modelModifiers: {}
	},
	emits: ["update:modelValue"],
	setup(e) {
		let n = x(e, "modelValue"), r = v(0), i = v(""), a = g(st), o = (e) => {
			if (e) {
				let t = Ke.duration(e, "second");
				if (t) {
					let e = t._data;
					for (let t in e) {
						let n = t, a = e[n];
						a && (r.value = a, i.value = n);
					}
				}
			}
		}, c = (e, t) => {
			if (e && t) {
				let r = t, i = Ke.duration(e, r).toISOString();
				n.value = i;
			}
		};
		return S(n, (e) => {
			e && o(e);
		}, { immediate: !0 }), S(i, (e) => {
			e && c(r.value, e);
		}), S(r, (e) => {
			e && c(e, i.value);
		}), (e, n) => (h(), t(b(Q), {
			mode: "two",
			gutter: "xs",
			"gutter-col": "",
			horizontal: ""
		}, {
			left: C(() => [s(b(G), {
				modelValue: r.value,
				"onUpdate:modelValue": n[0] ||= (e) => r.value = e,
				modelModifiers: { number: !0 },
				label: "数值",
				placeholder: "请输入数值",
				type: "number",
				"hide-hint": ""
			}, null, 8, ["modelValue"])]),
			right: C(() => [s(b(H), {
				modelValue: i.value,
				"onUpdate:modelValue": n[1] ||= (e) => i.value = e,
				options: a.value,
				label: "单位",
				"hide-hint": ""
			}, null, 8, ["modelValue", "options"])]),
			_: 1
		}));
	}
});
L.install = (e) => {
	e.component(L.name, L);
}, vt.install = (e) => {
	e.component(vt.name, vt);
};
//#endregion
//#region src/HDivider/HDivider.vue
var $ = /* @__PURE__ */ c({
	name: "HDivider",
	components: {
		HContainer: Q,
		HLabel: q,
		QSeparator: he
	},
	__name: "HDivider",
	props: {
		wider: { default: "center" },
		weight: { default: "medium" },
		offset: { default: 0 },
		label: { default: "" }
	},
	setup(e) {
		return (n, r) => (h(), t(b(Q), {
			mode: "three",
			offset: e.offset,
			wider: e.wider,
			align: "center"
		}, {
			left: C(() => [s(b(he))]),
			right: C(() => [s(b(he))]),
			default: C(() => [s(b(q), {
				text: e.label,
				weight: e.weight
			}, null, 8, ["text", "weight"])]),
			_: 1
		}, 8, ["offset", "wider"]));
	}
});
//#endregion
//#region src/HDivider/index.ts
$.install = (e) => {
	e.component($.name, $);
};
//#endregion
//#region src/HDialog/HDialog.vue?vue&type=script&setup=true&lang.ts
var yt = { class: "text-h6" }, bt = /* @__PURE__ */ c({
	name: "HDialog",
	components: {
		QDialog: ue,
		QCard: T,
		QCardSection: E,
		QSpace: ge,
		QBtn: w,
		QCardActions: ce,
		QInnerLoading: de,
		QSpinnerDots: Te
	},
	__name: "HDialog",
	props: /*@__PURE__*/ u({
		title: { default: "" },
		height: { default: "500px" },
		confirmLabel: { default: "确认" },
		spinnerSize: { default: "50px" },
		hideConfirm: {
			type: Boolean,
			default: !1
		},
		hideCancel: {
			type: Boolean,
			default: !1
		},
		hideClose: {
			type: Boolean,
			default: !1
		},
		externalClose: {
			type: Boolean,
			default: !1
		}
	}, {
		modelValue: {
			type: Boolean,
			default: !1,
			required: !0
		},
		modelModifiers: {},
		loading: {
			type: Boolean,
			default: !1
		},
		loadingModifiers: {}
	}),
	emits: /*@__PURE__*/ u([
		"close",
		"cancel",
		"confirm"
	], ["update:modelValue", "update:loading"]),
	setup(e, { emit: r }) {
		let a = e, o = x(e, "modelValue"), c = x(e, "loading"), l = r, u = () => {
			o.value = !1, l("close");
		}, f = () => {
			o.value = !1, l("cancel");
		}, p = () => {
			c.value = !0, a.externalClose || (o.value = !1), l("confirm");
		};
		return (r, a) => (h(), t(b(ue), d({
			modelValue: o.value,
			"onUpdate:modelValue": a[3] ||= (e) => o.value = e,
			persistent: ""
		}, r.$attrs), {
			default: C(() => [s(b(T), {
				class: "q-py-none",
				style: m(`min-width: ${e.height}`)
			}, {
				default: C(() => [
					s(b(E), { class: "row items-center" }, {
						default: C(() => [
							i("div", yt, y(e.title), 1),
							s(b(ge)),
							e.hideClose ? n("", !0) : (h(), t(b(w), {
								key: 0,
								icon: "close",
								flat: "",
								round: "",
								dense: "",
								onClick: a[0] ||= (e) => u()
							}))
						]),
						_: 1
					}),
					s(b(E), null, {
						default: C(() => [_(r.$slots, "default")]),
						_: 3
					}),
					s(b(ce), {
						align: "right",
						class: "text-primary"
					}, {
						default: C(() => [e.hideCancel ? n("", !0) : (h(), t(b(w), {
							key: 0,
							label: "取消",
							color: "red",
							onClick: a[1] ||= (e) => f()
						})), e.hideConfirm ? n("", !0) : (h(), t(b(w), {
							key: 1,
							label: e.confirmLabel,
							color: "primary",
							onClick: a[2] ||= (e) => p()
						}, null, 8, ["label"]))]),
						_: 1
					}),
					s(b(de), { showing: c.value }, {
						default: C(() => [s(b(Te), {
							size: e.spinnerSize,
							color: "primary"
						}, null, 8, ["size"])]),
						_: 1
					}, 8, ["showing"])
				]),
				_: 3
			}, 8, ["style"])]),
			_: 3
		}, 16, ["modelValue"]));
	}
});
//#endregion
//#region src/HDialog/index.ts
bt.install = (e) => {
	e.component(bt.name, bt);
};
//#endregion
//#region src/HItem/HLabelItem.vue?vue&type=script&setup=true&lang.ts
var xt = { class: "w-20" }, St = { class: "w-50" }, Ct = /* @__PURE__ */ c({
	name: "HLabelItem",
	components: {
		HFieldLabel: W,
		HIconButton: N
	},
	__name: "HLabelItem",
	props: {
		label: {},
		required: {
			type: Boolean,
			default: !1
		},
		justify: { default: "center" },
		align: { default: "center" },
		right: {
			type: Boolean,
			default: !1
		}
	},
	setup(t) {
		let n = t, a = e(() => {
			let e = [];
			return n.justify && e.push(`justify-${n.justify}`), n.align && e.push(`align-${n.align}`), e;
		});
		return (e, n) => (h(), r("div", { class: f([
			"d-flex",
			...a.value,
			"ga-4"
		]) }, [
			i("div", xt, [s(b(W), {
				text: t.label,
				required: t.required,
				class: f([{ "justify-end": t.right }])
			}, null, 8, [
				"text",
				"required",
				"class"
			])]),
			i("div", St, [_(e.$slots, "default")]),
			i("div", null, [_(e.$slots, "append")])
		], 2));
	}
});
//#endregion
//#region src/HItem/index.ts
Ct.install = (e) => {
	e.component(Ct.name, Ct);
};
//#endregion
//#region src/HList/HListItem.vue
var wt = /* @__PURE__ */ c({
	name: "HListItem",
	components: {
		QItem: k,
		QItemSection: A,
		QIcon: D
	},
	directives: {
		ClosePopup: se,
		Ripple: We
	},
	__name: "HListItem",
	props: {
		label: {},
		icon: {}
	},
	setup(e) {
		return (n, r) => {
			let i = ie("close-popup"), a = ie("ripple");
			return oe((h(), t(b(k), { clickable: "" }, {
				default: C(() => [s(b(A), { avatar: "" }, {
					default: C(() => [s(b(D), { name: e.icon }, null, 8, ["name"])]),
					_: 1
				}), s(b(A), null, {
					default: C(() => [o(y(e.label), 1)]),
					_: 1
				})]),
				_: 1
			})), [[i], [a]]);
		};
	}
});
//#endregion
//#region src/HList/index.ts
wt.install = (e) => {
	e.component(wt.name, wt);
};
//#endregion
//#region src/HLoading/HLoading.vue
var Tt = /* @__PURE__ */ c({
	name: "HLoading",
	components: {
		DEFAULT: _e,
		AUDIO: ve,
		BALL: ye,
		BARS: be,
		BOX: xe,
		CLOCK: Se,
		COMMENT: Ce,
		CUBE: we,
		DOTS: Te,
		FACEBOOK: Ee,
		GEARS: De,
		GRID: Oe,
		HEARTS: ke,
		HOURGLASS: Ae,
		INFINITY: je,
		IOS: Me,
		ORBIT: Ne,
		OVAL: Pe,
		PIE: Fe,
		PUFF: Ie,
		RADIO: Le,
		RINGS: Re,
		TAIL: ze,
		QInnerLoading: de
	},
	__name: "HLoading",
	props: {
		type: { default: "DEFAULT" },
		color: { default: "primary" },
		size: { default: "60px" }
	},
	setup(e) {
		return (n, r) => (h(), t(b(de), {
			showing: "",
			color: e.color,
			style: { "z-index": "50" }
		}, {
			default: C(() => [(h(), t(ae(e.type), {
				size: e.size,
				color: e.color
			}, null, 8, ["size", "color"]))]),
			_: 1
		}, 8, ["color"]));
	}
});
//#endregion
//#region src/HLoading/index.ts
Tt.install = (e) => {
	e.component(Tt.name, Tt);
};
//#endregion
//#region src/HPagination/HPagination.vue
var Et = /* @__PURE__ */ c({
	name: "HPagination",
	components: { QPagination: pe },
	__name: "HPagination",
	props: /*@__PURE__*/ u({
		max: { default: 0 },
		maxPage: { default: 7 }
	}, {
		modelValue: {
			type: Number,
			required: !0
		},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let n = x(e, "modelValue");
		return (r, i) => (h(), t(b(pe), d({
			modelValue: n.value,
			"onUpdate:modelValue": i[0] ||= (e) => n.value = e,
			max: e.max,
			"max-pages": e.maxPage,
			"boundary-links": "",
			"direction-links": ""
		}, r.$attrs, {
			"icon-first": "skip_previous",
			"icon-last": "skip_next",
			"icon-prev": "fast_rewind",
			"icon-next": "fast_forward"
		}), null, 16, [
			"modelValue",
			"max",
			"max-pages"
		]));
	}
});
//#endregion
//#region src/HPagination/index.ts
Et.install = (e) => {
	e.component(Et.name, Et);
};
//#endregion
//#region src/HParticles/particles.ts
var Dt = { particles: {
	number: {
		density: {
			enable: !0,
			width: 1920,
			height: 1080
		},
		value: 100
	},
	links: {
		distance: 125,
		enable: !0,
		triangles: {
			enable: !0,
			opacity: .1
		}
	},
	move: {
		enable: !0,
		speed: 5
	},
	size: { value: 1 },
	shape: { type: "circle" }
} }, Ot = ["id"], kt = /* @__PURE__ */ c({
	name: "HParticles",
	__name: "HParticles",
	setup(e) {
		let t = v("HParticles"), n, i = async () => {
			await Qe(Ze);
		}, a = async () => {
			n?.destroy(), n = await Ze.load({
				id: t.value,
				options: Dt
			});
		}, o = async () => {
			n?.destroy();
		};
		return ee(() => {
			i();
		}), te(() => {
			a();
		}), ne(() => {
			o();
		}), (e, n) => (h(), r("div", { id: t.value }, [_(e.$slots, "default")], 8, Ot));
	}
});
//#endregion
//#region src/HParticles/index.ts
kt.install = (e) => {
	e.component(kt.name, kt);
};
//#endregion
//#region src/HBackground/HSignInCornerBottom.vue?vue&type=script&setup=true&lang.ts
var At = {
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	height: "896",
	width: "967.8852157128662"
}, jt = {
	id: "linearGradient-3",
	x1: "0.5",
	y1: "0",
	x2: "0.5",
	y2: "1"
}, Mt = ["stop-color"], Nt = ["stop-color"], Pt = /* @__PURE__ */ c({
	name: "HSignInCornerBottom",
	__name: "HSignInCornerBottom",
	props: {
		startColor: { default: "#28aff0" },
		endColor: { default: "#120fc4" }
	},
	setup(e) {
		return (t, n) => (h(), r("svg", At, [i("defs", null, [n[0] ||= i("path", {
			id: "path-2",
			opacity: "1",
			"fill-rule": "evenodd",
			d: "M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896\n			C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806\n			200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"
		}, null, -1), i("linearGradient", jt, [i("stop", {
			offset: "0",
			"stop-color": e.startColor,
			"stop-opacity": "1"
		}, null, 8, Mt), i("stop", {
			offset: "1",
			"stop-color": e.endColor,
			"stop-opacity": "1"
		}, null, 8, Nt)])]), n[1] ||= i("g", { opacity: "1" }, [i("use", {
			"xlink:href": "#path-2",
			fill: "url(#linearGradient-3)",
			"fill-opacity": "1"
		})], -1)]));
	}
}), Ft = {
	height: "1337",
	width: "1337"
}, It = {
	id: "linearGradient-2",
	x1: "0.79",
	y1: "0.62",
	x2: "0.21",
	y2: "0.86"
}, Lt = ["stop-color"], Rt = ["stop-color"], zt = /* @__PURE__ */ c({
	name: "HSignInCornerTop",
	__name: "HSignInCornerTop",
	props: {
		startColor: { default: "#28aff0" },
		endColor: { default: "#120fc4" }
	},
	setup(e) {
		return (t, n) => (h(), r("svg", Ft, [i("defs", null, [n[0] ||= i("path", {
			id: "path-1",
			opacity: "1",
			"fill-rule": "evenodd",
			d: "M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"
		}, null, -1), i("linearGradient", It, [i("stop", {
			offset: "0",
			"stop-color": e.startColor,
			"stop-opacity": "1"
		}, null, 8, Lt), i("stop", {
			offset: "1",
			"stop-color": e.endColor,
			"stop-opacity": "1"
		}, null, 8, Rt)])]), n[1] ||= i("g", { opacity: "1" }, [i("use", {
			"xlink:href": "#path-1",
			fill: "url(#linearGradient-2)",
			"fill-opacity": "1"
		})], -1)]));
	}
}), Bt = { class: "corner-top" }, Vt = { class: "corner-bottom" }, Ht = /*#__PURE__*/ nt(/* @__PURE__ */ c({
	name: "HSignInBackground",
	components: {
		HSignInCornerBottom: Pt,
		HSignInCornerTop: zt
	},
	__name: "HSignInBackground",
	props: {
		startColor: {},
		endColor: {}
	},
	setup(e) {
		return (t, n) => (h(), r("div", null, [i("div", Bt, [s(zt, {
			"start-color": e.startColor,
			"end-color": e.endColor
		}, null, 8, ["start-color", "end-color"])]), i("div", Vt, [s(Pt, {
			"start-color": e.endColor,
			"end-color": e.startColor
		}, null, 8, ["start-color", "end-color"])])]));
	}
}), [["__scopeId", "data-v-0558c2f2"]]);
//#endregion
//#region src/HBackground/index.ts
Ht.install = (e) => {
	e.component(Ht.name, Ht);
};
//#endregion
//#region src/index.ts
var Ut = [
	M,
	F,
	J,
	I,
	X,
	Q,
	L,
	$,
	bt,
	vt,
	N,
	V,
	W,
	K,
	q,
	wt,
	Tt,
	Et,
	kt,
	Z,
	H,
	Ht,
	U,
	G,
	P,
	Ct
], Wt = { install: (e) => {
	Ut.map((t) => t.install(e));
} };
//#endregion
export { Y as BreakPointEnum, lt as Content, st as DURATION_UNITS, R as Grid, M as HButton, F as HCardTitle, J as HCenterLabel, I as HChartCard, X as HColumn, Q as HContainer, L as HDateTime, bt as HDialog, $ as HDivider, vt as HDuration, W as HFieldLabel, N as HIconButton, V as HIconSelect, q as HLabel, Ct as HLabelItem, wt as HListItem, Tt as HLoading, Et as HPagination, kt as HParticles, Z as HRow, H as HSelect, Ht as HSignInBackground, U as HSwitch, G as HTextField, K as HTreeField, P as HVisibilityButton, ht as SpinnerEnum, ct as Symbol, dt as createBackgroundColor, z as createClass, B as createColClass, ut as createTextColor, Wt as default, Ge as moment };
