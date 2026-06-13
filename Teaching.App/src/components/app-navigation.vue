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
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

import type { NavItem } from "./app-navigation-item.vue";

export interface AppNavigationModels {
  modelValue: boolean | null;
}

const router = useRouter();
const { t } = useI18n();

const modelValue = defineModel<AppNavigationModels["modelValue"]>();
const versionDialogOpen = ref(false);

const routes = computed(() =>
  router.getRoutes().filter((r) => r.path !== "/" && !r.path.startsWith("/:")),
);

const paths = computed(() => routes.value.map((route) => route.path));

function insertNode(root: NavItem[], parts: string[], index: number): void {
  if (index >= parts.length) return;

  const part = parts[index];
  const path = parts.slice(0, index + 1).reduce((accumulator, currentValue) => {
    if (accumulator !== "/") {
      return `${accumulator}/${currentValue}`;
    }

    return `/${currentValue}`;
  }, "/");
  let node = root.find((n) => n.name === part);

  if (!node) {
    node = { name: part, path, children: [] };
    root.push(node);
  }

  insertNode(node.children!, parts, index + 1);
}

function buildTree(paths: string[]): NavItem[] {
  const root: NavItem[] = [];

  paths.forEach((path) => {
    const parts = path.split("/").filter(Boolean);
    insertNode(root, parts, 0);
  });

  return root;
}

const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

function sortTree(nodes: NavItem[]): NavItem[] {
  return [...nodes]
    .sort((a, b) => collator.compare(b.name, a.name))
    .map((node) => ({
      ...node,
      children: node.children ? sortTree(node.children) : undefined,
    }));
}

const navTree = computed(() => sortTree(buildTree(paths.value)));
</script>

<style scoped>
:deep(.v-navigation-drawer__content) {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
