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
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();
const routes = computed(() => [
  {
    path: "/nds-web-engineering/2025/day-1",
    title: t("introduction-and-basics-1"),
    logo: "/logo-day-1.png",
    date: "30. Mai 2025",
  },
  {
    path: "/nds-web-engineering/2025/day-2",
    title: t("basics-2"),
    logo: "/logo-day-2.png",
    date: "6. Juni 2025",
  },
  {
    path: "/nds-web-engineering/2025/day-3",
    title: t("basics-3"),
    logo: "/logo-day-3.png",
    date: "13. Juni 2025",
  },
  {
    path: "/nds-web-engineering/2025/day-4",
    title: t("single-page-apps-with-vue.js"),
    logo: "/logo-day-4.png",
    date: "20. Juni 2025",
  },
  {
    path: "/nds-web-engineering/2025/day-5",
    title: t("the-road-to-fullstack-with-vue.js-and-ktor"),
    logo: "/logo-day-5.png",
    date: "27. Juni 2025",
  },
  {
    path: "/nds-web-engineering/2025/day-6",
    title: t("frontend-advanced-flexbox-vuetify"),
    logo: "/logo-day-6.svg",
    date: "4. Juli 2025",
  },
  {
    path: "/nds-web-engineering/2025/day-7",
    title: t("authentication"),
    logo: "/logo-day-7.png",
    date: "11. Juli 2025",
  },
  {
    path: "/nds-web-engineering/2025/day-8",
    title: t("certs-auth-pinia"),
    date: "18. Juli 2025",
  },
  {
    path: "/nds-web-engineering/2025/day-10",
    title: t("pwa-and-vue-advanced"),
    date: "1. August 2025",
  },
]);

function onClick(path: string) {
  router.push(path);
}
</script>
