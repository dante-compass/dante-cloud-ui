import { Fragment as e, computed as t, createElementBlock as n, createVNode as r, defineComponent as i, h as a, openBlock as o, reactive as s, renderList as c, resolveComponent as l, watch as u } from "vue";
import { nanoid as d } from "nanoid";
import { cloneDeep as f, isEmpty as p } from "lodash-es";
import { QIcon as m, QInput as h, QItem as g, QItemSection as _, QList as v } from "quasar";
//#region src/lib/core/engine.ts
var y = (e) => "onUpdate:" + e, b = (e) => "update:" + e, x = (e, t, n) => {
	let r = y(e), i = b(e), a = {};
	return a[e] = t[e], a[r] = (e) => {
		n.emit(i, e);
	}, { ...a };
}, S = (e, t, n) => {
	let r = {};
	return Object.keys(e).forEach((e) => {
		let i = x(e, t, n);
		r = Object.assign(r, i);
	}), r;
}, C = (e, t, n) => e.map((e) => {
	let r = e.children ? e.children : [], i = e.models ? e.models : {}, o = {};
	return i && (o = S(i, t, n)), e.children ? a(l(e.tag), {
		...e.attrs,
		...o
	}, () => C(r, t, n)) : a(l(e.tag), {
		...e.attrs,
		...o
	}, e.text ? () => e.text : () => {});
}), w = {
	TEXT_FIELD: {
		name: "TEXT_FIELD",
		schema: {
			title: "单行文本",
			tag: "q-input",
			attrs: {
				outlined: !0,
				"bottom-slots": !0,
				label: "单行文本",
				type: "text"
			},
			models: { modelValue: {
				name: "",
				type: "String"
			} }
		}
	},
	TEXT_AREA: {
		name: "TEXT_AREA",
		schema: {
			title: "多行文本",
			tag: "q-input",
			attrs: {
				outlined: !0,
				"bottom-slots": !0,
				label: "多行文本",
				type: "textarea"
			},
			models: { modelValue: {
				name: "",
				type: "String"
			} }
		}
	},
	PASSWORD: {
		name: "PASSWORD",
		schema: {
			title: "密码输入",
			tag: "q-input",
			attrs: {
				filled: !0,
				label: "密码输入",
				type: "password"
			},
			models: { modelValue: {
				name: "",
				type: "String"
			} }
		}
	},
	DATE_PICKER: {
		name: "DATE_PICKER",
		schema: {
			title: "日期选择",
			tag: "q-input",
			attrs: {
				filled: !0,
				label: "日期选择",
				"stack-label": !0,
				type: "date"
			},
			models: { modelValue: {
				name: "",
				type: "String"
			} }
		}
	},
	TIME_PICKER: {
		name: "TIME_PICKER",
		schema: {
			title: "时间选择",
			tag: "q-input",
			attrs: {
				filled: !0,
				label: "时间选择",
				"stack-label": !0,
				type: "time"
			},
			models: { modelValue: {
				name: "",
				type: "String"
			} }
		}
	},
	SLIDER: {
		name: "SLIDER",
		schema: {
			title: "滑块",
			tag: "q-input",
			attrs: {
				rounded: !0,
				filled: !0,
				label: "Rounded filled"
			},
			models: { modelValue: {
				name: "",
				type: "String"
			} }
		}
	},
	RANGE_SLIDER: {
		name: "RANGE_SLIDER",
		schema: {
			title: "范围滑块",
			tag: "q-input",
			attrs: {
				rounded: !0,
				filled: !0,
				label: "Rounded filled"
			},
			models: { modelValue: {
				name: "",
				type: "String"
			} }
		}
	},
	CHECKBOX: {
		name: "CHECKBOX",
		schema: {
			title: "复选框",
			tag: "q-input",
			attrs: {
				rounded: !0,
				filled: !0,
				label: "Rounded filled"
			},
			models: { modelValue: {
				name: "",
				type: "String"
			} }
		}
	},
	SWITCHS: {
		name: "SWITCHS",
		schema: {
			title: "开关",
			tag: "q-input",
			attrs: {
				rounded: !0,
				filled: !0,
				label: "Rounded filled"
			},
			models: { modelValue: {
				name: "",
				type: "String"
			} }
		}
	},
	SELECT_SINGLE: {
		name: "SELECT_SINGLE",
		schema: {
			title: "单项下拉",
			tag: "q-input",
			attrs: {
				rounded: !0,
				filled: !0,
				label: "Rounded filled"
			},
			models: {}
		}
	},
	COMBOBOX: {
		name: "COMBOBOX",
		schema: {
			title: "组合框",
			tag: "q-input",
			attrs: {
				rounded: !0,
				filled: !0,
				label: "Rounded filled"
			},
			models: {}
		}
	},
	COLOR_PICKER: {
		name: "COLOR_PICKER",
		schema: {
			title: "颜色选择",
			tag: "q-input",
			attrs: {
				rounded: !0,
				filled: !0,
				label: "Rounded filled"
			},
			models: {}
		}
	},
	RADIO: {
		name: "RADIO",
		schema: {
			title: "单选框组",
			tag: "q-input",
			attrs: {
				rounded: !0,
				filled: !0,
				label: "Rounded filled"
			},
			models: {}
		}
	},
	FILE_INPUT: {
		name: "FILE_INPUT",
		schema: {
			title: "上传",
			tag: "q-input",
			attrs: {
				rounded: !0,
				filled: !0,
				label: "Rounded filled"
			},
			models: {}
		}
	},
	IMAGES: {
		name: "IMAGES",
		schema: {
			title: "图片",
			tag: "q-input",
			attrs: {
				rounded: !0,
				filled: !0,
				label: "Rounded filled"
			},
			models: {}
		}
	}
}, T = [
	{
		title: w.TEXT_FIELD.schema.title,
		icon: "mdi-form-textbox",
		name: "TextField",
		document: "https://quasar.dev/vue-components/input",
		schemaName: w.TEXT_FIELD.name
	},
	{
		title: w.TEXT_AREA.schema.title,
		icon: "mdi-form-textarea",
		name: "TextArea",
		document: "https://quasar.dev/vue-components/input",
		schemaName: w.TEXT_AREA.name
	},
	{
		title: w.PASSWORD.schema.title,
		icon: "mdi-form-textbox-password",
		name: "Password",
		document: "https://quasar.dev/vue-components/input",
		schemaName: w.PASSWORD.name
	}
], E = [
	{
		title: w.DATE_PICKER.schema.title,
		icon: "mdi-calendar",
		name: "Date",
		document: "https://quasar.dev/vue-components/input",
		schemaName: w.DATE_PICKER.name
	},
	{
		title: w.TIME_PICKER.schema.title,
		icon: "mdi-clock-outline",
		name: "Time",
		document: "https://quasar.dev/vue-components/input",
		schemaName: w.TIME_PICKER.name
	},
	{
		title: w.SLIDER.schema.title,
		icon: "mdi-tune-variant",
		name: "Slider",
		document: "https://vuetifyjs.com/zh-Hans/components/sliders/",
		schemaName: w.SLIDER.name
	},
	{
		title: w.RANGE_SLIDER.schema.title,
		icon: "mdi-valve-closed",
		name: "Range_Slider",
		document: "https://vuetifyjs.com/zh-Hans/components/sliders/",
		schemaName: w.RANGE_SLIDER.name
	},
	{
		title: w.CHECKBOX.schema.title,
		icon: "mdi-checkbox-marked",
		name: "Checkbox",
		document: "https://vuetifyjs.com/zh-Hans/components/checkboxes/",
		schemaName: w.CHECKBOX.name
	},
	{
		title: w.SWITCHS.schema.title,
		icon: "mdi-toggle-switch",
		name: "Switch",
		document: "https://vuetifyjs.com/zh-Hans/components/switches/",
		schemaName: w.SWITCHS.name
	},
	{
		title: w.SELECT_SINGLE.schema.title,
		icon: "mdi-form-dropdown",
		name: "Select",
		document: "https://vuetifyjs.com/zh-Hans/components/selects/",
		schemaName: w.SELECT_SINGLE.name
	},
	{
		title: w.COMBOBOX.schema.title,
		icon: "mdi-vector-difference-ab",
		name: "Combobox",
		document: "https://vuetifyjs.com/zh-Hans/components/combobox/",
		schemaName: w.COMBOBOX.name
	},
	{
		title: w.RADIO.schema.title,
		icon: "mdi-checkbox-marked-circle",
		name: "Select",
		document: "https://vuetifyjs.com/zh-Hans/components/selection-controls/",
		schemaName: w.RADIO.name
	},
	{
		title: w.COLOR_PICKER.schema.title,
		icon: "mdi-calendar",
		name: "Select",
		document: "https://vuetifyjs.com/zh-Hans/components/color-pickers/",
		schemaName: w.COLOR_PICKER.name
	},
	{
		title: w.FILE_INPUT.schema.title,
		icon: "mdi-calendar",
		name: "Select",
		document: "https://vuetifyjs.com/zh-Hans/components/file-inputs/",
		schemaName: w.FILE_INPUT.name
	},
	{
		title: w.IMAGES.schema.title,
		icon: "mdi-file-image",
		name: "Image",
		document: "https://vuetifyjs.com/zh-Hans/components/images/",
		schemaName: w.IMAGES.name
	}
], D = [{
	title: "输入型组件",
	list: T
}, {
	title: "选择型组件",
	list: E
}], O = class e {
	static instance = new e();
	constructor() {}
	static getInstance() {
		return this.instance;
	}
	generateShortId() {
		return d();
	}
	getDefinition(e) {
		return w[e];
	}
	setIdentityValues(e, t) {
		let n = t + "_" + this.generateShortId();
		e.id = n, e.config.formId = n, e.config.renderKey = +/* @__PURE__ */ new Date();
	}
	setElementValues(e, t, n) {
		let r = {
			id: "",
			config: {},
			schema: {}
		};
		return this.setIdentityValues(r, t), r.config.name = t, r.config.panel = n, r.schema = f(e), r;
	}
	create(e) {
		let t = this.getDefinition(e.schemaName), n = t.schema, r = t.name, i = e.name;
		return this.setElementValues(n, i, r);
	}
	clone(e) {
		let t = f(e);
		return this.setIdentityValues(t, e.config.name), t;
	}
}.getInstance(), k = i({
	name: "HRendererEngine",
	props: {
		modelValue: { type: [
			String,
			Number,
			Array,
			Object
		] },
		schemas: {
			type: Array,
			default: () => []
		}
	},
	setup(e, t) {
		let n = e.schemas;
		return () => C(n, e, t);
	}
}), A = i({
	name: "HRendererForm",
	props: {
		modelValue: {
			type: Object,
			default: () => ({}),
			required: !0
		},
		elements: {
			type: Array,
			required: !0
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: n }) {
		let r = t({
			get: () => e.modelValue,
			set: (e) => {
				n("update:modelValue", e);
			}
		}), i = (e) => e.schema.models.modelValue, a = (e) => {
			switch (e) {
				case "Number": return 0;
				case "Array": return [];
				case "Object": return {};
				default: return "";
			}
		}, o = s(p(r.value) ? (() => {
			let t = {};
			return e.elements && e.elements.map((e) => {
				let n = i(e);
				n.name && (t[n.name] = a(n.type));
			}), t;
		})() : r.value);
		return u(o, (e) => {
			r.value = { ...e };
		}), {
			getDefaultModel: i,
			modelObject: r,
			state: o
		};
	}
}), j = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
//#endregion
//#region src/components/HRendererForm.vue
function M(t, i, a, s, l, u) {
	let d = k;
	return o(!0), n(e, null, c(t.elements, (e) => (o(), n("div", { key: e.id }, [r(d, {
		modelValue: t.state[t.getDefaultModel(e).name],
		"onUpdate:modelValue": (n) => t.state[t.getDefaultModel(e).name] = n,
		schemas: [e.schema]
	}, null, 8, [
		"modelValue",
		"onUpdate:modelValue",
		"schemas"
	])]))), 128);
}
var N = /* @__PURE__ */ j(A, [["render", M]]);
N.install = (e) => {
	e.component(N.name, N);
}, k.install = (e) => {
	e.component(k.name, k);
};
//#endregion
//#region src/index.ts
var P = [
	m,
	v,
	g,
	_,
	h
], F = [k, N], I = { install: (e) => {
	F.map((t) => e.component(t.name, t)), P.map((t) => e.component(t.name, t));
} };
//#endregion
export { O as ElementUtils, k as HRendererEngine, N as HRendererForm, w as SCHEMA_DEFINITIONS, D as WIDGET_DEFINITIONS, I as default, C as renderSchema };
