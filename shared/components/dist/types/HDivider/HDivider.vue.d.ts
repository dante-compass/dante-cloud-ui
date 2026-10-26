interface Props {
    wider?: 'start' | 'center' | 'end';
    weight?: 'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'bolder';
    offset?: number;
    label?: string;
}
declare const __VLS_export: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    label: string;
    offset: number;
    weight: "bold" | "thin" | "light" | "regular" | "medium" | "bolder";
    wider: "center" | "start" | "end";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
