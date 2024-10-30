<template>
  <div>
    <h3 class="mt-10">{{ post?.author.username }}</h3>
    <Post :post="post!!" :show-footer="true" :isPointer="false" />
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from "~/stores/post";
import { storeToRefs } from "pinia";

const postStore = usePostStore();
const { post } = storeToRefs(postStore);
const route = useRoute();
const id: any = route.params.id;

const { pending } = useLazyAsyncData(() => postStore.getPost(id));
</script>

<style scoped></style>
