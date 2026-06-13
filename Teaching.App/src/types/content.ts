export interface SlideRef {
  href: string;
  icon: string;
  titleKey: string;
  subtitleKey: string;
}

export interface DayRef {
  path: string;
  dayNumber: number;
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
  days: DayRef[];
}

export interface CourseRef {
  path: string;
  titleKey: string;
  years: YearRef[];
}
