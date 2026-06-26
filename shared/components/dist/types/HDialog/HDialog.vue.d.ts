interface Props {
    title?: string;
    height?: string;
    confirmLabel?: string;
    spinnerSize?: string;
    hideConfirm?: boolean;
    hideCancel?: boolean;
    hideClose?: boolean;
    /**
     * 由组件外部，即父组件决定是否关闭对话框。
     * 正常情况下，点击 confirm 即关闭对话框。但这不适用于需要外部接入的情况，比如说表单校验，所以增加该参数，由外部逻辑控制对话框的关闭与否。
     */
    externalClose?: boolean;
}
type __VLS_Props = Props;
declare const showDialog: import('vue').ModelRef<boolean, string, boolean, boolean>;
declare const showLoading: import('vue').ModelRef<boolean, string, boolean, boolean>;
type __VLS_ModelProps = {
    modelValue: typeof showDialog['value'];
    'loading'?: typeof showLoading['value'];
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare var __VLS_38: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_38) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
    close: () => any;
    cancel: () => any;
    confirm: () => any;
    "update:loading": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
    onConfirm?: (() => any) | undefined;
    "onUpdate:loading"?: ((value: boolean) => any) | undefined;
}>, {
    title: string;
    height: string;
    confirmLabel: string;
    spinnerSize: string;
    hideConfirm: boolean;
    hideCancel: boolean;
    hideClose: boolean;
    externalClose: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
