import type { SweetAlertIcon, SweetAlertResult, SweetAlertTheme } from 'sweetalert2';

import { ThemeModeEnum } from '@/enums';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const SwalToast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

const convertThemeType = (theme: ThemeModeEnum): SweetAlertTheme => {
  const result = theme === ThemeModeEnum.SYSTEM ? 'auto' : theme;
  return result as SweetAlertTheme;
};

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
class Notify {
  // 静态私有实例引用
  private static _instance: Notify | null = null;

  // 初始化标志
  private static _initialized = false;

  private theme: SweetAlertTheme;

  private constructor(newTheme: ThemeModeEnum) {
    this.theme = convertThemeType(newTheme);
  }

  /**
   * 初始化单例（仅允许一次）
   * @param {ThemeModeEnum} newTheme 系统主题
   * @returns {Notify} 单例实例
   */
  public static initialize(newTheme: ThemeModeEnum): Notify {
    if (Notify._initialized) {
      throw new Error('RouterUtilities has already been initialized');
    }

    Notify._instance = new Notify(newTheme);
    Notify._initialized = true;
    return Notify._instance;
  }

  /**
   * 获取单例实例
   * @returns {Toast} 单例实例
   */
  public static getInstance(): Notify {
    if (!Notify._instance) {
      throw new Error('RouterUtilities not initialized. Call initialize() first.');
    }
    return Notify._instance;
  }

  public setTheme(newTheme: ThemeModeEnum): void {
    this.theme = convertThemeType(newTheme);
  }

  public information(
    title: string,
    text: string,
    icon: SweetAlertIcon,
  ): Promise<SweetAlertResult<string>> {
    return Swal.fire({
      title: title,
      text: text,
      position: 'top',
      icon: icon,
      theme: this.theme,
      timer: 5000,
      showConfirmButton: false,
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    });
  }

  public info(title: string, text = ''): Promise<SweetAlertResult<string>> {
    return this.information(title, text, 'info');
  }

  public error(title: string, text = ''): Promise<SweetAlertResult<string>> {
    return this.information(title, text, 'error');
  }

  public warning(title: string, text = ''): Promise<SweetAlertResult<string>> {
    return this.information(title, text, 'warning');
  }

  public success(title: string, text = ''): Promise<SweetAlertResult<string>> {
    return this.information(title, text, 'success');
  }

  public question(title: string, text = ''): Promise<SweetAlertResult<string>> {
    return this.information(title, text, 'question');
  }

  private getConfirmButtonColor(): string {
    return this.theme === 'light' ? '#6750A4' : '#2563eb';
  }

  public standardDeleteNotify(onConfirm: () => void, onCancel?: () => void): void {
    Swal.fire({
      title: '确定删除?',
      text: '您将无法恢复此操作！',
      icon: 'warning',
      theme: this.theme,
      showCancelButton: true,
      confirmButtonColor: this.getConfirmButtonColor(),
      cancelButtonColor: '#d33',
      confirmButtonText: '是的, 删除!',
      cancelButtonText: '取消',
    }).then((confirm: SweetAlertResult) => {
      if (confirm.value) {
        onConfirm();
      } else {
        if (onCancel) {
          onCancel();
        }
      }
    });
  }

  public signOutNotify(onConfirm: () => void, onCancel?: () => void): void {
    Swal.fire({
      title: '要走了么?',
      text: '您确定要退出系统！',
      icon: 'warning',
      theme: this.theme,
      showCancelButton: true,
      confirmButtonColor: this.getConfirmButtonColor(),
      cancelButtonColor: '#d33',
      confirmButtonText: '是的',
      cancelButtonText: '取消',
    }).then((result: SweetAlertResult) => {
      if (result.value) {
        onConfirm();
      } else {
        if (onCancel) {
          onCancel();
        }
      }
    });
  }

  public tokenExpiresNotify(
    title: string,
    text: string,
    icon: SweetAlertIcon,
    onClose: () => void,
  ): void {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      theme: this.theme,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
      confirmButtonText: '已阅!',
      willClose: () => {
        onClose();
      },
    });
  }
}

const notify: Notify = Notify.initialize(ThemeModeEnum.LIGHT);

class Toast {
  // 静态私有实例引用
  private static _instance: Toast | null = null;

  // 初始化标志
  private static _initialized = false;

  private theme: SweetAlertTheme;

  private constructor(newTheme: ThemeModeEnum) {
    this.theme = convertThemeType(newTheme);
  }

  /**
   * 初始化单例（仅允许一次）
   * @param {ThemeModeEnum} newTheme 系统主题
   * @returns {Toast} 单例实例
   */
  public static initialize(newTheme: ThemeModeEnum): Toast {
    if (Toast._initialized) {
      throw new Error('RouterUtilities has already been initialized');
    }

    Toast._instance = new Toast(newTheme);
    Toast._initialized = true;
    return Toast._instance;
  }

  /**
   * 获取单例实例
   * @returns {Toast} 单例实例
   */
  public static getInstance(): Toast {
    if (!Toast._instance) {
      throw new Error('RouterUtilities not initialized. Call initialize() first.');
    }
    return Toast._instance;
  }

  public setTheme(newTheme: ThemeModeEnum): void {
    this.theme = convertThemeType(newTheme);
  }

  public information(title: string, icon: SweetAlertIcon): Promise<SweetAlertResult<string>> {
    return SwalToast.fire({
      icon: icon,
      title: title,
      theme: this.theme,
    });
  }

  public info(text: string): Promise<SweetAlertResult<string>> {
    return this.information(text, 'info');
  }

  public error(text: string): Promise<SweetAlertResult<string>> {
    return this.information(text, 'error');
  }

  public warning(text: string): Promise<SweetAlertResult<string>> {
    return this.information(text, 'warning');
  }

  public success(text: string): Promise<SweetAlertResult<string>> {
    return this.information(text, 'success');
  }

  public question(text: string): Promise<SweetAlertResult<string>> {
    return this.information(text, 'question');
  }
}

const toast: Toast = Toast.initialize(ThemeModeEnum.LIGHT);

const changeSwalTheme = (newTheme: ThemeModeEnum) => {
  notify.setTheme(newTheme);
  toast.setTheme(newTheme);
};

export { Swal, notify, toast, changeSwalTheme };
