<template>
  <v-app>
    <app-navigation v-model="isDrawerOpen" />
    <app-titlebar v-model="isDrawerOpen">
      <v-btn
        v-if="authStore.isTeacherMode"
        :prepend-icon="icons.teacherLogout"
        class="mr-2"
        color="warning"
        variant="text"
        @click="authStore.logoutTeacher()"
      >
        {{ t("logout") }}
      </v-btn>
      <v-btn
        v-else
        :prepend-icon="icons.teacherLogin"
        class="mr-2"
        color="primary"
        variant="text"
        @click="teacherDialogOpen = true"
      >
        {{ t("teacher-access") }}
      </v-btn>
      <v-switch
        v-model="isDarkTheme"
        :true-icon="icons.appThemeDark"
        :false-icon="icons.appThemeLight"
        density="comfortable"
        hide-details
      />
    </app-titlebar>
    <v-main>
      <v-container class="fill-height">
        <router-view />
      </v-container>
    </v-main>
    <teacher-access-dialog v-model="teacherDialogOpen" />
  </v-app>
</template>

<script lang="ts" setup>
import { icons } from "@/constants/icons";
import { useAuthStore } from "@/stores/auth";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useTheme } from "vuetify";

const theme = useTheme();
const authStore = useAuthStore();
const { t } = useI18n();

const isDrawerOpen = ref<boolean | null>(null);
const teacherDialogOpen = ref(false);
const isDarkTheme = computed({
  get: () => theme.current.value.dark,
  set: (v) => (theme.global.name.value = v ? "dark" : "light"),
});
</script>
