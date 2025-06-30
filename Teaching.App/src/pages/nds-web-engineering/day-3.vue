<template>
  <div class="w-full text-center">
    <h2>{{ t("basics-3") }}</h2>
    <div class="flex flex-row justify-evenly">
      <external-ref-card v-for="card in cards" :key="card.href" v-bind="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ExternalRefCardProps } from "@/components/cards/external-ref-card.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const cards: ExternalRefCardProps[] = [
  {
    href: "/nds-web-engineering/day-3/slidev",
    icon: "mdi-presentation-play",
    title: t("presentation"),
    subtitle: t("interactive-slides"),
  },
];
</script>
