<template>
  <div class="border border-red p-2">
    <label for="kind">🍼 Kind 👶</label>
    <input
      id="kind"
      class="border"
      type="text"
      :value="props.text"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
interface ChildComponentProps {
  text: string;
}

interface ChildComponentEvents {
  "update:text": [v: string];
}

const props = defineProps<ChildComponentProps>();
const emit = defineEmits<ChildComponentEvents>();

function onInput(e: Event) {
  const inputEl = e.target as HTMLInputElement;
  emit("update:text", inputEl.value);
}
</script>
