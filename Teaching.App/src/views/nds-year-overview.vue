<template>
  <v-row>
    <v-col cols="12">
      <v-card
        v-for="day in days"
        :key="day.path"
        :prepend-icon="day.icon"
        class="py-4 my-4"
        color="surface-variant"
        min-width="500px"
        rounded="lg"
        variant="tonal"
        @click="navigateTo(day.path)"
      >
        <template #image>
          <v-img v-if="day.logo" position="top right" :src="day.logo" />
        </template>
        <template #title>
          <h2 class="text-h5 font-weight-bold">{{ t(day.titleKey) }}</h2>
        </template>
        <template #subtitle>
          <div class="text-subtitle-1">
            <v-kbd>{{ day.dateLabel }}</v-kbd>
          </div>
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useTeachingContentStore } from "@/stores/teaching-content";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const contentStore = useTeachingContentStore();

const yearPath = computed(() => {
  const year = String(route.params.year ?? "");
  return `/nds-web-engineering/${year}`;
});

const days = computed(() =>
  contentStore.getVisibleDaysByYearPath(yearPath.value, authStore.isTeacherMode),
);

function navigateTo(path: string) {
  router.push(path);
}
</script>
