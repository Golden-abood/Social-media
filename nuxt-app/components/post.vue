<template>
  <div>
    <div class="cursor-pointer news-feed">
      <header class="cursor-pointer news-feed__header">
        <div class="news-feed__header__user-image">
          <img :src="item.author.profile_image" class="image-rounded" />
        </div>
        <div class="news-feed__header__post-meta">
          <div class="news-feed__header__user-name">
            {{ item?.author.name }}
          </div>
          <span>
            <Icon color="primary" name="material-symbols-light:globe"></Icon>
            {{ item.created_at }}</span
          >
        </div>
        <div class="cursor-pointer news-feed__header__option">...</div>
      </header>
      <section class="pb-7 news-feed__feed">
        <p class="news-feed__fee__text">
          {{ item?.body }}
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
      <!-- <footer class="news-feed__footer">
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
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePostStore } from "~/stores/post";
const postStore = usePostStore();

const props = defineProps({
  item: { type: Object, required: true },
});
</script>

<style scoped></style>
