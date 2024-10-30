<template>
  <div>
    <div class="news-feed" :class="isPointer && 'cursor-pointer'">
      <header class="cursor-pointer news-feed__header">
        <div class="news-feed__header__user-image">
          <img :src="post.author.profile_image" class="image-rounded" />
        </div>
        <div class="news-feed__header__post-meta">
          <div class="news-feed__header__user-name">
            {{ post?.author.name }}
          </div>
          <span>
            <Icon color="primary" name="material-symbols-light:globe"></Icon>
            {{ post.created_at }}</span
          >
        </div>
        <div class="cursor-pointer news-feed__header__option">...</div>
      </header>
      <section class="pb-7 news-feed__feed">
        <p class="news-feed__fee__text">
          {{ post?.body }}
        </p>
        <div class="news-feed__feed__image-post">
          <img
            src="../assets/images/video-preview.jpg"
            id="abood"
            alt=""
            style="max-width: 100%; max-height: 40%"
          />
        </div>
      </section>
      <div v-if="showFooter">
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
          <Button @click="showComments = !showComments" class="comments"
            >{{ post?.comments_count }} Comments</Button
          >
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
        <div v-if="post?.comments?.length && showComments" class="w-full mt-8">
          <div
            v-for="item in post?.comments"
            class="p-3 m-4 rounded-xl bg-[#efefef]"
          >
            <div class="flex items-center gap-x-3">
              <img
                width="30"
                class="object-fill w-8 h-8 rounded-full"
                :src="item.author.profile_image"
              />
              <p class="font-bold">{{ item.author.username }}</p>
            </div>
            <div class="text-base">{{ item.body }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePostStore } from "~/stores/post";
import type { Post } from "~/types";
import { type PropType } from "vue";
const postStore = usePostStore();

const showComments = ref(false);

defineProps({
  post: { type: Object as PropType<Post>, required: true },
  showFooter: { type: Boolean, default: false },
  isPointer: { type: Boolean, default: false },
});
</script>

<style scoped></style>
