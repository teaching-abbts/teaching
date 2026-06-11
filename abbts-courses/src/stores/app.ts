// Utilities
import { defineStore } from "pinia";
import { computed } from "vue";
import { useTheme } from "vuetify";

export const useAppStore = defineStore("app", () => {
  const theme = useTheme();

  const isDarkTheme = computed({
    get: () => theme.current.value.dark,
    set: (v) => (theme.global.name.value = v ? "dark" : "light"),
  });

  return {
    isDarkTheme,
  };
});
