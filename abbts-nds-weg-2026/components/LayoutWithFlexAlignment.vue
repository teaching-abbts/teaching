<script setup lang="ts">
import { ref } from "vue";

const displayOptions = ["flex", "block"];
const alignItemsOptions = ["flex-start", "center", "flex-end", "stretch"];
const justifyContentOptions = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
];

const display = ref("block");
const alignItems = ref("flex-start");
const justifyContent = ref("space-around");
</script>

<template>
  <div class="controls">
    <label for="display">Display:</label>
    <select id="display" v-model="display">
      <option v-for="option in displayOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    <template v-if="display === 'flex'">
      <label for="alignItems">Align Items:</label>
      <select id="alignItems" v-model="alignItems">
        <option
          v-for="option in alignItemsOptions"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
      <label for="justifyContent">Justify Content:</label>
      <select id="justifyContent" v-model="justifyContent">
        <option
          v-for="option in justifyContentOptions"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </template>
  </div>
  <!-- FLEXBOX -->
  <div class="flexbox">
    <button>Smile</button>
    <button>Laugh</button>
    <button>Wink</button>
    <button>Shrug</button>
    <button>Blush</button>
  </div>
</template>

<style lang="css" scoped>
/* CSS-Styles für die Flexbox */
.flexbox {
  display: v-bind(display);
  align-items: v-bind(alignItems);
  justify-content: v-bind(justifyContent);
}

/* CSS-Styles für das Layout */
.controls {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  --uno: text-xs;
}
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
.flexbox {
  height: 100px;
  border: 1px solid red;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
  border: black 1px solid;
  background: lightgray;
  padding: 5px;
}
button:hover {
  background: darkgray;
}
</style>
