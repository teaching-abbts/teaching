<template>
  <v-list-group v-if="hasChildren" :title="t(props.item.name)">
    <template #activator="activatorProps">
      <v-list-item v-bind="activatorProps.props" :title="t(props.item.name)" />
    </template>
    <v-list-item :title="t(props.item.name)" :to="props.item.path" />
    <AppNavigationItem
      v-for="child in props.item.children"
      :key="child.name"
      :item="child"
    />
  </v-list-group>
  <v-list-item v-else :title="t(props.item.name)" :to="props.item.path" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

export type NavItem = {
  name: string;
  path: string;
  children?: NavItem[];
};

export interface AppNavigationItemProps {
  item: NavItem;
}

const { t } = useI18n();

const props = withDefaults(defineProps<AppNavigationItemProps>(), {});

const hasChildren = computed(() => (props.item.children?.length ?? 0) > 0);
</script>
