<template>
  <v-switch
    class="ml-2 mr-2"
    density="comfortable"
    false-icon="mdi-white-balance-sunny"
    hide-details
    true-icon="mdi-moon-waning-crescent"
    v-model="appStore.isDarkTheme"
  />
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
</script>
