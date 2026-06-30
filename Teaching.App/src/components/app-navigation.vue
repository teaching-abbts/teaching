<template>
  <v-navigation-drawer
    v-model="modelValue"
    class="d-flex flex-column"
    style="height: 100vh !important"
  >
    <v-list-item class="bg-black" to="/">
      <v-img height="56" src="@/assets/logo.svg" />
    </v-list-item>
    <v-divider />
    <v-list class="flex-grow-1 overflow-y-auto">
      <app-navigation-item
        v-for="treeItem in navTree"
        :key="treeItem.name"
        :item="treeItem"
      />
    </v-list>

    <div style="flex: 1 1 auto" />

    <div>
      <v-divider />
      <v-list density="compact" nav>
        <v-list-item @click="versionDialogOpen = true">
          <v-list-item-title>{{ t("version") }}</v-list-item-title>
          <v-list-item-subtitle class="font-mono">{{
            gitVersion.fullSemVer
          }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </div>

    <v-dialog v-model="versionDialogOpen" max-width="720">
      <v-card>
        <v-card-title>{{ t("version-information") }}</v-card-title>
        <v-card-text>
          <v-table density="compact">
            <tbody>
              <tr>
                <td class="font-weight-bold">{{ t("version-full-semver") }}</td>
                <td class="font-mono">{{ gitVersion.fullSemVer }}</td>
              </tr>
              <tr>
                <td class="font-weight-bold">
                  {{ t("version-informational-version") }}
                </td>
                <td class="font-mono">{{ gitVersion.informationalVersion }}</td>
              </tr>
              <tr>
                <td class="font-weight-bold">{{ t("version-sha") }}</td>
                <td class="font-mono">{{ gitVersion.sha }}</td>
              </tr>
              <tr>
                <td class="font-weight-bold">{{ t("version-branch") }}</td>
                <td class="font-mono">{{ gitVersion.branchName }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="versionDialogOpen = false">{{
            t("close")
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { gitVersion } from "@/version";
import { useAuthStore } from "@/stores/auth";
import { useTeachingContentStore } from "@/stores/teaching-content";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import type { NavItem } from "./app-navigation-item.vue";

export interface AppNavigationModels {
  modelValue: boolean | null;
}

const { t } = useI18n();
const authStore = useAuthStore();
const contentStore = useTeachingContentStore();

const modelValue = defineModel<AppNavigationModels["modelValue"]>();
const versionDialogOpen = ref(false);

const navTree = computed<NavItem[]>(() => {
  const years = contentStore.getVisibleYears(authStore.isTeacherMode);

  return [
    {
      name: contentStore.course.titleKey,
      path: contentStore.course.path,
      children: years.map((year) => ({
        name: String(year.year),
        path: year.path,
        children: year.chapters.map((chapter) => ({
          name: chapter.titleKey,
          path: chapter.path,
        })),
      })),
    },
  ];
});
</script>

<style scoped>
:deep(.v-navigation-drawer__content) {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
