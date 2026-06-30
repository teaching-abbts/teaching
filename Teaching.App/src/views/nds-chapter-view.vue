<template>
  <chapter-page-content :chapter-path="chapterPath" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const chapterPath = computed(() => {
  const year = String(route.params.year ?? "");
  const chapterNumber = String(route.params.chapterNumber ?? "");
  return `/nds-web-engineering/${year}/chapter-${chapterNumber}`;
});
</script>
