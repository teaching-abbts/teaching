<template>
  <div id="data-binding">
    <h3>Data Binding</h3>
    <p>
      <label for="nachricht1">Vorname</label>
      <input type="text" id="nachricht1" v-model="vorname" />
    </p>
    <p>
      <label for="nachricht2">Nachname</label>
      <input type="text" id="nachricht2" v-model="nachname" />
    </p>
    <p>
      <label for="ganzname">Kombiniert:</label>
      <span id="ganzname">{{ kombinierteNachricht }}</span>
    </p>
    <p>
      <button @click="onResetClick">Zurücksetzen</button>
    </p>
  </div>
</template>

<script setup lang="js">
import { ref, computed } from "vue";

const originaleVorname = "Hansli";
const originaleNachname = "Bireweich";

const vorname = ref(originaleVorname);
const nachname = ref(originaleNachname);

const kombinierteNachricht = computed(() => {
  if (vorname.value && !nachname.value) {
    return `😱: ${vorname.value}`;
  }

  if (!vorname.value && nachname.value) {
    return `😱: ${nachname.value}`;
  }

  if (vorname.value && nachname.value) {
    return `😎 ${vorname.value} ${nachname.value} ✌️`;
  }

  return "???";
});

function onResetClick() {
  vorname.value = originaleNachricht1;
  nachname.value = originaleNachricht2;
}
</script>

<style scoped>
#data-binding {
  --uno: bg-white p-2 text-black;
}

#ganzname {
  --uno: ml-2 font-bold bg-gray-300 p-1 rounded;
}

input {
  --uno: w-60 bg-gray-200 p-1 rounded mx-2;
}

button {
  --uno: bg-white text-black px-2 rounded hover: bg-gray-400;
}
</style>
