<template>
  <v-card
    :href="props.href"
    :prepend-icon="props.icon"
    :subtitle="props.subtitle"
    :title="props.title"
    append-icon="mdi-open-in-new"
    class="p-4 m-4 w-120"
    color="surface-variant"
    rel="noopener noreferrer"
    rounded="lg"
    target="_blank"
    variant="tonal"
  />
</template>

<script setup lang="ts">
import type { IconValue } from "vuetify/lib/composables/icons.mjs";

export interface ExternalRefCardProps {
  icon?: IconValue;
  href: string;
  title: string;
  subtitle?: string;
}

const props = withDefaults(defineProps<ExternalRefCardProps>(), {});
</script>
