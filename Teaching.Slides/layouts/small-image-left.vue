<script setup lang="ts">
import { computed } from "vue";

export interface ImageLeftProps {
  image?: string;
  backgroundSize?:
    | "auto"
    | "length"
    | "cover"
    | "contain"
    | "initial"
    | "inherit";
}

const props = withDefaults(defineProps<ImageLeftProps>(), {
  backgroundSize: "cover",
});

const style = computed(() => ({
  backgroundImage: `url(${props.image})`,
  backgroundSize: props.backgroundSize,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
}));
</script>

<template>
  <div class="flex flex-row w-full h-full">
    <div class="w-70%" :style="style"></div>
    <div class="slidev-layout default">
      <slot />
    </div>
  </div>
</template>
