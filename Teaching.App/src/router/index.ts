import CatchAllPage from "@/pages/[...path].vue";
import HomePage from "@/pages/index.vue";
import { useAuthStore } from "@/stores/auth";
import { useTeachingContentStore } from "@/stores/teaching-content";
import NdsCourseOverview from "@/views/nds-course-overview.vue";
import NdsDayView from "@/views/nds-day-view.vue";
import NdsYearOverview from "@/views/nds-year-overview.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/nds-web-engineering",
      component: NdsCourseOverview,
    },
    {
      path: String.raw`/nds-web-engineering/:year(\d{4})`,
      component: NdsYearOverview,
    },
    {
      path: String.raw`/nds-web-engineering/:year(\d{4})/day-:dayNumber(\d+)`,
      component: NdsDayView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: CatchAllPage,
    },
  ],
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  const contentStore = useTeachingContentStore();

  if (contentStore.canAccessPath(to.path, authStore.isTeacherMode)) {
    return true;
  }

  const day = contentStore.findDayByPath(to.path);
  return {
    path: "/nds-web-engineering",
    query: {
      locked: day?.titleKey ?? "true",
    },
  };
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (localStorage.getItem("vuetify:dynamic-reload")) {
      console.error("Dynamic import error, reloading page did not fix it", err);
    } else {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
