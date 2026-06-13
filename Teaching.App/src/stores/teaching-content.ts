import { icons } from "@/constants/icons";
import type { CourseRef, DayRef, SlideRef, YearRef } from "@/types/content";
import { computed } from "vue";
import { defineStore } from "pinia";

const slideDeck = (href: string): SlideRef => ({
  href,
  icon: icons.slideDeck,
  titleKey: "presentation",
  subtitleKey: "interactive-slides",
});

const ndsWebEngineering: CourseRef = {
  path: "/nds-web-engineering",
  titleKey: "nds-web-engineering",
  years: [
    {
      path: "/nds-web-engineering/2026",
      year: 2026,
      titleKey: "nds-web-engineering-2026",
      dateLabel: "2026",
      logo: "/logo-day-2.png",
      icon: icons.courseOverview,
      days: [
        {
          path: "/nds-web-engineering/2026/day-3",
          dayNumber: 3,
          titleKey: "nds-2026-day-3",
          dateLabel: "2026",
          icon: icons.dayBasics,
          slides: [slideDeck("/nds-web-engineering/2026/day-3/slidev")],
        },
        {
          path: "/nds-web-engineering/2026/day-2",
          dayNumber: 2,
          titleKey: "nds-2026-day-2",
          dateLabel: "2026",
          icon: icons.dayBasics,
          slides: [slideDeck("/nds-web-engineering/2026/day-2/slidev")],
        },
        {
          path: "/nds-web-engineering/2026/day-1",
          dayNumber: 1,
          titleKey: "nds-2026-day-1",
          dateLabel: "2026",
          icon: icons.dayBasics,
          slides: [slideDeck("/nds-web-engineering/2026/day-1/slidev")],
        },
      ],
    },
    {
      path: "/nds-web-engineering/2025",
      year: 2025,
      titleKey: "nds-web-engineering-2025",
      dateLabel: "2025",
      logo: "/logo-day-1.png",
      icon: icons.courseOverview,
      days: [
        {
          path: "/nds-web-engineering/2025/day-10",
          dayNumber: 10,
          titleKey: "pwa-and-vue-advanced",
          dateLabel: "1. August 2025",
          icon: icons.dayPwa,
          unlockAt: "2025-08-01T08:00:00+02:00",
          slides: [slideDeck("/nds-web-engineering/2025/day-10/slidev")],
        },
        {
          path: "/nds-web-engineering/2025/day-8",
          dayNumber: 8,
          titleKey: "certs-auth-pinia",
          dateLabel: "18. Juli 2025",
          icon: icons.daySecurity,
          unlockAt: "2025-07-18T08:00:00+02:00",
          slides: [slideDeck("/nds-web-engineering/2025/day-8/slidev")],
        },
        {
          path: "/nds-web-engineering/2025/day-7",
          dayNumber: 7,
          titleKey: "authentication",
          dateLabel: "11. Juli 2025",
          logo: "/logo-day-7.png",
          icon: icons.daySecurity,
          unlockAt: "2025-07-11T08:00:00+02:00",
          slides: [slideDeck("/nds-web-engineering/2025/day-7/slidev")],
        },
        {
          path: "/nds-web-engineering/2025/day-6",
          dayNumber: 6,
          titleKey: "frontend-advanced-flexbox-vuetify",
          dateLabel: "4. Juli 2025",
          logo: "/logo-day-6.svg",
          icon: icons.dayFrontend,
          unlockAt: "2025-07-04T08:00:00+02:00",
          slides: [slideDeck("/nds-web-engineering/2025/day-6/slidev")],
        },
        {
          path: "/nds-web-engineering/2025/day-5",
          dayNumber: 5,
          titleKey: "the-road-to-fullstack-with-vue.js-and-ktor",
          dateLabel: "27. Juni 2025",
          logo: "/logo-day-5.png",
          icon: icons.dayBackend,
          unlockAt: "2025-06-27T08:00:00+02:00",
          slides: [slideDeck("/nds-web-engineering/2025/day-5/slidev")],
        },
        {
          path: "/nds-web-engineering/2025/day-4",
          dayNumber: 4,
          titleKey: "single-page-apps-with-vue.js",
          dateLabel: "20. Juni 2025",
          logo: "/logo-day-4.png",
          icon: icons.dayFrontend,
          unlockAt: "2025-06-20T08:00:00+02:00",
          slides: [slideDeck("/nds-web-engineering/2025/day-4/slidev")],
        },
        {
          path: "/nds-web-engineering/2025/day-3",
          dayNumber: 3,
          titleKey: "basics-3",
          dateLabel: "13. Juni 2025",
          logo: "/logo-day-3.png",
          icon: icons.dayBasics,
          unlockAt: "2025-06-13T08:00:00+02:00",
          slides: [slideDeck("/nds-web-engineering/2025/day-3/slidev")],
        },
        {
          path: "/nds-web-engineering/2025/day-2",
          dayNumber: 2,
          titleKey: "basics-2",
          dateLabel: "6. Juni 2025",
          logo: "/logo-day-2.png",
          icon: icons.dayBasics,
          unlockAt: "2025-06-06T08:00:00+02:00",
          slides: [slideDeck("/nds-web-engineering/2025/day-2/slidev")],
        },
        {
          path: "/nds-web-engineering/2025/day-1",
          dayNumber: 1,
          titleKey: "introduction-and-basics-1",
          dateLabel: "30. Mai 2025",
          logo: "/logo-day-1.png",
          icon: icons.dayBasics,
          unlockAt: "2025-05-30T08:00:00+02:00",
          slides: [slideDeck("/nds-web-engineering/2025/day-1/slidev")],
        },
      ],
    },
  ],
};

function isUnlocked(unlockAt?: string): boolean {
  if (!unlockAt) {
    return true;
  }

  const ts = Date.parse(unlockAt);
  if (Number.isNaN(ts)) {
    return true;
  }

  return Date.now() >= ts;
}

export const useTeachingContentStore = defineStore("teaching-content", () => {
  const course = computed(() => ndsWebEngineering);

  const allYears = computed(() => course.value.years);

  function findYearByPath(path: string): YearRef | undefined {
    return allYears.value.find((year) => year.path === path);
  }

  function findDayByPath(path: string): DayRef | undefined {
    for (const year of allYears.value) {
      const found = year.days.find((day) => day.path === path);
      if (found) {
        return found;
      }
    }

    return undefined;
  }

  function getVisibleYears(isTeacherMode: boolean): YearRef[] {
    return allYears.value.map((year) => ({
      ...year,
      days: getVisibleDaysByYearPath(year.path, isTeacherMode),
    }));
  }

  function getVisibleDaysByYearPath(yearPath: string, isTeacherMode: boolean): DayRef[] {
    const year = findYearByPath(yearPath);
    if (!year) {
      return [];
    }

    if (isTeacherMode) {
      return year.days;
    }

    return year.days.filter((day) => isUnlocked(day.unlockAt));
  }

  function canAccessPath(path: string, isTeacherMode: boolean): boolean {
    const day = findDayByPath(path);
    if (!day) {
      return true;
    }

    return isTeacherMode || isUnlocked(day.unlockAt);
  }

  return {
    course,
    allYears,
    findYearByPath,
    findDayByPath,
    getVisibleYears,
    getVisibleDaysByYearPath,
    canAccessPath,
  };
});
