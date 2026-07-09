<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" permanent>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>

      <template #append>
        <app-theme-switcher />
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import AppThemeSwitcher from "@/components/app-theme-switcher.vue";

const drawer = ref(null);
</script>
