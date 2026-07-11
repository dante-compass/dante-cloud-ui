import type { Router, RouteRecordRaw } from "vue-router";
import { useAuthenticationStore, useSystemElement, useElementStore } from "@herodotus/framework";
import { CONSTANTS, API } from "@/configurations";

import { Loading, QSpinnerDots } from "quasar";

const PageNotFoundRoute: RouteRecordRaw = {
  path: Path.NOT_FOUND,
  name: Path.NOT_FOUND_NAME,
  component: () => import("@/components/error/404.vue"),
  meta: {
    title: "ErrorPage",
  },
};

const routeModules = import.meta.glob("./modules/**/*.ts", {
  eager: true,
});

const vueModules = import.meta.glob("../views/**/*.vue");

const locate = (item: string) => {
  return `../${item}`;
};

const getRoutesFromServer = (roles: string[]) => {
  return API.core.sysElement().findResourcesByRoles(roles);
};

const { initBackendSecurity } = useSystemElement(vueModules, locate, getRoutesFromServer);

export const createRouterGuard = (router: Router) => {
  router.beforeEach(async (to, from) => {
    Loading.show({
      spinner: QSpinnerDots,
      spinnerSize: 100,
      spinnerColor: "blue-10",
      delay: 200,
    });

    const authStore = useAuthenticationStore();
    const elementStore = useElementStore();

    const token = authStore.token;

    // 有 Token
    if (token) {
      if (to.path === Path.SIGN_IN) {
        // 目的地址还是登录页面，直接跳转到首页。
        return Path.HOME;
      } else {
        // 判断动态路由是否已经添加，没有添加则进行添加
        if (!elementStore.isDynamicRouteAdded) {
          await initBackendSecurity(router, authStore.roles);
          router.addRoute(PageNotFoundRoute);
          // 重新导航到目标页面
          if (to.path !== from.path) {
            return to.path;
          } else {
            return;
          }
        }
        return;
      }
    } else {
      // 没有Token，同时是忽略权限验证的页面
      if (to.meta.isIgnoreAuth) {
        return;
      } else {
        if (to.path === Path.SIGN_IN) {
          localStorage.clear();
          return;
        } else {
          // 重定向到登录页，并携带重定向路径
          return {
            path: Path.SIGN_IN,
            query: { redirect: to.fullPath },
          };
        }
      }
    }
  });

  // 路由加载后
  router.afterEach(() => {
    Loading.hide();
  });
};
