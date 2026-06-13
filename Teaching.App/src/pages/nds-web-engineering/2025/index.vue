<template>
  <v-row>
    <v-col cols="12">
      <v-card
        :key="route.path"
        @click="onClick(route.path)"
        class="py-4 my-4"
        color="surface-variant"
        min-width="500px"
        :prepend-icon="route.icon"
        rounded="lg"
        v-for="route in routes"
        variant="tonal"
      >
        <template #image>
          <v-img v-if="route.logo" position="top right" :src="route.logo" />
        </template>
        <template #title>
          <h2 class="text-h5 font-weight-bold">
            {{ route.title }}
          </h2>
        </template>
        <template #subtitle>
          <div class="text-subtitle-1">
            <v-kbd>{{ route.date }}</v-kbd>
          </div>
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import { useTeachingContentStore } from "@/stores/teaching-content";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();
const contentStore = useTeachingContentStore();
const authStore = useAuthStore();

const routes = computed(() =>
  contentStore
    .getVisibleDaysByYearPath("/nds-web-engineering/2025", authStore.isTeacherMode)
    .map((day) => ({
      path: day.path,
      title: t(day.titleKey),
      logo: day.logo,
      date: day.dateLabel,
      icon: day.icon,
    })),
);

function onClick(path: string) {
  router.push(path);
}
</script>
