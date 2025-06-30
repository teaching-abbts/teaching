<template>
  <div class="border border-green p-2">
    <h1>🫎 Elternteil 🐘</h1>
    <span>{{ text }}</span>
    <ChildComponent :text="text" @update:text="onUpdateText" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const text = ref("Schlaf endlich!");

function onUpdateText(newText: string) {
  text.value = newText;
}
</script>
