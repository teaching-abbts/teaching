import { icons } from "@/constants/icons";
import type {
  CourseManifest,
  CourseManifestYear,
  CourseRef,
  ChapterRef,
  SlideRef,
  YearRef,
} from "@/types/content";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const slideDeck = (href: string): SlideRef => ({
  href,
  icon: icons.slideDeck,
  titleKey: "presentation",
  subtitleKey: "interactive-slides",
});

const COURSE_PATH = "/nds-web-engineering";
const MANIFEST_PATH = `${COURSE_PATH}/manifest.json`;
const UNLOCK_2026_CHAPTER_5_PLUS = "2026-07-03T08:00:00+02:00";

type ChapterOverride = Partial<Omit<ChapterRef, "path" | "chapterNumber" | "slides">>;
type YearOverride = Partial<Omit<YearRef, "path" | "year" | "chapters">>;

const FALLBACK_MANIFEST: CourseManifest = {
  coursePath: COURSE_PATH,
  years: [
    {
      year: 2026,
      chapters: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    },
    {
      year: 2025,
      chapters: [10, 8, 7, 6, 5, 4, 3, 2, 1],
    },
  ],
};

const YEAR_OVERRIDES: Record<number, YearOverride> = {
  2026: {
    logo: "/logo-chapter-2.png",
  },
  2025: {
    logo: "/logo-chapter-1.png",
  },
};

const CHAPTER_OVERRIDES: Record<string, ChapterOverride> = {
  "/nds-web-engineering/2025/chapter-10": {
    titleKey: "pwa-and-vue-advanced",
    dateLabel: "1. August 2025",
    icon: icons.chapterPwa,
    unlockAt: "2025-08-01T08:00:00+02:00",
  },
  "/nds-web-engineering/2025/chapter-8": {
    titleKey: "certs-auth-pinia",
    dateLabel: "18. Juli 2025",
    icon: icons.chapterSecurity,
    unlockAt: "2025-07-18T08:00:00+02:00",
  },
  "/nds-web-engineering/2025/chapter-7": {
    titleKey: "authentication",
    dateLabel: "11. Juli 2025",
    logo: "/logo-chapter-7.png",
    icon: icons.chapterSecurity,
    unlockAt: "2025-07-11T08:00:00+02:00",
  },
  "/nds-web-engineering/2025/chapter-6": {
    titleKey: "frontend-advanced-flexbox-vuetify",
    dateLabel: "4. Juli 2025",
    logo: "/logo-chapter-6.svg",
    icon: icons.chapterFrontend,
    unlockAt: "2025-07-04T08:00:00+02:00",
  },
  "/nds-web-engineering/2025/chapter-5": {
    titleKey: "the-road-to-fullstack-with-vue.js-and-ktor",
    dateLabel: "27. Juni 2025",
    logo: "/logo-chapter-5.png",
    icon: icons.chapterBackend,
    unlockAt: "2025-06-27T08:00:00+02:00",
  },
  "/nds-web-engineering/2025/chapter-4": {
    titleKey: "single-page-apps-with-vue.js",
    dateLabel: "20. Juni 2025",
    logo: "/logo-chapter-4.png",
    icon: icons.chapterFrontend,
    unlockAt: "2025-06-20T08:00:00+02:00",
  },
  "/nds-web-engineering/2025/chapter-3": {
    titleKey: "basics-3",
    dateLabel: "13. Juni 2025",
    logo: "/logo-chapter-3.png",
    icon: icons.chapterBasics,
    unlockAt: "2025-06-13T08:00:00+02:00",
  },
  "/nds-web-engineering/2025/chapter-2": {
    titleKey: "basics-2",
    dateLabel: "6. Juni 2025",
    logo: "/logo-chapter-2.png",
    icon: icons.chapterBasics,
    unlockAt: "2025-06-06T08:00:00+02:00",
  },
  "/nds-web-engineering/2025/chapter-1": {
    titleKey: "introduction-and-basics-1",
    dateLabel: "30. Mai 2025",
    logo: "/logo-chapter-1.png",
    icon: icons.chapterBasics,
    unlockAt: "2025-05-30T08:00:00+02:00",
  },
};

function isCourseManifest(value: unknown): value is CourseManifest {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<CourseManifest>;
  if (
    typeof candidate.coursePath !== "string" ||
    !Array.isArray(candidate.years)
  ) {
    return false;
  }

  return candidate.years.every(isCourseManifestYear);
}

function isCourseManifestYear(value: unknown): value is CourseManifestYear {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<CourseManifestYear>;
  if (typeof candidate.year !== "number" || !Array.isArray(candidate.chapters)) {
    return false;
  }

  return candidate.chapters.every((chapter) => typeof chapter === "number");
}

function buildChapterRef(
  coursePath: string,
  year: number,
  chapterNumber: number,
): ChapterRef {
  const path = `${coursePath}/${year}/chapter-${chapterNumber}`;
  const override = CHAPTER_OVERRIDES[path] ?? {};
  const unlockAt =
    override.unlockAt ??
    (year === 2026 && chapterNumber >= 5 ? UNLOCK_2026_CHAPTER_5_PLUS : undefined);

  return {
    path,
    chapterNumber,
    titleKey: override.titleKey ?? `chapter-${chapterNumber}`,
    dateLabel: override.dateLabel ?? `${year}`,
    logo: override.logo,
    icon: override.icon ?? icons.chapterBasics,
    unlockAt,
    slides: [slideDeck(`${path}/slidev`)],
  };
}

function buildYearRef(coursePath: string, year: CourseManifestYear): YearRef {
  const path = `${coursePath}/${year.year}`;
  const override = YEAR_OVERRIDES[year.year] ?? {};

  const sortedChapters = [...year.chapters].sort((a, b) => b - a);

  return {
    path,
    year: year.year,
    titleKey: override.titleKey ?? `nds-web-engineering-${year.year}`,
    dateLabel: override.dateLabel ?? `${year.year}`,
    logo: override.logo,
    icon: override.icon ?? icons.courseOverview,
    chapters: sortedChapters.map((chapterNumber) =>
      buildChapterRef(coursePath, year.year, chapterNumber),
    ),
  };
}

function buildCourse(manifest: CourseManifest): CourseRef {
  const sortedYears = [...manifest.years].sort((a, b) => b.year - a.year);

  return {
    path: manifest.coursePath,
    titleKey: "nds-web-engineering",
    years: sortedYears.map((year) => buildYearRef(manifest.coursePath, year)),
  };
}

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
  const loadedCourse = ref<CourseRef>(buildCourse(FALLBACK_MANIFEST));
  const course = computed(() => loadedCourse.value);
  const isInitialized = ref(false);
  const isInitializing = ref(false);
  let initializePromise: Promise<void> | undefined;

  async function loadManifest(): Promise<CourseManifest | undefined> {
    try {
      const response = await fetch(MANIFEST_PATH, { cache: "no-store" });
      if (!response.ok) {
        return undefined;
      }

      const payload: unknown = await response.json();
      if (!isCourseManifest(payload)) {
        return undefined;
      }

      return payload;
    } catch {
      return undefined;
    }
  }

  async function ensureInitialized(): Promise<void> {
    if (isInitialized.value) {
      return;
    }

    if (!initializePromise) {
      isInitializing.value = true;
      initializePromise = (async () => {
        const manifest = await loadManifest();
        if (manifest) {
          loadedCourse.value = buildCourse(manifest);
        }

        isInitialized.value = true;
        isInitializing.value = false;
      })();
    }

    await initializePromise;
  }

  const allYears = computed(() => course.value.years);

  function findYearByPath(path: string): YearRef | undefined {
    return allYears.value.find((year) => year.path === path);
  }

  function findChapterByPath(path: string): ChapterRef | undefined {
    for (const year of allYears.value) {
      const found = year.chapters.find((chapter) => chapter.path === path);
      if (found) {
        return found;
      }
    }

    return undefined;
  }

  function getVisibleYears(isTeacherMode: boolean): YearRef[] {
    return allYears.value.map((year) => ({
      ...year,
      chapters: getVisibleChaptersByYearPath(year.path, isTeacherMode),
    }));
  }

  function getVisibleChaptersByYearPath(
    yearPath: string,
    isTeacherMode: boolean,
  ): ChapterRef[] {
    const year = findYearByPath(yearPath);
    if (!year) {
      return [];
    }

    if (isTeacherMode) {
      return year.chapters;
    }

    return year.chapters.filter((chapter) => isUnlocked(chapter.unlockAt));
  }

  function canAccessPath(path: string, isTeacherMode: boolean): boolean {
    const chapter = findChapterByPath(path);
    if (!chapter) {
      return true;
    }

    return isTeacherMode || isUnlocked(chapter.unlockAt);
  }

  return {
    course,
    allYears,
    isInitialized,
    isInitializing,
    ensureInitialized,
    findYearByPath,
    findChapterByPath,
    getVisibleYears,
    getVisibleChaptersByYearPath,
    canAccessPath,
  };
});
