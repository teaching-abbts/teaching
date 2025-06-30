<template>
  <div>
    <h2>Data Binding</h2>
    <ul>
      <li>{{ nachricht1 }}</li>
      <li><input v-model="nachricht1" /></li>
      <li>{{ nachricht2 }}</li>
      <li><input v-model="nachricht2" /></li>
      <li>{{ kombinierteNachricht }}</li>
      <li>
        <button @click="onResetClick">Zurücksetzen</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="js">
import { ref, computed } from "vue";

const originaleNachricht1 = "Erste Nachricht";
const originaleNachricht2 = "Zweite Nachricht";

const nachricht1 = ref(originaleNachricht1);
const nachricht2 = ref(originaleNachricht2);

const kombinierteNachricht = computed(() => {
  if (nachricht1.value && !nachricht2.value) {
    return `1: ${nachricht1.value}`;
  }

  if (!nachricht1.value && nachricht2.value) {
    return `2: ${nachricht2.value}`;
  }

  if (nachricht1.value && nachricht2.value) {
    return `${nachricht1.value} + ${nachricht2.value}`;
  }

  return "???";
});

function onResetClick() {
  nachricht1.value = originaleNachricht1;
  nachricht2.value = originaleNachricht2;
}
</script>

<style scoped>
input {
  --uno: w-60;
}

button {
  --uno: bg-white text-black px-2 rounded hover: bg-gray-400;
}
</style>
