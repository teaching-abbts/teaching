<template>
  <div id="sfc-example">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <p>Current Time: {{ currentTime }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const title = ref("Hello Vue 3!");
const description = ref("This is a simple component using TypeScript.");
const currentTime = ref();

let interval: NodeJS.Timeout | null = null;

onMounted(() => {
  interval = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString();
  }, 1000);
});

onBeforeUnmount(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<style scoped>
#sfc-example {
  padding-left: 10px;
  padding-right: 10px;
}

h1 {
  color: blue;
}
</style>
