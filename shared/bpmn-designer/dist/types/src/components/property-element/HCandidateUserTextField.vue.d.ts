import { PropType } from 'vue';
declare const __VLS_export: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    selection: {
        type: PropType<"single" | "multiple">;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<string>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    selection: {
        type: PropType<"single" | "multiple">;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<string>;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    label: string;
    title: string;
    selection: "single" | "multiple";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
