<template>
  <v-switch
    v-model="isDarkTheme"
    true-icon="mdi-moon-waning-crescent"
    false-icon="mdi-white-balance-sunny"
    density="comfortable"
    hide-details
  />
</template>

<script lang="ts" setup>
import { useThemeMode } from "@/composables/theme";

const { isDarkTheme } = useThemeMode();
</script>
