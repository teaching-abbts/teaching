export interface SlideRef {
  href: string;
  icon: string;
  titleKey: string;
  subtitleKey: string;
}

export interface ChapterRef {
  path: string;
  chapterNumber: number;
  titleKey: string;
  dateLabel: string;
  logo?: string;
  icon: string;
  unlockAt?: string;
  slides: SlideRef[];
}

export interface YearRef {
  path: string;
  year: number;
  titleKey: string;
  dateLabel: string;
  logo?: string;
  icon: string;
  chapters: ChapterRef[];
}

export interface CourseRef {
  path: string;
  titleKey: string;
  years: YearRef[];
}

export interface CourseManifestYear {
  year: number;
  chapters: number[];
}

export interface CourseManifest {
  coursePath: string;
  years: CourseManifestYear[];
}
