<template>
  <div class="w-full text-center">
    <h2>{{ t(day?.titleKey ?? "page-not-found") }}</h2>
    <div class="flex flex-row justify-evenly">
      <external-ref-card
        v-for="slide in slideCards"
        :key="slide.href"
        :href="slide.href"
        :icon="slide.icon"
        :title="t(slide.titleKey)"
        :subtitle="t(slide.subtitleKey)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTeachingContentStore } from "@/stores/teaching-content";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  dayPath: string;
}>();

const { t } = useI18n();
const contentStore = useTeachingContentStore();

const day = computed(() => contentStore.findDayByPath(props.dayPath));
const slideCards = computed(() => day.value?.slides ?? []);
</script>
