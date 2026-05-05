type __VLS_ModelProps = {
    modelValue: string | number | null | undefined;
};
declare var __VLS_9: {}, __VLS_12: {}, __VLS_15: {};
type __VLS_Slots = {} & {
    append?: (props: typeof __VLS_9) => any;
} & {
    before?: (props: typeof __VLS_12) => any;
} & {
    after?: (props: typeof __VLS_15) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_ModelProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_ModelProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
