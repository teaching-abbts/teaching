<template>
  <div class="w-full text-center">
    <h2>{{ t("introduction-and-basics-1") }}</h2>
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
    href: "/nds-web-engineering/2025/day-1/slidev",
    icon: "mdi-presentation-play",
    title: t("presentation"),
    subtitle: t("interactive-slides"),
  },
];
</script>
