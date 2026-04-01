import { computed as e, createBlock as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, createSlots as a, createTextVNode as o, createVNode as s, defineComponent as c, guardReactiveProps as l, mergeModels as u, mergeProps as d, nextTick as ee, normalizeClass as f, normalizeProps as p, normalizeStyle as te, onMounted as ne, onUnmounted as re, openBlock as m, reactive as ie, ref as h, renderSlot as g, resolveDirective as ae, resolveDynamicComponent as oe, shallowRef as _, toDisplayString as v, unref as y, useModel as b, watch as x, withCtx as S, withDirectives as se } from "vue";
import { ClosePopup as ce, QBtn as C, QCard as w, QCardActions as le, QCardSection as T, QDate as ue, QDialog as de, QIcon as E, QInnerLoading as fe, QInput as D, QItem as O, QItemLabel as pe, QItemSection as k, QPagination as me, QPopupProxy as A, QSelect as he, QSeparator as j, QSpace as ge, QSpinner as _e, QSpinnerAudio as ve, QSpinnerBall as ye, QSpinnerBars as be, QSpinnerBox as xe, QSpinnerClock as Se, QSpinnerComment as Ce, QSpinnerCube as we, QSpinnerDots as Te, QSpinnerFacebook as Ee, QSpinnerGears as De, QSpinnerGrid as Oe, QSpinnerHearts as ke, QSpinnerHourglass as Ae, QSpinnerInfinity as je, QSpinnerIos as Me, QSpinnerOrbit as Ne, QSpinnerOval as Pe, QSpinnerPie as Fe, QSpinnerPuff as Ie, QSpinnerRadio as Le, QSpinnerRings as Re, QSpinnerTail as ze, QTime as Be, QToggle as Ve, QTooltip as He, QTree as Ue, Ripple as We } from "quasar";
import { moment as Ge, moment as Ke } from "@herodotus/core";
import * as qe from "@mdi/js";
import { find as Je, isEmpty as Ye, kebabCase as Xe } from "lodash-es";
import { tsParticles as Ze } from "@tsparticles/engine";
import { loadBasic as Qe } from "@tsparticles/basic";
import { loadParticlesLinksInteraction as $e } from "@tsparticles/interaction-particles-links";
//#endregion
//#region src/HButton/HButton.vue
var M = /* @__PURE__ */ c({
	name: "HButton",
	components: {
		QBtn: C,
		QTooltip: He
	},
	__name: "HButton",
	props: { tooltip: { default: "" } },
	setup(e) {
		return (n, r) => (m(), t(y(C), p(l(n.$attrs)), a({
			loading: S(() => [g(n.$slots, "loading")]),
			_: 2
		}, [e.tooltip ? {
			name: "default",
			fn: S(() => [s(y(He), null, {
				default: S(() => [o(v(e.tooltip), 1)]),
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
		return (n, r) => (m(), t(M, d({
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
	components: { QIcon: E },
	__name: "HVisibilityButton",
	props: {
		modelValue: { type: Boolean },
		modelModifiers: {}
	},
	emits: ["update:modelValue"],
	setup(e) {
		let n = b(e, "modelValue");
		return (e, r) => (m(), t(y(E), {
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
var et = { class: "title-toolbar row items-center q-pr-sm" }, tt = { class: "card-title q-my-xs q-mr-sm cursor-pointer" }, nt = /* @__PURE__ */ c({
	name: "HCardTitle",
	__name: "HCardTitle",
	props: { text: { default: "" } },
	setup(e) {
		return (t, n) => (m(), r("div", et, [i("div", tt, v(e.text), 1)]));
	}
}), rt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, F = /* @__PURE__ */ rt(nt, [["__scopeId", "data-v-9c5433ec"]]), it = { class: "text-h6" }, at = {
	key: 0,
	class: "text-subtitle2"
}, I = /* @__PURE__ */ c({
	name: "HChartCard",
	components: {
		QCard: w,
		QCardSection: T,
		QSeparator: j
	},
	__name: "HChartCard",
	props: {
		title: {},
		subtitle: { default: "" }
	},
	setup(e) {
		return (a, o) => (m(), t(y(w), null, {
			default: S(() => [
				s(y(T), null, {
					default: S(() => [i("div", it, v(e.title), 1), e.subtitle ? (m(), r("div", at, v(e.subtitle), 1)) : n("", !0)]),
					_: 1
				}),
				s(y(j), { inset: "" }),
				s(y(T), null, {
					default: S(() => [g(a.$slots, "default")]),
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
var ot = { class: "row items-center justify-end" }, st = { class: "row items-center justify-end" }, L = /* @__PURE__ */ c({
	name: "HDateTime",
	components: {
		QInput: D,
		QIcon: E,
		QPopupProxy: A,
		QTime: Be,
		QBtn: C,
		QDate: ue
	},
	directives: { ClosePopup: ce },
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
		let n = b(e, "modelValue");
		return (e, r) => {
			let a = ae("close-popup");
			return m(), t(y(D), d({
				modelValue: n.value,
				"onUpdate:modelValue": r[2] ||= (e) => n.value = e,
				outlined: "",
				"bottom-slots": ""
			}, e.$attrs), {
				prepend: S(() => [s(y(E), {
					name: "event",
					class: "cursor-pointer"
				}, {
					default: S(() => [s(y(A), {
						cover: "",
						"transition-show": "scale",
						"transition-hide": "scale"
					}, {
						default: S(() => [s(y(ue), {
							modelValue: n.value,
							"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
							mask: "YYYY-MM-DD HH:mm:ss"
						}, {
							default: S(() => [i("div", ot, [se(s(y(C), {
								label: "关闭",
								color: "primary"
							}, null, 512), [[a]])])]),
							_: 1
						}, 8, ["modelValue"])]),
						_: 1
					})]),
					_: 1
				})]),
				append: S(() => [s(y(E), {
					name: "access_time",
					class: "cursor-pointer"
				}, {
					default: S(() => [s(y(A), {
						cover: "",
						"transition-show": "scale",
						"transition-hide": "scale"
					}, {
						default: S(() => [s(y(Be), {
							modelValue: n.value,
							"onUpdate:modelValue": r[1] ||= (e) => n.value = e,
							mask: "YYYY-MM-DD HH:mm:ss",
							format24h: "",
							"with-seconds": ""
						}, {
							default: S(() => [i("div", st, [se(s(y(C), {
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
}, R = {
	auto: "auto",
	col: "col"
}, z = (e, ...t) => e + lt.DASH + t.join(lt.DASH), dt = (e) => z(ut.text, e), ft = (e) => z(ut.bg, e), B = (e = "", t = "") => e && t ? z(R.col, e, t) : e ? z(R.col, e) : t ? z(R.col, t) : R.col, pt = /* @__PURE__ */ c({
	name: "HIconSelect",
	components: {
		QSelect: he,
		QIcon: E,
		QItem: O,
		QItemSection: k,
		QItemLabel: pe
	},
	__name: "HIconSelect",
	props: {
		modelValue: {},
		modelModifiers: {}
	},
	emits: ["update:modelValue"],
	setup(e) {
		let n = b(e, "modelValue"), r = [], i = h(r);
		ne(() => {
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
		return (e, r) => (m(), t(y(he), d({
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
			option: S((e) => [s(y(O), p(l(e.itemProps)), {
				default: S(() => [s(y(k), { avatar: "" }, {
					default: S(() => [s(y(E), { name: e.opt }, null, 8, ["name"])]),
					_: 2
				}, 1024), s(y(k), null, {
					default: S(() => [s(y(pe), null, {
						default: S(() => [o(v(e.opt), 1)]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024)]),
				_: 2
			}, 1040)]),
			"no-option": S(() => [s(y(O), null, {
				default: S(() => [s(y(k), { class: "text-grey" }, {
					default: S(() => [...r[1] ||= [o("没有数据", -1)]]),
					_: 1
				})]),
				_: 1
			})]),
			_: 2
		}, [n.value ? {
			name: "prepend",
			fn: S(() => [s(y(E), {
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
	props: /* @__PURE__ */ u({
		optionLabel: { default: "text" },
		optionValue: { default: "value" },
		errorMessage: {}
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(n) {
		let r = n, i = b(n, "modelValue"), a = e(() => !!r.errorMessage);
		return (e, r) => (m(), t(y(he), d({
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
	components: { QToggle: Ve },
	__name: "HSwitch",
	props: /* @__PURE__ */ u({
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
		let n = b(e, "modelValue");
		return (r, i) => (m(), t(y(Ve), d({
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
}), mt = { class: "q-gutter-xs row q-mb-xs" }, ht = { class: "ext-body2" }, U = /* @__PURE__ */ c({
	name: "HFieldLabel",
	components: {
		QIcon: E,
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
		return (a, c) => (m(), r("div", mt, [
			e.required ? (m(), t(y(E), {
				key: 0,
				name: "mdi-star",
				color: "red",
				class: "q-pt-xs",
				size: "10px"
			})) : n("", !0),
			i("div", ht, v(e.text), 1),
			e.tooltip ? (m(), t(y(E), {
				key: 1,
				name: "mdi-information-variant-circle",
				color: "grey",
				size: "xs"
			}, {
				default: S(() => [s(y(He), null, {
					default: S(() => [o(v(e.tooltip), 1)]),
					_: 1
				})]),
				_: 1
			})) : n("", !0)
		]));
	}
}), W = /* @__PURE__ */ c({
	name: "HTextField",
	components: { QInput: D },
	__name: "HTextField",
	props: {
		modelValue: { required: !0 },
		modelModifiers: {}
	},
	emits: ["update:modelValue"],
	setup(e) {
		let n = b(e, "modelValue");
		return (e, r) => (m(), t(y(D), d({
			modelValue: n.value,
			"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
			outlined: "",
			clearable: "",
			"bottom-slots": ""
		}, e.$attrs), a({
			append: S(() => [g(e.$slots, "append")]),
			_: 2
		}, [e.$slots.before ? {
			name: "before",
			fn: S(() => [g(e.$slots, "before")]),
			key: "0"
		} : void 0, e.$slots.after ? {
			name: "after",
			fn: S(() => [g(e.$slots, "after")]),
			key: "1"
		} : void 0]), 1040, ["modelValue"]));
	}
}), G = /* @__PURE__ */ c({
	name: "HTreeField",
	components: {
		QInput: D,
		QPopupProxy: A,
		QCard: w,
		QCardSection: T,
		QTree: Ue
	},
	__name: "HTreeField",
	props: /* @__PURE__ */ u({
		items: {},
		label: {},
		value: {}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let n = e, r = b(e, "modelValue"), i = h([]), a = h(null), o = _(""), c = _(!1), l = (e) => {
			let t = [];
			for (let n of e) {
				let { children: e, ...r } = n;
				e && e.length && (t = t.concat(l(e))), t.push(r);
			}
			return t;
		}, u = (e) => {
			!Ye(e) && Ye(i.value) && (i.value = l(e), o.value = Je(i.value, (e) => e.id == r.value)?.name);
		};
		return x(() => n.items, (e) => {
			Ye(e) || u(e);
		}, { immediate: !0 }), x(r, (e) => {
			if (e) {
				let t = a.value?.getNodeByKey(e);
				t && (o.value = t.name), c.value = !1;
			}
		}, { immediate: !0 }), (n, i) => (m(), t(y(D), d({
			modelValue: o.value,
			"onUpdate:modelValue": i[2] ||= (e) => o.value = e,
			label: e.label,
			outlined: "",
			clearable: ""
		}, n.$attrs), {
			default: S(() => [s(y(A), {
				modelValue: c.value,
				"onUpdate:modelValue": i[1] ||= (e) => c.value = e
			}, {
				default: S(() => [s(y(w), null, {
					default: S(() => [s(y(T), null, {
						default: S(() => [s(y(Ue), {
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
		return (e, n) => (m(), r("div", { class: f(c.value) }, v(t.text), 3));
	}
}), gt = { class: "col-12 self-center" }, q = /* @__PURE__ */ c({
	name: "HCenterLabel",
	__name: "HCenterLabel",
	props: {
		height: { default: "100px" },
		text: {}
	},
	setup(e) {
		return (t, n) => (m(), r("div", {
			class: "row text-center",
			style: te(`height: ${e.height}`)
		}, [i("div", gt, v(e.text), 1)], 4));
	}
});
pt.install = (e) => {
	e.component(pt.name, pt);
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
//#endregion
//#region src/lib/enums/index.ts
var J = /* @__PURE__ */ function(e) {
	return e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e;
}({}), _t = /* @__PURE__ */ function(e) {
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
			return n.auto ? e.push(B(R.auto)) : n.cols ? e.push(B("", n.cols)) : (e.push(B()), n.xs && e.push(B(J.xs, n.xs)), n.sm && e.push(B(J.sm, n.sm)), n.md && e.push(B(J.md, n.md)), n.lg && e.push(B(J.lg, n.lg)), n.xl && e.push(B(J.xl, n.xl))), n.color && e.push(dt(n.color)), e;
		});
		return (e, t) => (m(), r("div", { class: f(i.value) }, [g(e.$slots, "default")], 2));
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
		}, n = e, i = ie([]), a = () => n.column ? t.column : t.row, o = (e = "", r = "") => {
			let i = t.gutter;
			return n.gutterCol && (i = t.gutterWithCol), r && (i = i + "-" + r), i = i + "-" + e, i;
		}, s = () => n.justify === "none" ? "" : t.justify + "-" + n.justify, c = () => {
			if (n.align !== "none") {
				let e = t.align;
				return n.self && (e = t.self), e + "-" + n.align;
			} else return "";
		}, l = (e) => o(e, "x"), u = (e) => o(e, "y"), d = (e) => {
			e && i.push(e);
		}, ee = () => i.length > 1 ? i.join(" ") : i.length === 1 ? i[0] : t.row, p = () => {
			d(a()), d(s()), d(c()), n.gutter !== "none" && (!n.horizontal && !n.vertical ? d(o(n.gutter)) : (n.horizontal && d(l(n.gutter)), n.vertical && d(u(n.gutter))));
		};
		return ne(() => {
			p();
		}), (e, t) => (m(), r("div", { class: f(ee()) }, [g(e.$slots, "default")], 2));
	}
}), vt = 6, Z = 4, Q = /* @__PURE__ */ c({
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
		let r = n, i = _(4), a = _(4), o = _(4), c = e(() => r.mode === "two"), l = (e) => e + r.offset, u = (e) => e - r.offset, ee = (e) => Math.abs(e % 2) === 0, f = () => Z + r.offset, te = () => 12 - f(), ne = () => Math.floor(te() / 2), re = (e) => {
			i.value = l(e), o.value = u(e);
		}, ie = (e) => {
			i.value = u(e), o.value = l(e);
		}, h = (e, t = 0) => {
			i.value = e, o.value = e + t;
		}, ae = () => {
			h(vt);
		}, oe = () => {
			a.value = Z;
		}, v = () => {
			oe(), h(Z);
		}, y = e(() => i.value > o.value), b = e(() => i.value < o.value), se = () => {
			if (c.value) switch (r.wider) {
				case "start":
					re(vt);
					break;
				case "end":
					ie(vt);
					break;
				default:
					ae();
					break;
			}
			else switch (r.wider) {
				case "center":
					a.value = f();
					let e = ne();
					ee(te()) ? h(e) : h(e, 1);
					break;
				case "start":
					oe(), re(Z);
					break;
				case "end":
					oe(), ie(Z);
					break;
				default:
					v();
					break;
			}
		};
		return x(() => r, () => {
			se();
		}, { immediate: !0 }), (e, n) => c.value ? (m(), t(X, p(d({ key: 0 }, e.$attrs)), {
			default: S(() => [s(Y, { cols: i.value }, {
				default: S(() => [y.value ? g(e.$slots, "default", { key: 0 }) : g(e.$slots, "left", { key: 1 })]),
				_: 3
			}, 8, ["cols"]), s(Y, { cols: o.value }, {
				default: S(() => [b.value ? g(e.$slots, "default", { key: 0 }) : g(e.$slots, "right", { key: 1 })]),
				_: 3
			}, 8, ["cols"])]),
			_: 3
		}, 16)) : (m(), t(X, p(d({ key: 1 }, e.$attrs)), {
			default: S(() => [
				s(Y, { cols: i.value }, {
					default: S(() => [g(e.$slots, "left")]),
					_: 3
				}, 8, ["cols"]),
				s(Y, { cols: a.value }, {
					default: S(() => [g(e.$slots, "default")]),
					_: 3
				}, 8, ["cols"]),
				s(Y, { cols: o.value }, {
					default: S(() => [g(e.$slots, "right")]),
					_: 3
				}, 8, ["cols"])
			]),
			_: 3
		}, 16));
	}
});
Y.install = (e) => {
	e.component(Y.name, Y);
}, Q.install = (e) => {
	e.component(Q.name, Q);
}, X.install = (e) => {
	e.component(X.name, X);
};
//#endregion
//#region src/HDateTime/HDuration.vue
var yt = /* @__PURE__ */ c({
	name: "HDuration",
	components: {
		HSelect: V,
		HTextField: W,
		HContainer: Q
	},
	__name: "HDuration",
	props: {
		modelValue: { default: "" },
		modelModifiers: {}
	},
	emits: ["update:modelValue"],
	setup(e) {
		let n = b(e, "modelValue"), r = _(0), i = _(""), a = h(ct), o = (e) => {
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
				let r = t;
				n.value = Ke.duration(e, r).toISOString();
			}
		};
		return x(n, (e) => {
			e && o(e);
		}, { immediate: !0 }), x(i, (e) => {
			e && c(r.value, e);
		}), x(r, (e) => {
			e && c(e, i.value);
		}), (e, n) => (m(), t(y(Q), {
			mode: "two",
			gutter: "xs",
			"gutter-col": "",
			horizontal: ""
		}, {
			left: S(() => [s(y(W), {
				modelValue: r.value,
				"onUpdate:modelValue": n[0] ||= (e) => r.value = e,
				modelModifiers: { number: !0 },
				label: "数值",
				placeholder: "请输入数值",
				type: "number",
				"hide-hint": ""
			}, null, 8, ["modelValue"])]),
			right: S(() => [s(y(V), {
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
}, yt.install = (e) => {
	e.component(yt.name, yt);
};
//#endregion
//#region src/HDivider/HDivider.vue
var bt = /* @__PURE__ */ c({
	name: "HDivider",
	components: {
		HContainer: Q,
		HLabel: K,
		QSeparator: j
	},
	__name: "HDivider",
	props: {
		wider: { default: "center" },
		weight: { default: "medium" },
		offset: { default: 0 },
		label: { default: "" }
	},
	setup(e) {
		return (n, r) => (m(), t(y(Q), {
			mode: "three",
			offset: e.offset,
			wider: e.wider,
			align: "center"
		}, {
			left: S(() => [s(y(j))]),
			right: S(() => [s(y(j))]),
			default: S(() => [s(y(K), {
				text: e.label,
				weight: e.weight
			}, null, 8, ["text", "weight"])]),
			_: 1
		}, 8, ["offset", "wider"]));
	}
});
//#endregion
//#region src/HDivider/index.ts
bt.install = (e) => {
	e.component(bt.name, bt);
};
//#endregion
//#region src/HDialog/HDialog.vue?vue&type=script&setup=true&lang.ts
var xt = { class: "text-h6" }, St = /* @__PURE__ */ c({
	name: "HDialog",
	components: {
		QDialog: de,
		QCard: w,
		QCardSection: T,
		QSpace: ge,
		QBtn: C,
		QCardActions: le,
		QInnerLoading: fe,
		QSpinnerDots: Te
	},
	__name: "HDialog",
	props: /* @__PURE__ */ u({
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
	emits: /* @__PURE__ */ u([
		"close",
		"cancel",
		"confirm"
	], ["update:modelValue", "update:loading"]),
	setup(e, { emit: r }) {
		let a = e, o = b(e, "modelValue"), c = b(e, "loading"), l = r, u = () => {
			o.value = !1, l("close");
		}, ee = () => {
			o.value = !1, l("cancel");
		}, f = () => {
			c.value = !0, a.externalClose || (o.value = !1), l("confirm");
		};
		return (r, a) => (m(), t(y(de), d({
			modelValue: o.value,
			"onUpdate:modelValue": a[3] ||= (e) => o.value = e,
			persistent: ""
		}, r.$attrs), {
			default: S(() => [s(y(w), {
				class: "q-py-none",
				style: te(`min-width: ${e.height}`)
			}, {
				default: S(() => [
					s(y(T), { class: "row items-center" }, {
						default: S(() => [
							i("div", xt, v(e.title), 1),
							s(y(ge)),
							e.hideClose ? n("", !0) : (m(), t(y(C), {
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
					s(y(T), null, {
						default: S(() => [g(r.$slots, "default")]),
						_: 3
					}),
					s(y(le), {
						align: "right",
						class: "text-primary"
					}, {
						default: S(() => [e.hideCancel ? n("", !0) : (m(), t(y(C), {
							key: 0,
							label: "取消",
							color: "red",
							onClick: a[1] ||= (e) => ee()
						})), e.hideConfirm ? n("", !0) : (m(), t(y(C), {
							key: 1,
							label: e.confirmLabel,
							color: "primary",
							onClick: a[2] ||= (e) => f()
						}, null, 8, ["label"]))]),
						_: 1
					}),
					s(y(fe), { showing: c.value }, {
						default: S(() => [s(y(Te), {
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
St.install = (e) => {
	e.component(St.name, St);
};
//#endregion
//#region src/HList/HListItem.vue
var Ct = /* @__PURE__ */ c({
	name: "HListItem",
	components: {
		QItem: O,
		QItemSection: k,
		QIcon: E
	},
	directives: {
		ClosePopup: ce,
		Ripple: We
	},
	__name: "HListItem",
	props: {
		label: {},
		icon: {}
	},
	setup(e) {
		return (n, r) => {
			let i = ae("close-popup"), a = ae("ripple");
			return se((m(), t(y(O), { clickable: "" }, {
				default: S(() => [s(y(k), { avatar: "" }, {
					default: S(() => [s(y(E), { name: e.icon }, null, 8, ["name"])]),
					_: 1
				}), s(y(k), null, {
					default: S(() => [o(v(e.label), 1)]),
					_: 1
				})]),
				_: 1
			})), [[i], [a]]);
		};
	}
});
//#endregion
//#region src/HList/index.ts
Ct.install = (e) => {
	e.component(Ct.name, Ct);
};
//#endregion
//#region src/HLoading/HLoading.vue
var wt = /* @__PURE__ */ c({
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
		QInnerLoading: fe
	},
	__name: "HLoading",
	props: {
		type: { default: "DEFAULT" },
		color: { default: "primary" },
		size: { default: "60px" }
	},
	setup(e) {
		return (n, r) => (m(), t(y(fe), {
			showing: "",
			color: e.color,
			style: { "z-index": "50" }
		}, {
			default: S(() => [(m(), t(oe(e.type), {
				size: e.size,
				color: e.color
			}, null, 8, ["size", "color"]))]),
			_: 1
		}, 8, ["color"]));
	}
});
//#endregion
//#region src/HLoading/index.ts
wt.install = (e) => {
	e.component(wt.name, wt);
};
//#endregion
//#region src/HPagination/HPagination.vue
var Tt = /* @__PURE__ */ c({
	name: "HPagination",
	components: { QPagination: me },
	__name: "HPagination",
	props: /* @__PURE__ */ u({
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
		let n = b(e, "modelValue");
		return (r, i) => (m(), t(y(me), d({
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
Tt.install = (e) => {
	e.component(Tt.name, Tt);
};
//#endregion
//#region src/HParticles/particles.ts
var Et = { particles: {
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
} }, Dt = ["id"], Ot = /* @__PURE__ */ c({
	name: "HParticles",
	__name: "HParticles",
	setup(e) {
		let t = h("HParticles"), n, i = async (e, t = !0) => {
			await Qe(e, !1), await $e(e, !1), await e.addPreset("triangles", Et, t);
		};
		return ne(() => {
			ee(async () => {
				Ze.init(), await i(Ze), n = await Ze.load({
					id: t.value,
					options: {
						fullScreen: { zIndex: 1 },
						preset: "triangles"
					}
				});
			});
		}), re(() => {
			n &&= (n.destroy(), void 0);
		}), (e, n) => (m(), r("div", { id: t.value }, [g(e.$slots, "default")], 8, Dt));
	}
});
//#endregion
//#region src/HParticles/index.ts
Ot.install = (e) => {
	e.component(Ot.name, Ot);
};
//#endregion
//#region src/HBackground/HSignInCornerBottom.vue?vue&type=script&setup=true&lang.ts
var kt = {
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	height: "896",
	width: "967.8852157128662"
}, At = {
	id: "linearGradient-3",
	x1: "0.5",
	y1: "0",
	x2: "0.5",
	y2: "1"
}, jt = ["stop-color"], Mt = ["stop-color"], Nt = /* @__PURE__ */ c({
	name: "HSignInCornerBottom",
	__name: "HSignInCornerBottom",
	props: {
		startColor: { default: "#28aff0" },
		endColor: { default: "#120fc4" }
	},
	setup(e) {
		return (t, n) => (m(), r("svg", kt, [i("defs", null, [n[0] ||= i("path", {
			id: "path-2",
			opacity: "1",
			"fill-rule": "evenodd",
			d: "M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896\n			C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806\n			200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"
		}, null, -1), i("linearGradient", At, [i("stop", {
			offset: "0",
			"stop-color": e.startColor,
			"stop-opacity": "1"
		}, null, 8, jt), i("stop", {
			offset: "1",
			"stop-color": e.endColor,
			"stop-opacity": "1"
		}, null, 8, Mt)])]), n[1] ||= i("g", { opacity: "1" }, [i("use", {
			"xlink:href": "#path-2",
			fill: "url(#linearGradient-3)",
			"fill-opacity": "1"
		})], -1)]));
	}
}), Pt = {
	height: "1337",
	width: "1337"
}, Ft = {
	id: "linearGradient-2",
	x1: "0.79",
	y1: "0.62",
	x2: "0.21",
	y2: "0.86"
}, It = ["stop-color"], Lt = ["stop-color"], Rt = /* @__PURE__ */ c({
	name: "HSignInCornerTop",
	__name: "HSignInCornerTop",
	props: {
		startColor: { default: "#28aff0" },
		endColor: { default: "#120fc4" }
	},
	setup(e) {
		return (t, n) => (m(), r("svg", Pt, [i("defs", null, [n[0] ||= i("path", {
			id: "path-1",
			opacity: "1",
			"fill-rule": "evenodd",
			d: "M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"
		}, null, -1), i("linearGradient", Ft, [i("stop", {
			offset: "0",
			"stop-color": e.startColor,
			"stop-opacity": "1"
		}, null, 8, It), i("stop", {
			offset: "1",
			"stop-color": e.endColor,
			"stop-opacity": "1"
		}, null, 8, Lt)])]), n[1] ||= i("g", { opacity: "1" }, [i("use", {
			"xlink:href": "#path-1",
			fill: "url(#linearGradient-2)",
			"fill-opacity": "1"
		})], -1)]));
	}
}), zt = { class: "corner-top" }, Bt = { class: "corner-bottom" }, $ = /* @__PURE__ */ rt(/* @__PURE__ */ c({
	name: "HSignInBackground",
	components: {
		HSignInCornerBottom: Nt,
		HSignInCornerTop: Rt
	},
	__name: "HSignInBackground",
	props: {
		startColor: {},
		endColor: {}
	},
	setup(e) {
		return (t, n) => (m(), r("div", null, [i("div", zt, [s(Rt, {
			"start-color": e.startColor,
			"end-color": e.endColor
		}, null, 8, ["start-color", "end-color"])]), i("div", Bt, [s(Nt, {
			"start-color": e.endColor,
			"end-color": e.startColor
		}, null, 8, ["start-color", "end-color"])])]));
	}
}), [["__scopeId", "data-v-957924ed"]]);
//#endregion
//#region src/HBackground/index.ts
$.install = (e) => {
	e.component($.name, $);
};
//#endregion
//#region src/index.ts
var Vt = [
	M,
	F,
	q,
	I,
	Y,
	Q,
	L,
	bt,
	St,
	yt,
	N,
	pt,
	U,
	G,
	K,
	Ct,
	wt,
	Tt,
	Ot,
	X,
	V,
	$,
	H,
	W,
	P
], Ht = { install: (e) => {
	Vt.map((t) => t.install(e));
} };
//#endregion
export { J as BreakPointEnum, ut as Content, ct as DURATION_UNITS, R as Grid, M as HButton, F as HCardTitle, q as HCenterLabel, I as HChartCard, Y as HColumn, Q as HContainer, L as HDateTime, St as HDialog, bt as HDivider, yt as HDuration, U as HFieldLabel, N as HIconButton, pt as HIconSelect, K as HLabel, Ct as HListItem, wt as HLoading, Tt as HPagination, Ot as HParticles, X as HRow, V as HSelect, $ as HSignInBackground, H as HSwitch, W as HTextField, G as HTreeField, P as HVisibilityButton, _t as SpinnerEnum, lt as Symbol, ft as createBackgroundColor, z as createClass, B as createColClass, dt as createTextColor, Ht as default, Ge as moment };
