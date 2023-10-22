<template>
  <div
    class="fixed bottom-5 right-[10%] flex justify-center items-center w-[40px] h-[40px]"
  >
    <v-btn icon="mdi-plus" color="#007ffe"></v-btn>
  </div>
  <div>
    <Post v-for="(item, index) in allPosts" :item="item" :key="index" />
  </div>
</template>

<script setup lang="ts">
// import { Post } from "~/types";

import { usePostStore } from "~/stores/post";
import { storeToRefs } from "pinia";
const postStore = usePostStore();
const { posts } = storeToRefs(postStore);
// let allPosts = ref<Post[]>([]);
let allPosts = ref([]);
const { pending } = useLazyAsyncData(() => postStore.list());
allPosts.value = posts.value;
</script>

<style scoped></style>
