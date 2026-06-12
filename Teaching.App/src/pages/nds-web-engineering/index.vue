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
    path: "/nds-web-engineering/2026",
    title: t("nds-web-engineering-2026"),
    logo: "/logo-day-2.png",
    date: "2026",
  },
  {
    path: "/nds-web-engineering/2025",
    title: t("nds-web-engineering-2025"),
    logo: "/logo-day-1.png",
    date: "2025",
  },
]);

function onClick(path: string) {
  router.push(path);
}
</script>
