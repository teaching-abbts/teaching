import { computed } from "vue";
import { useTheme } from "vuetify";

export function useThemeMode() {
  const theme = useTheme();

  const isDarkTheme = computed({
    get: () => theme.current.value.dark,
    set: (v) => (theme.global.name.value = v ? "dark" : "light"),
  });

  return { isDarkTheme };
}
