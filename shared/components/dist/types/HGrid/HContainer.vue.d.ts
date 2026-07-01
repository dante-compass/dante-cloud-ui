interface Props {
    mode?: 'two' | 'three';
    /**
     * 1. 如果是三列布局：
     * default：三列相等
     * start：左边宽，中间默认，右边窄
     * center：两边相同，中间宽
     * end：右边宽，中间默认，左边窄
     *
     * 2.如果是两列布局：
     * default：左右相等
     * start：左边宽，右边窄
     * end：右边宽，左边窄
     */
    wider?: 'default' | 'start' | 'center' | 'end';
    /**
     * 1. 如果是三列布局
     * 1.1 如果 wider 是 center，那么 offset 最大值为6，即 [0, 6]
     * 1.2 如果 wider 是 start 或 end，那么 offset 最大值为3，即[0, 3]
     * 2. 如果是两列布局
     * 那么 offset 最大值为5，即 [0, 3]
     */
    offset?: number;
}
declare var __VLS_14: {}, __VLS_16: {}, __VLS_24: {}, __VLS_26: {}, __VLS_41: {}, __VLS_49: {}, __VLS_57: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_14) => any;
} & {
    left?: (props: typeof __VLS_16) => any;
} & {
    default?: (props: typeof __VLS_24) => any;
} & {
    right?: (props: typeof __VLS_26) => any;
} & {
    left?: (props: typeof __VLS_41) => any;
} & {
    default?: (props: typeof __VLS_49) => any;
} & {
    right?: (props: typeof __VLS_57) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    offset: number;
    mode: "two" | "three";
    wider: "default" | "start" | "center" | "end";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
