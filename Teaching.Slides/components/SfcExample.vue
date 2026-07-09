<template>
  <div id="sfc-example">
    <h5>{{ title }}</h5>
    <p id="content">
      <button :disabled="isStartDisabled" @click="startClock">▶️ start</button>
      <button :disabled="isStopDisabled" @click="stopClock">⏸️ stop</button>
      {{ description }}: <span class="current-time">{{ currentTime }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, type Ref, computed } from "vue";

const initialTimeValue = "Clock stopped";

const title = ref("Hello Vue 3!");
const description = ref("This is a simple component using TypeScript.");
const currentTime = ref(initialTimeValue);
const interval: Ref<ReturnType<typeof setInterval> | null> = ref(null);

const isStartDisabled = computed(() => interval.value !== null);
const isStopDisabled = computed(() => interval.value === null);

function updateTime() {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString();
}

function startClock() {
  updateTime();
  // Start the interval to update the time every second
  interval.value = setInterval(updateTime, 1000);
}

function stopClock() {
  if (interval.value) {
    // Clear the interval when the component is unmounted to prevent memory leaks
    clearInterval(interval.value);
    interval.value = null;
  }

  currentTime.value = initialTimeValue;
}

// Event hooks to start and stop the clock when the component is mounted and unmounted
onMounted(() => {
  startClock();
});
onBeforeUnmount(() => {
  stopClock();
});
</script>

<style scoped>
#sfc-example {
  padding-left: 10px;
  padding-right: 10px;
  background-color: purple;
}

#content {
  padding-bottom: 20px;
}

.current-time {
  background-color: #f0f0f0;
  color: black;
  padding: 5px;
  border-radius: 5px;
  font-family: monospace;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
