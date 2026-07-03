<template>
  <div class="border border-green p-2">
    <label for="parent">🫎 Elternteil 🐘</label>
    <input id="parent" class="border" type="text" v-model="text" />
    <ChildComponent class="mt-2" :text="text" @update:text="onUpdateText" />
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
