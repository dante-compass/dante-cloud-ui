interface Props {
    trueValue?: boolean | string | number;
    falseValue?: boolean | string | number;
    color?: string;
}
type __VLS_Props = Props;
type __VLS_ModelProps = {
    modelValue?: boolean | string | number;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
}>, {
    color: string;
    trueValue: boolean | string | number;
    falseValue: boolean | string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
