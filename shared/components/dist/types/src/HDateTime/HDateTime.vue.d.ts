declare const dateTimeValue: import('vue').ModelRef<string, string, string, string>;
type __VLS_ModelProps = {
    modelValue?: typeof dateTimeValue['value'];
};
declare const __VLS_export: import('vue').DefineComponent<__VLS_ModelProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_ModelProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
