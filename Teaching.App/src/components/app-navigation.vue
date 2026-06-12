<template>
  <v-navigation-drawer v-model="modelValue">
    <v-list-item class="bg-black" to="/">
      <v-img height="56" src="@/assets/logo.svg" />
    </v-list-item>
    <v-divider />
    <v-list>
      <app-navigation-item
        v-for="treeItem in navTree"
        :key="treeItem.name"
        :item="treeItem"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

import type { NavItem } from "./app-navigation-item.vue";

export interface AppNavigationModels {
  modelValue: boolean | null;
}

const router = useRouter();

const modelValue = defineModel<AppNavigationModels["modelValue"]>();

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
    .sort((a, b) => collator.compare(a.name, b.name))
    .map((node) => ({
      ...node,
      children: node.children ? sortTree(node.children) : undefined,
    }));
}

const navTree = computed(() => sortTree(buildTree(paths.value)));
</script>
