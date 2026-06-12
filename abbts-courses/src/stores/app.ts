// Utilities
import { defineStore } from "pinia";
import { computed } from "vue";
import { useTheme } from "vuetify";

export const useAppStore = defineStore("app", () => {
  const theme = useTheme();

  const isDarkTheme = computed({
    get: () => theme.current.value.dark,
    set: (isDark) => theme.change(isDark ? "dark" : "light"),
  });

  return {
    isDarkTheme,
  };
});
