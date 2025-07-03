<template>
  <div class="controls">
    <label for="nbrOfArticles">Anzahl Artikel:</label>
    <input type="number" id="nbrOfArticles" v-model="nbrOfArticles" />
    <label for="richtung">Richtung:</label>
    <select id="richtung" v-model="flexDirection">
      <option
        v-for="direction in flexDirections"
        :key="direction"
        :value="direction"
      >
        {{ direction }}
      </option>
    </select>
    <label for="minBreite">Minimale Breite:</label>
    <select id="minBreite" v-model="articleMinWidth">
      <option v-for="width in articleMinWidths" :key="width" :value="width">
        {{ width }}
      </option>
    </select>
    <label for="wrap">Wrap:</label>
    <select id="wrap" v-model="flexWrap">
      <option v-for="wrap in flexWraps" :key="wrap" :value="wrap">
        {{ wrap }}
      </option>
    </select>
  </div>
  <!-- FLEXBOX -->
  <div class="flexbox">
    <header>
      <h1>Beispiel für Flexbox</h1>
    </header>
    <section>
      <article v-for="n in nbrOfArticles" :key="n">
        <h2>Artikel {{ n }}</h2>
        <p>Inhalt…</p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const flexDirections = ["row", "column"];
const articleMinWidths = ["0px", "200px", "300px"];
const flexWraps = ["wrap", "nowrap"];

const flexDirection = ref("row");
const articleMinWidth = ref("0px");
const flexWrap = ref("nowrap");
const nbrOfArticles = ref(3);
</script>

<style lang="css" scoped>
/* CSS-Styles für die Flexbox */
section {
  display: flex;
  flex-direction: v-bind(flexDirection);
  flex-wrap: v-bind(flexWrap);
}

article {
  min-width: v-bind(articleMinWidth);
}
/* CSS-Styles für das Layout */
.controls {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  --uno: text-xs;
}
input {
  max-width: 50px;
}
.flexbox {
  max-width: 400px;
  max-height: 400px;
  overflow: auto;
}

body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
section {
  zoom: 0.8;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
</style>
