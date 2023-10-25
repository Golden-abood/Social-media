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
    <div class="bg-[#d9d7d9] px-6 py-6 rounded-lg -my-4">
      <div v-for="item in post?.comments" class="py-3">
        <div class="flex items-center gap-x-3">
          <nuxt-img
            width="30"
            class="rounded-full object-fill"
            :src="item.author.profile_image"
          ></nuxt-img>
          <p class="font-bold">{{ item.author.username }}</p>
        </div>
        <div class="text-base">{{ item.body }}</div>
      </div>
      <v-text-field class="bg-white" variant="outlined">
        <template #append>
          <v-icon color="dark" class="mr-3 cursor-pointer">mdi-send </v-icon>
        </template>
      </v-text-field>
    </div>
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
