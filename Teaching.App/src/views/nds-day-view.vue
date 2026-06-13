<template>
  <day-page-content :day-path="dayPath" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const dayPath = computed(() => {
  const year = String(route.params.year ?? "");
  const dayNumber = String(route.params.dayNumber ?? "");
  return `/nds-web-engineering/${year}/day-${dayNumber}`;
});
</script>
