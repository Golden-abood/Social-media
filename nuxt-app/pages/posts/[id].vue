<template>
  <div>
    <h3 class="mt-10">{{ post?.author.username }}</h3>
    <v-card class="bg-white rounded-lg pa-5 p-[20px] mt-[40px]">
      <div class="user pb-3 flex items-center gap-x-[20px]">
        <img
          :src="post?.author.profile_image"
          class="max-w-[6%] rounded-full"
        />
        <h3 class="font-semibold">{{ post?.author.name }}</h3>
      </div>
      <hr class="bg-[#6666] border-none h-[1px] mx-auto mb-[20px]" />
      <img :src="post?.image" class="w-full rounded-md" />
      <span class="text-[#666] text-sm">{{ post?.created_at }}</span>
      <div class="text pb-3">
        <h3 class="text-lg font-semibold py-2">{{ post?.title }}</h3>
        <p class="text-base">{{ post?.body }}</p>
      </div>
      <hr class="bg-[#6666] border-none h-[1px] mx-auto mb-[20px]" />

      <div class="comments text-sm flex posts-center gap-x-4">
        <div>
          <v-icon>mdi-pencil</v-icon>
          <span>{{ post?.comments_count }} Comments</span>
        </div>
        <div>
          <span class="bg-[#666] text-white rounded-6">{{
            post?.tags.forEach((e: any) => {
              e;
            })
          }}</span>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from "~/stores/post";
import { storeToRefs } from "pinia";

const postStore = usePostStore();
const { post } = storeToRefs(postStore);
console.log(post.value);
const route = useRoute();
const id: any = route.params.id;

const { pending } = useLazyAsyncData(() => postStore.getPost(id));
</script>

<style scoped></style>
