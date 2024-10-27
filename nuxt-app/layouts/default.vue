<template>
  <div
    class="grid grid-cols-3 md:grid-cols-5 justify-items-center px-[20px] md:mx-0 min-h-screen bg-[#f0f0f0]"
  >
    <div class="md:col-span-1"></div>
    <div class="col-span-3">
      <NavBar />
      <div class="pb-16">
        <slot />
      </div>
    </div>
    <div class="md:col-span-1"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
body {
  font-family: "Exo 2", sans-serif;
}
</style>
