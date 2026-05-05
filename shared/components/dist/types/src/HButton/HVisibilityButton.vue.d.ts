declare const isShowPassword: import('vue').ModelRef<boolean | undefined, string, boolean | undefined, boolean | undefined>;
type __VLS_ModelProps = {
    modelValue?: typeof isShowPassword['value'];
};
declare const __VLS_export: import('vue').DefineComponent<__VLS_ModelProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_ModelProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
