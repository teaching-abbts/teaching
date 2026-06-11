<template>
  <v-switch
    v-model="appStore.isDarkTheme"
    true-icon="mdi-moon-waning-crescent"
    false-icon="mdi-white-balance-sunny"
    density="comfortable"
    hide-details
  />
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
</script>
