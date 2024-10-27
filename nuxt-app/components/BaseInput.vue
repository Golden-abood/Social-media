<template>
  <label for="text">
    <input type="text" id="text" :placeholder="placeholder" />
  </label>
</template>

<script setup lang="ts">
defineProps({
  placeholder: { type: String, required: true },
});
</script>

<style scoped></style>
