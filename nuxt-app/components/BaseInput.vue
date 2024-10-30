<template>
  <Label class="relative items-center w-full" for="text">
    <Input type="text" id="text" :placeholder="placeholder" />
    <span
      class="absolute inset-y-0 flex items-center justify-center px-2 cursor-pointer end-0"
    >
      <Icon name="material-symbols:send" class="size-6 text-muted-foreground" />
    </span>
  </Label>
</template>

<script setup lang="ts">
import type Input from "./ui/input/Input.vue";
import type Label from "./ui/label/Label.vue";

defineProps({
  placeholder: { type: String, required: true },
});
</script>

<style scoped></style>
