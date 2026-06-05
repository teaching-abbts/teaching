<template>
  <v-app>
    <app-titlebar v-model="isDrawerOpen">
      <app-theme-switcher />
    </app-titlebar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import AppTitlebar from "@/components/app/app-titlebar.vue";
import AppThemeSwitcher from "@/components/app/app-theme-switcher.vue";
import { ref } from "vue";

const isDrawerOpen = ref<boolean | null>(null);
</script>
