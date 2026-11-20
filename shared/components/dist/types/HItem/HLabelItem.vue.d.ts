interface Props {
    label: string;
    required?: boolean;
    justify?: 'start' | 'center' | 'end' | null;
    align?: 'start' | 'center' | 'end' | null;
    right?: boolean;
}
declare const __VLS_template: () => {
    __VLS_Slots: {
        default?: (props: {}) => any;
    } & {
        append?: (props: {}) => any;
    };
};
type __VLS_Slots = ReturnType<typeof __VLS_template>['__VLS_Slots'];
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    align: "center" | "start" | "end" | null;
    required: boolean;
    right: boolean;
    justify: "center" | "start" | "end" | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
