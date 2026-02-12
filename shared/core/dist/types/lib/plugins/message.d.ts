import { SweetAlertIcon, SweetAlertResult, default as Swal } from 'sweetalert2';
import { ThemeModeEnum } from '../../enums';
/**
 * 这里使用单例模式，主要是因为将静态类，赋值给Vue.prototype会出现 Property '' is a static member of type '' 错误。
 * 参考以下文章
 * {@see https://techformist.com/static-variables-methods-typescript/}
 * {@see https://www.xspdf.com/resolution/54250655.html}
 * {@see https://www.typescriptlang.org/docs/handbook/classes.html#static-properties}
 *
 * 单例模式饿汉式与懒汉式
 * {@see https://zhuanlan.zhihu.com/p/129264092}
 */
declare class Notify {
    private static _instance;
    private static _initialized;
    private theme;
    private constructor();
    /**
     * 初始化单例（仅允许一次）
     * @param {ThemeModeEnum} newTheme 系统主题
     * @returns {Notify} 单例实例
     */
    static initialize(newTheme: ThemeModeEnum): Notify;
    /**
     * 获取单例实例
     * @returns {Toast} 单例实例
     */
    static getInstance(): Notify;
    setTheme(newTheme: ThemeModeEnum): void;
    information(title: string, text: string, icon: SweetAlertIcon): Promise<SweetAlertResult<string>>;
    info(title: string, text?: string): Promise<SweetAlertResult<string>>;
    error(title: string, text?: string): Promise<SweetAlertResult<string>>;
    warning(title: string, text?: string): Promise<SweetAlertResult<string>>;
    success(title: string, text?: string): Promise<SweetAlertResult<string>>;
    question(title: string, text?: string): Promise<SweetAlertResult<string>>;
    private getConfirmButtonColor;
    standardDeleteNotify(onConfirm: () => void, onCancel?: () => void): void;
    signOutNotify(onConfirm: () => void, onCancel?: () => void): void;
    tokenExpiresNotify(title: string, text: string, icon: SweetAlertIcon, onClose: () => void): void;
}
declare const notify: Notify;
declare class Toast {
    private static _instance;
    private static _initialized;
    private theme;
    private constructor();
    /**
     * 初始化单例（仅允许一次）
     * @param {ThemeModeEnum} newTheme 系统主题
     * @returns {Toast} 单例实例
     */
    static initialize(newTheme: ThemeModeEnum): Toast;
    /**
     * 获取单例实例
     * @returns {Toast} 单例实例
     */
    static getInstance(): Toast;
    setTheme(newTheme: ThemeModeEnum): void;
    information(title: string, icon: SweetAlertIcon): Promise<SweetAlertResult<string>>;
    info(text: string): Promise<SweetAlertResult<string>>;
    error(text: string): Promise<SweetAlertResult<string>>;
    warning(text: string): Promise<SweetAlertResult<string>>;
    success(text: string): Promise<SweetAlertResult<string>>;
    question(text: string): Promise<SweetAlertResult<string>>;
}
declare const toast: Toast;
declare const changeSwalTheme: (newTheme: ThemeModeEnum) => void;
export { Swal, notify, toast, changeSwalTheme };
