import { computed as e, createBlock as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, createSlots as a, createTextVNode as o, createVNode as s, defineComponent as c, guardReactiveProps as l, mergeModels as u, mergeProps as d, normalizeClass as f, normalizeProps as p, normalizeStyle as m, onBeforeMount as ee, onMounted as te, onUnmounted as ne, openBlock as h, reactive as re, ref as g, renderSlot as _, resolveDirective as ie, resolveDynamicComponent as ae, shallowRef as v, toDisplayString as y, unref as b, useModel as x, watch as S, withCtx as C, withDirectives as oe } from "vue";
import { ClosePopup as se, QBtn as w, QCard as T, QCardActions as ce, QCardSection as E, QDate as le, QDialog as ue, QIcon as D, QInnerLoading as de, QInput as O, QItem as k, QItemLabel as fe, QItemSection as A, QPagination as pe, QPopupProxy as me, QSelect as he, QSeparator as ge, QSpace as _e, QSpinner as ve, QSpinnerAudio as ye, QSpinnerBall as be, QSpinnerBars as xe, QSpinnerBox as Se, QSpinnerClock as Ce, QSpinnerComment as we, QSpinnerCube as Te, QSpinnerDots as Ee, QSpinnerFacebook as De, QSpinnerGears as Oe, QSpinnerGrid as ke, QSpinnerHearts as Ae, QSpinnerHourglass as je, QSpinnerInfinity as Me, QSpinnerIos as Ne, QSpinnerOrbit as Pe, QSpinnerOval as Fe, QSpinnerPie as Ie, QSpinnerPuff as Le, QSpinnerRadio as Re, QSpinnerRings as ze, QSpinnerTail as Be, QTime as Ve, QToggle as He, QTooltip as Ue, QTree as We, Ripple as Ge } from "quasar";
import { moment as Ke, moment as qe } from "@herodotus/core";
import * as Je from "@mdi/js";
import { find as Ye, isEmpty as Xe, kebabCase as Ze } from "lodash-es";
import { tsParticles as Qe } from "@tsparticles/engine";
import { loadTrianglesPreset as $e } from "@tsparticles/preset-triangles";
// src/HButton/HButton.vue
var j = /* @__PURE__ */ c({
	name: "HButton",
	components: {
		QBtn: w,
		QTooltip: Ue
	},
	__name: "HButton",
	props: { tooltip: { default: "" } },
	setup(e) {
		return (n, r) => (h(), t(b(w), p(l(n.$attrs)), a({
			loading: C(() => [_(n.$slots, "loading")]),
			_: 2
		}, [e.tooltip ? {
			name: "default",
			fn: C(() => [s(b(Ue), null, {
				default: C(() => [o(y(e.tooltip), 1)]),
				_: 1
			})]),
			key: "0"
		} : void 0]), 1040));
	}
}), M = /* @__PURE__ */ c({
	name: "HIconButton",
	components: { HButton: j },
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
		return (n, r) => (h(), t(j, d({
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
}), N = /* @__PURE__ */ c({
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
j.install = (e) => {
	e.component(j.name, j);
}, M.install = (e) => {
	e.component(M.name, M);
}, N.install = (e) => {
	e.component(N.name, N);
};
// src/HCard/HCardTitle.vue?vue&type=script&setup=true&lang.ts
var et = { class: "title-toolbar row items-center q-pr-sm" }, tt = { class: "card-title q-my-xs q-mr-sm cursor-pointer" }, nt = /*@__PURE__*/ c({
	name: "HCardTitle",
	__name: "HCardTitle",
	props: { text: { default: "" } },
	setup(e) {
		return (t, n) => (h(), r("div", et, [i("div", tt, y(e.text), 1)]));
	}
}), rt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, P = /*#__PURE__*/ rt(nt, [["__scopeId", "data-v-9c5433ec"]]), it = { class: "text-h6" }, at = {
	key: 0,
	class: "text-subtitle2"
}, F = /* @__PURE__ */ c({
	name: "HChartCard",
	components: {
		QCard: T,
		QCardSection: E,
		QSeparator: ge
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
					default: C(() => [i("div", it, y(e.title), 1), e.subtitle ? (h(), r("div", at, y(e.subtitle), 1)) : n("", !0)]),
					_: 1
				}),
				s(b(ge), { inset: "" }),
				s(b(E), null, {
					default: C(() => [_(a.$slots, "default")]),
					_: 3
				})
			]),
			_: 3
		}));
	}
});
P.install = (e) => {
	e.component(P.name, P);
}, F.install = (e) => {
	e.component(F.name, F);
};
// src/HDateTime/HDateTime.vue?vue&type=script&setup=true&lang.ts
var ot = { class: "row items-center justify-end" }, st = { class: "row items-center justify-end" }, I = /* @__PURE__ */ c({
	name: "HDateTime",
	components: {
		QInput: O,
		QIcon: D,
		QPopupProxy: me,
		QTime: Ve,
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
					default: C(() => [s(b(me), {
						cover: "",
						"transition-show": "scale",
						"transition-hide": "scale"
					}, {
						default: C(() => [s(b(le), {
							modelValue: n.value,
							"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
							mask: "YYYY-MM-DD HH:mm:ss"
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
				append: C(() => [s(b(D), {
					name: "access_time",
					class: "cursor-pointer"
				}, {
					default: C(() => [s(b(me), {
						cover: "",
						"transition-show": "scale",
						"transition-hide": "scale"
					}, {
						default: C(() => [s(b(Ve), {
							modelValue: n.value,
							"onUpdate:modelValue": r[1] ||= (e) => n.value = e,
							mask: "YYYY-MM-DD HH:mm:ss",
							format24h: "",
							"with-seconds": ""
						}, {
							default: C(() => [i("div", st, [oe(s(b(w), {
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
}), ct = [
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
], lt = { DASH: "-" }, ut = {
	text: "text",
	bg: "bg"
}, L = {
	auto: "auto",
	col: "col"
}, R = (e, ...t) => e + lt.DASH + t.join(lt.DASH), dt = (e) => R(ut.text, e), ft = (e) => R(ut.bg, e), z = (e = "", t = "") => e && t ? R(L.col, e, t) : e ? R(L.col, e) : t ? R(L.col, t) : L.col, B = /* @__PURE__ */ c({
	name: "HIconSelect",
	components: {
		QSelect: he,
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
			r = Object.keys(Je).map((e) => Ze(e));
		});
		let c = (e, t, n) => {
			e.length < 3 ? n() : t(() => {
				let t = e.toLowerCase();
				i.value = r.filter((e) => e.toLowerCase().match(t));
			});
		};
		return (e, r) => (h(), t(b(he), d({
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
}), V = /* @__PURE__ */ c({
	name: "HSelect",
	components: { QSelect: he },
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
		return (e, r) => (h(), t(b(he), d({
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
}), H = /* @__PURE__ */ c({
	name: "HSwitch",
	components: { QToggle: He },
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
		return (r, i) => (h(), t(b(He), d({
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
}), pt = { class: "q-gutter-xs row q-mb-xs" }, mt = { class: "ext-body2" }, U = /* @__PURE__ */ c({
	name: "HFieldLabel",
	components: {
		QIcon: D,
		QTooltip: Ue
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
		return (a, c) => (h(), r("div", pt, [
			e.required ? (h(), t(b(D), {
				key: 0,
				name: "mdi-star",
				color: "red",
				class: "q-pt-xs",
				size: "10px"
			})) : n("", !0),
			i("div", mt, y(e.text), 1),
			e.tooltip ? (h(), t(b(D), {
				key: 1,
				name: "mdi-information-variant-circle",
				color: "grey",
				size: "xs"
			}, {
				default: C(() => [s(b(Ue), null, {
					default: C(() => [o(y(e.tooltip), 1)]),
					_: 1
				})]),
				_: 1
			})) : n("", !0)
		]));
	}
}), W = /* @__PURE__ */ c({
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
}), G = /* @__PURE__ */ c({
	name: "HTreeField",
	components: {
		QInput: O,
		QPopupProxy: me,
		QCard: T,
		QCardSection: E,
		QTree: We
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
			if (!Xe(e) && Xe(i.value)) {
				i.value = l(e);
				let t = Ye(i.value, (e) => e.id == r.value);
				o.value = t?.name;
			}
		};
		return S(() => n.items, (e) => {
			Xe(e) || u(e);
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
			default: C(() => [s(b(me), {
				modelValue: c.value,
				"onUpdate:modelValue": i[1] ||= (e) => c.value = e
			}, {
				default: C(() => [s(b(T), null, {
					default: C(() => [s(b(E), null, {
						default: C(() => [s(b(We), {
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
}), K = /* @__PURE__ */ c({
	name: "HLabel",
	__name: "HLabel",
	props: {
		size: { default: "subtitle-1" },
		weight: { default: "bolder" },
		align: { default: "left" },
		text: {}
	},
	setup(t) {
		let n = t, i = (e) => "text-" + e, a = () => "font-weight-" + n.weight, o = () => n.size ? i(n.size) : "", s = () => i(n.align), c = e(() => {
			let e = [s(), a()], t = o();
			return t && e.push(t), e.join(" ");
		});
		return (e, n) => (h(), r("div", { class: f(c.value) }, y(t.text), 3));
	}
}), ht = { class: "col-12 self-center" }, q = /* @__PURE__ */ c({
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
		}, [i("div", ht, y(e.text), 1)], 4));
	}
});
B.install = (e) => {
	e.component(B.name, B);
}, V.install = (e) => {
	e.component(V.name, V);
}, H.install = (e) => {
	e.component(H.name, H);
}, W.install = (e) => {
	e.component(W.name, W);
}, U.install = (e) => {
	e.component(U.name, U);
}, G.install = (e) => {
	e.component(G.name, G);
}, K.install = (e) => {
	e.component(K.name, K);
}, q.install = (e) => {
	e.component(q.name, q);
};
// src/lib/enums/index.ts
var J = /* @__PURE__ */ function(e) {
	return e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e;
}({}), gt = /* @__PURE__ */ function(e) {
	return e.DEFAULT = "default", e.AUDIO = "audio", e.BALL = "ball", e.BARS = "bars", e.BOX = "box", e.CLOCK = "clock", e.COMMENT = "comment", e.CUBE = "cube", e.DOTS = "dots", e.FACEBOOK = "facebook", e.GEARS = "gears", e.GRID = "grid", e.HEARTS = "hearts", e.HOURGLASS = "hourglass", e.INFINITY = "infinity", e.IOS = "ios", e.ORBIT = "orbit", e.OVAL = "oval", e.PIE = "pie", e.PUFF = "puff", e.RADIO = "radio", e.RINGS = "rings", e.TAIL = "tail", e;
}({}), Y = /* @__PURE__ */ c({
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
			return n.auto ? e.push(z(L.auto)) : n.cols ? e.push(z("", n.cols)) : (e.push(z()), n.xs && e.push(z(J.xs, n.xs)), n.sm && e.push(z(J.sm, n.sm)), n.md && e.push(z(J.md, n.md)), n.lg && e.push(z(J.lg, n.lg)), n.xl && e.push(z(J.xl, n.xl))), n.color && e.push(dt(n.color)), e;
		});
		return (e, t) => (h(), r("div", { class: f(i.value) }, [_(e.$slots, "default")], 2));
	}
}), X = /* @__PURE__ */ c({
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
}), _t = 6, vt = 4, Z = /* @__PURE__ */ c({
	name: "HContainer",
	components: {
		HRow: X,
		HColumn: Y
	},
	__name: "HContainer",
	props: {
		mode: { default: "three" },
		wider: { default: "default" },
		offset: { default: 0 }
	},
	setup(n) {
		let r = n, i = v(4), a = v(4), o = v(4), c = e(() => r.mode === "two"), l = (e) => e + r.offset, u = (e) => e - r.offset, f = (e) => Math.abs(e % 2) === 0, m = () => vt + r.offset, ee = () => 12 - m(), te = () => Math.floor(ee() / 2), ne = (e) => {
			i.value = l(e), o.value = u(e);
		}, re = (e) => {
			i.value = u(e), o.value = l(e);
		}, g = (e, t = 0) => {
			i.value = e, o.value = e + t;
		}, ie = () => {
			g(_t);
		}, ae = () => {
			a.value = vt;
		}, y = () => {
			ae(), g(vt);
		}, b = e(() => i.value > o.value), x = e(() => i.value < o.value), oe = () => {
			if (c.value) switch (r.wider) {
				case "start":
					ne(_t);
					break;
				case "end":
					re(_t);
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
					ae(), ne(vt);
					break;
				case "end":
					ae(), re(vt);
					break;
				default: y();
			}
		};
		return S(() => r, () => {
			oe();
		}, { immediate: !0 }), (e, n) => c.value ? (h(), t(X, p(d({ key: 0 }, e.$attrs)), {
			default: C(() => [s(Y, { cols: i.value }, {
				default: C(() => [b.value ? _(e.$slots, "default", {}, void 0, void 0, 0) : _(e.$slots, "left", {}, void 0, void 0, 1)]),
				_: 3
			}, 8, ["cols"]), s(Y, { cols: o.value }, {
				default: C(() => [x.value ? _(e.$slots, "default", {}, void 0, void 0, 0) : _(e.$slots, "right", {}, void 0, void 0, 1)]),
				_: 3
			}, 8, ["cols"])]),
			_: 3
		}, 16)) : (h(), t(X, p(d({ key: 1 }, e.$attrs)), {
			default: C(() => [
				s(Y, { cols: i.value }, {
					default: C(() => [_(e.$slots, "left")]),
					_: 3
				}, 8, ["cols"]),
				s(Y, { cols: a.value }, {
					default: C(() => [_(e.$slots, "default")]),
					_: 3
				}, 8, ["cols"]),
				s(Y, { cols: o.value }, {
					default: C(() => [_(e.$slots, "right")]),
					_: 3
				}, 8, ["cols"])
			]),
			_: 3
		}, 16));
	}
});
Y.install = (e) => {
	e.component(Y.name, Y);
}, Z.install = (e) => {
	e.component(Z.name, Z);
}, X.install = (e) => {
	e.component(X.name, X);
};
// src/HDateTime/HDuration.vue
var yt = /* @__PURE__ */ c({
	name: "HDuration",
	components: {
		HSelect: V,
		HTextField: W,
		HContainer: Z
	},
	__name: "HDuration",
	props: {
		modelValue: { default: "" },
		modelModifiers: {}
	},
	emits: ["update:modelValue"],
	setup(e) {
		let n = x(e, "modelValue"), r = v(0), i = v(""), a = g(ct), o = (e) => {
			if (e) {
				let t = qe.duration(e, "second");
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
				let r = t, i = qe.duration(e, r).toISOString();
				n.value = i;
			}
		};
		return S(n, (e) => {
			e && o(e);
		}, { immediate: !0 }), S(i, (e) => {
			e && c(r.value, e);
		}), S(r, (e) => {
			e && c(e, i.value);
		}), (e, n) => (h(), t(b(Z), {
			mode: "two",
			gutter: "xs",
			"gutter-col": "",
			horizontal: ""
		}, {
			left: C(() => [s(b(W), {
				modelValue: r.value,
				"onUpdate:modelValue": n[0] ||= (e) => r.value = e,
				modelModifiers: { number: !0 },
				label: "数值",
				placeholder: "请输入数值",
				type: "number",
				"hide-hint": ""
			}, null, 8, ["modelValue"])]),
			right: C(() => [s(b(V), {
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
I.install = (e) => {
	e.component(I.name, I);
}, yt.install = (e) => {
	e.component(yt.name, yt);
};
// src/HDivider/HDivider.vue
var bt = /* @__PURE__ */ c({
	name: "HDivider",
	components: {
		HContainer: Z,
		HLabel: K,
		QSeparator: ge
	},
	__name: "HDivider",
	props: {
		wider: { default: "center" },
		weight: { default: "medium" },
		offset: { default: 0 },
		label: { default: "" }
	},
	setup(e) {
		return (n, r) => (h(), t(b(Z), {
			mode: "three",
			offset: e.offset,
			wider: e.wider,
			align: "center"
		}, {
			left: C(() => [s(b(ge))]),
			right: C(() => [s(b(ge))]),
			default: C(() => [s(b(K), {
				text: e.label,
				weight: e.weight
			}, null, 8, ["text", "weight"])]),
			_: 1
		}, 8, ["offset", "wider"]));
	}
});
// src/HDivider/index.ts
bt.install = (e) => {
	e.component(bt.name, bt);
};
// src/HDialog/HDialog.vue?vue&type=script&setup=true&lang.ts
var xt = { class: "text-h6" }, St = /* @__PURE__ */ c({
	name: "HDialog",
	components: {
		QDialog: ue,
		QCard: T,
		QCardSection: E,
		QSpace: _e,
		QBtn: w,
		QCardActions: ce,
		QInnerLoading: de,
		QSpinnerDots: Ee
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
							i("div", xt, y(e.title), 1),
							s(b(_e)),
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
						default: C(() => [s(b(Ee), {
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
// src/HDialog/index.ts
St.install = (e) => {
	e.component(St.name, St);
};
// src/HItem/HLabelItem.vue?vue&type=script&setup=true&lang.ts
var Ct = { class: "w-20" }, wt = { class: "w-50" }, Tt = /* @__PURE__ */ c({
	name: "HLabelItem",
	components: {
		HFieldLabel: U,
		HIconButton: M
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
			i("div", Ct, [s(b(U), {
				text: t.label,
				required: t.required,
				class: f([{ "justify-end": t.right }])
			}, null, 8, [
				"text",
				"required",
				"class"
			])]),
			i("div", wt, [_(e.$slots, "default")]),
			i("div", null, [_(e.$slots, "append")])
		], 2));
	}
});
// src/HItem/index.ts
Tt.install = (e) => {
	e.component(Tt.name, Tt);
};
// src/HList/HListItem.vue
var Q = /* @__PURE__ */ c({
	name: "HListItem",
	components: {
		QItem: k,
		QItemSection: A,
		QIcon: D
	},
	directives: {
		ClosePopup: se,
		Ripple: Ge
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
// src/HList/index.ts
Q.install = (e) => {
	e.component(Q.name, Q);
};
// src/HLoading/HLoading.vue
var Et = /* @__PURE__ */ c({
	name: "HLoading",
	components: {
		DEFAULT: ve,
		AUDIO: ye,
		BALL: be,
		BARS: xe,
		BOX: Se,
		CLOCK: Ce,
		COMMENT: we,
		CUBE: Te,
		DOTS: Ee,
		FACEBOOK: De,
		GEARS: Oe,
		GRID: ke,
		HEARTS: Ae,
		HOURGLASS: je,
		INFINITY: Me,
		IOS: Ne,
		ORBIT: Pe,
		OVAL: Fe,
		PIE: Ie,
		PUFF: Le,
		RADIO: Re,
		RINGS: ze,
		TAIL: Be,
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
// src/HLoading/index.ts
Et.install = (e) => {
	e.component(Et.name, Et);
};
// src/HPagination/HPagination.vue
var Dt = /* @__PURE__ */ c({
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
// src/HPagination/index.ts
Dt.install = (e) => {
	e.component(Dt.name, Dt);
};
// src/HParticles/particles.ts
var Ot = { particles: {
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
} }, kt = ["id"], At = /* @__PURE__ */ c({
	name: "HParticles",
	__name: "HParticles",
	setup(e) {
		let t = v("HParticles"), n, i = () => Qe.pluginManager.presets.has("triangles"), a = async () => {
			i() || await $e(Qe);
		}, o = async () => {
			n?.destroy(), n = await Qe.load({
				id: t.value,
				options: Ot
			});
		}, s = async () => {
			n?.destroy();
		};
		return ee(() => {
			a();
		}), te(() => {
			o();
		}), ne(() => {
			s();
		}), (e, n) => (h(), r("div", { id: t.value }, [_(e.$slots, "default")], 8, kt));
	}
});
// src/HParticles/index.ts
At.install = (e) => {
	e.component(At.name, At);
};
// src/HBackground/HSignInCornerBottom.vue?vue&type=script&setup=true&lang.ts
var jt = {
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	height: "896",
	width: "967.8852157128662"
}, Mt = {
	id: "linearGradient-3",
	x1: "0.5",
	y1: "0",
	x2: "0.5",
	y2: "1"
}, Nt = ["stop-color"], Pt = ["stop-color"], Ft = /* @__PURE__ */ c({
	name: "HSignInCornerBottom",
	__name: "HSignInCornerBottom",
	props: {
		startColor: { default: "#28aff0" },
		endColor: { default: "#120fc4" }
	},
	setup(e) {
		return (t, n) => (h(), r("svg", jt, [i("defs", null, [n[0] ||= i("path", {
			id: "path-2",
			opacity: "1",
			"fill-rule": "evenodd",
			d: "M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896\n			C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806\n			200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"
		}, null, -1), i("linearGradient", Mt, [i("stop", {
			offset: "0",
			"stop-color": e.startColor,
			"stop-opacity": "1"
		}, null, 8, Nt), i("stop", {
			offset: "1",
			"stop-color": e.endColor,
			"stop-opacity": "1"
		}, null, 8, Pt)])]), n[1] ||= i("g", { opacity: "1" }, [i("use", {
			"xlink:href": "#path-2",
			fill: "url(#linearGradient-3)",
			"fill-opacity": "1"
		})], -1)]));
	}
}), It = {
	height: "1337",
	width: "1337"
}, Lt = {
	id: "linearGradient-2",
	x1: "0.79",
	y1: "0.62",
	x2: "0.21",
	y2: "0.86"
}, Rt = ["stop-color"], zt = ["stop-color"], Bt = /* @__PURE__ */ c({
	name: "HSignInCornerTop",
	__name: "HSignInCornerTop",
	props: {
		startColor: { default: "#28aff0" },
		endColor: { default: "#120fc4" }
	},
	setup(e) {
		return (t, n) => (h(), r("svg", It, [i("defs", null, [n[0] ||= i("path", {
			id: "path-1",
			opacity: "1",
			"fill-rule": "evenodd",
			d: "M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"
		}, null, -1), i("linearGradient", Lt, [i("stop", {
			offset: "0",
			"stop-color": e.startColor,
			"stop-opacity": "1"
		}, null, 8, Rt), i("stop", {
			offset: "1",
			"stop-color": e.endColor,
			"stop-opacity": "1"
		}, null, 8, zt)])]), n[1] ||= i("g", { opacity: "1" }, [i("use", {
			"xlink:href": "#path-1",
			fill: "url(#linearGradient-2)",
			"fill-opacity": "1"
		})], -1)]));
	}
}), Vt = { class: "corner-top" }, Ht = { class: "corner-bottom" }, $ = /*#__PURE__*/ rt(/* @__PURE__ */ c({
	name: "HSignInBackground",
	components: {
		HSignInCornerBottom: Ft,
		HSignInCornerTop: Bt
	},
	__name: "HSignInBackground",
	props: {
		startColor: {},
		endColor: {}
	},
	setup(e) {
		return (t, n) => (h(), r("div", null, [i("div", Vt, [s(Bt, {
			"start-color": e.startColor,
			"end-color": e.endColor
		}, null, 8, ["start-color", "end-color"])]), i("div", Ht, [s(Ft, {
			"start-color": e.endColor,
			"end-color": e.startColor
		}, null, 8, ["start-color", "end-color"])])]));
	}
}), [["__scopeId", "data-v-0558c2f2"]]);
// src/HBackground/index.ts
$.install = (e) => {
	e.component($.name, $);
};
// src/index.ts
var Ut = [
	j,
	P,
	q,
	F,
	Y,
	Z,
	I,
	bt,
	St,
	yt,
	M,
	B,
	U,
	G,
	K,
	Q,
	Et,
	Dt,
	At,
	X,
	V,
	$,
	H,
	W,
	N,
	Tt
], Wt = { install: (e) => {
	Ut.map((t) => t.install(e));
} };
export { J as BreakPointEnum, ut as Content, ct as DURATION_UNITS, L as Grid, j as HButton, P as HCardTitle, q as HCenterLabel, F as HChartCard, Y as HColumn, Z as HContainer, I as HDateTime, St as HDialog, bt as HDivider, yt as HDuration, U as HFieldLabel, M as HIconButton, B as HIconSelect, K as HLabel, Tt as HLabelItem, Q as HListItem, Et as HLoading, Dt as HPagination, At as HParticles, X as HRow, V as HSelect, $ as HSignInBackground, H as HSwitch, W as HTextField, G as HTreeField, N as HVisibilityButton, gt as SpinnerEnum, lt as Symbol, ft as createBackgroundColor, R as createClass, z as createColClass, dt as createTextColor, Wt as default, Ke as moment };
