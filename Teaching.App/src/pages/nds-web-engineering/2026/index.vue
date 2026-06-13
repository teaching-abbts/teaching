<template>
  <v-row>
    <v-col cols="12">
      <v-card
        :key="route.path"
        @click="onClick(route.path)"
        class="py-4 my-4"
        color="surface-variant"
        min-width="500px"
        prepend-icon="mdi-rocket-launch-outline"
        rounded="lg"
        v-for="route in routes"
        variant="tonal"
      >
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
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();
const routes = computed(() => [
  {
    path: "/nds-web-engineering/2026/day-3",
    title: t("nds-2026-day-3"),
    date: "2026",
  },
  {
    path: "/nds-web-engineering/2026/day-2",
    title: t("nds-2026-day-2"),
    date: "2026",
  },
  {
    path: "/nds-web-engineering/2026/day-1",
    title: t("nds-2026-day-1"),
    date: "2026",
  },
]);

function onClick(path: string) {
  router.push(path);
}
</script>
