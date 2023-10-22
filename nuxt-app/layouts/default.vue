<template>
  <div class="flex px-[20px] md:mx-0 min-h-screen bg-[#eee8ff]">
    <div class="left hidden md:flex min-w-[22.5rem]"></div>
    <div class="middle mx-auto lg:mx-0 min-w-[90%] lg:min-w-[42.5rem]">
      <NavBar />
      <div class="pb-16">
        <slot />
      </div>
    </div>
    <div class="right hidden md:flex min-w-[22.5rem]"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
body {
  font-family: "Exo 2", sans-serif;
}
</style>
