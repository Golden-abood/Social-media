<template>
  <div>
    <h3 class="mt-10">{{ post?.author.username }}</h3>
    <div class="bg-white rounded-lg pa-5 p-[20px] mt-[40px]">
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
      <div class="pb-3 text">
        <h3 class="py-2 text-lg font-semibold">{{ post?.title }}</h3>
        <p class="text-base">{{ post?.body }}</p>
      </div>
      <hr class="bg-[#6666] border-none h-[1px] mx-auto mb-[20px]" />

      <div class="flex text-sm comments posts-center gap-x-4">
        <div>
          <Icon name="material-symbols:edit"></Icon>
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
    </div>
    <div
      v-if="post?.comments?.length"
      class="bg-[#d9d7d9] px-6 py-6 rounded-lg -my-4"
    >
      <div v-for="item in post?.comments" class="py-3">
        <div class="flex items-center gap-x-3">
          <img
            width="30"
            class="object-fill rounded-full"
            :src="item.author.profile_image"
          />
          <p class="font-bold">{{ item.author.username }}</p>
        </div>
        <div class="text-base">{{ item.body }}</div>
      </div>
    </div>
    <!-- <div class="p-3 mt-5 bg-white rounded-lg">
      <footer class="news-feed__footer">
        <div class="news-feed__footer__reaction flex !gap-x-1">
          <Icon
            class="cursor-pointer duration-300 hover:scale-[1.5]"
            name="material-symbols:thumb-up"
            color="blue"
          ></Icon>
          <Icon
            class="cursor-pointer duration-300 hover:scale-[1.5] duration-2"
            name="ic:baseline-favorite"
            color="red"
          ></Icon>
          <Icon
            class="cursor-pointer duration-300 hover:scale-[1.5] duration-2"
            name="ic:round-insert-emoticon"
            color="orange"
          ></Icon>
        </div>
        <div class="comments">19 Comments</div>
      </footer>
      <div class="news-feed__create-comment">
        <div class="input-box__text">
          <img
            src="../assets/images/avatar-04.png"
            alt=""
            class="image-rounded"
          />
          <BaseInput placeholder="Whats on Your Mound , abood" />
        </div>
      </div>
    </div> -->
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
