<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="onClickNavIcon"></v-app-bar-nav-icon>
    <v-app-bar-title class="grow">
      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">
          {{ t("computer-science") }}
        </div>
        <strong class="font-weight-bold">{{
          t("study-and-learning-material")
        }}</strong>
      </div>
    </v-app-bar-title>
    <div class="mr-3">
      <slot />
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

export interface AppTitlebarModels {
  modelValue: boolean | null;
}

const { t } = useI18n();
const modelValue = defineModel<AppTitlebarModels["modelValue"]>();

function onClickNavIcon() {
  modelValue.value = !modelValue.value;
}
</script>
