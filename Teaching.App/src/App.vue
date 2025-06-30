<template>
  <v-app>
    <app-navigation v-model="isDrawerOpen" />
    <app-titlebar v-model="isDrawerOpen">
      <v-switch
        v-model="isDarkTheme"
        true-icon="mdi-moon-waning-crescent"
        false-icon="mdi-white-balance-sunny"
        density="comfortable"
        hide-details
      />
    </app-titlebar>
    <v-main>
      <v-container class="fill-height">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();

const isDrawerOpen = ref<boolean | null>(null);
const isDarkTheme = computed({
  get: () => theme.current.value.dark,
  set: (v) => (theme.global.name.value = v ? "dark" : "light"),
});
</script>
