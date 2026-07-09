<template>
  <v-row>
    <v-col cols="12">
      <v-card
        v-for="year in years"
        :key="year.path"
        :prepend-icon="year.icon"
        class="py-4 my-4"
        color="surface-variant"
        min-width="500px"
        rounded="lg"
        variant="tonal"
        @click="navigateTo(year.path)"
      >
        <template #image>
          <v-img v-if="year.logo" position="top right" :src="year.logo" />
        </template>
        <template #title>
          <h2 class="text-h5 font-weight-bold">{{ t(year.titleKey) }}</h2>
        </template>
        <template #subtitle>
          <div class="text-subtitle-1">
            <v-kbd>{{ year.dateLabel }}</v-kbd>
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
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();
const authStore = useAuthStore();
const contentStore = useTeachingContentStore();

const years = computed(() => contentStore.getVisibleYears(authStore.isTeacherMode));

function navigateTo(path: string) {
  router.push(path);
}
</script>
