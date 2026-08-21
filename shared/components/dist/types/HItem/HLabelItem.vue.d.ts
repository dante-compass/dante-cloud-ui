interface Props {
    label: string;
    required?: boolean;
    justify?: 'start' | 'center' | 'end' | null;
    align?: 'start' | 'center' | 'end' | null;
    right?: boolean;
}
declare var __VLS_6: {}, __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
} & {
    append?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    align: "start" | "center" | "end" | null;
    required: boolean;
    right: boolean;
    justify: "start" | "center" | "end" | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
