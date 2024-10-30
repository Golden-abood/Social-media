<template>
  <div class="pt-5">
    <CreatePost />
    <Post
      v-for="(item, index) in allPosts"
      :post="item"
      :key="index"
      :is-pointer="true"
      @click="$router.push(`posts/${item.id}`)"
    />
  </div>
</template>

<script setup lang="ts">
import { type Post } from "~/types";

import { usePostStore } from "~/stores/post";
import { storeToRefs } from "pinia";
const postStore = usePostStore();
const { posts } = storeToRefs(postStore);
let allPosts = ref<Post[]>([]);
const { pending } = useLazyAsyncData(() => postStore.list());
allPosts.value = posts.value;
</script>

<style scoped></style>
