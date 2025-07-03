<template>
  <div class="tabs">
    <div class="tabs-header">
      <button v-for="(tab, index) in props.tabs" @click="activeTabId = index">
        {{ tab.label }}
      </button>
    </div>
    <div class="tabs-container">
      <template v-for="(tab, index) in props.tabs">
        <iframe
          v-if="activeTabId === index"
          :src="tab.src"
          class="tab-iframe"
          :title="tab.label"
        ></iframe>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = withDefaults(
  defineProps<{
    height?: string;
    tabs: { label: string; src: string }[];
  }>(),
  {
    height: "400px",
  },
);

const activeTabId = ref(0);

const tabsHeight = computed(() => {
  return props.height;
});
</script>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: v-bind(tabsHeight);
}

.tabs-header {
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
}

.tabs-container {
  flex: 1;
}

iframe {
  width: 100%;
  height: 100%;
  border: red 2px solid;
  overflow: auto;
}

button {
  border: black 1px solid;
  background: lightgray;
  padding-left: 5px;
  padding-right: 5px;
}
button:hover {
  background: darkgray;
}
</style>
