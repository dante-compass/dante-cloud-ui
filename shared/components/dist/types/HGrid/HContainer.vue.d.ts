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
declare var __VLS_13: {}, __VLS_15: {}, __VLS_23: {}, __VLS_25: {}, __VLS_39: {}, __VLS_47: {}, __VLS_55: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_13) => any;
} & {
    left?: (props: typeof __VLS_15) => any;
} & {
    default?: (props: typeof __VLS_23) => any;
} & {
    right?: (props: typeof __VLS_25) => any;
} & {
    left?: (props: typeof __VLS_39) => any;
} & {
    default?: (props: typeof __VLS_47) => any;
} & {
    right?: (props: typeof __VLS_55) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    offset: number;
    mode: "two" | "three";
    wider: "default" | "center" | "start" | "end";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
