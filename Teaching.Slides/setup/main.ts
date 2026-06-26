import { defineAppSetup } from "@slidev/types";

declare const __SLIDEV_HASH_ROUTE__: boolean;

export default defineAppSetup(({ app, router }) => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");

  router.beforeEach((to) => {
    if (!__SLIDEV_HASH_ROUTE__) {
      return;
    }

    if (!base || base === "/") {
      return;
    }

    const prefixedPath = `${base}/`;
    if (!to.path.startsWith(prefixedPath)) {
      return;
    }

    const normalizedPath = to.path.slice(base.length) || "/";
    return {
      path: normalizedPath,
      query: to.query,
      hash: to.hash,
      replace: true,
    };
  });
});
