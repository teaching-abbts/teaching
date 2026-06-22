<template>
  <div>
    <h2>Bedingungen und Schleifen</h2>
    <input type="checkbox" id="bedingung-1" v-model="bedingung1" />
    <label for="bedingung-1">Liste Anzeigen?</label>
    <ul v-if="bedingung1">
      <li v-for="(text, i) in liste" :key="i">{{ i + 1 }}: {{ text }}</li>
    </ul>
    <p>
      <label for="eingabetext">Eingabetext</label>
      <input type="text" id="eingabetext" v-model="eingabetext" @keyup.enter="onKeyEnter" />
    </p>
  </div>
</template>

<script setup lang="js">
import { ref } from "vue";

const bedingung1 = ref(true);
const liste = ref(["eins", "zwei", "drei"]);

const eingabetext = ref();

function onKeyEnter() {
  const neuerEingabetext = eingabetext.value;
  eingabetext.value = "";

  liste.value.push(neuerEingabetext);
}
</script>

<style scoped>
input[type="checkbox"] {
  --uno: mr-2;
}

input[type="text"] {
  --uno: ml-2;
}
</style>
