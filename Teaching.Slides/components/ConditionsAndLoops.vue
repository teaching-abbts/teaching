<template>
  <div id="bedingung-und-schleifen">
    <h3>Bedingungen und Schleifen</h3>
    <input type="checkbox" id="bedingung-1" v-model="listeAnzeigen" />
    <label for="bedingung-1">Liste Anzeigen?</label>
    <ul v-if="listeAnzeigen">
      <li v-for="(text, i) in liste" :key="i">{{ i + 1 }}: {{ text }}</li>
    </ul>
    <p>
      <label for="eingabetext">Eingabetext</label>
      <input
        type="text"
        id="eingabetext"
        v-model="neuerEingabetext"
        @keyup.enter="onKeyEnter"
      />
      <button @click="onKeyEnter">Hinzufügen</button>
    </p>
  </div>
</template>

<script setup lang="js">
import { ref } from "vue";

const listeAnzeigen = ref(true);
const liste = ref(["eins", "zwei", "drei"]);

const neuerEingabetext = ref();

function onKeyEnter() {
  const neuerText = neuerEingabetext.value;
  neuerEingabetext.value = "";

  liste.value.push(neuerText);
}
</script>

<style scoped>
#bedingung-und-schleifen {
  --uno: bg-white p-2 text-black overflow-y-auto;
}

input[type="checkbox"] {
  --uno: mr-2;
}

input[type="text"] {
  --uno: bg-gray-200 p-1 rounded mx-2 w-40;
}

button {
  --uno: bg-white text-black p-1 rounded hover: bg-gray-400;
}

button:hover {
  --uno: bg-red-400;
}
</style>
