<template>
  <div>
    <v-card
      class="post bg-white rounded-lg pa-5 p-[20px] mt-[40px]"
      @click="$router.push(`posts/${item.id}`)"
    >
      <div class="user pb-3 flex items-center gap-x-[20px]">
        <img :src="item.author.profile_image" class="max-w-[6%] rounded-full" />
        <h3 class="font-semibold">{{ item.author.name }}</h3>
      </div>
      <hr class="bg-[#6666] border-none h-[1px] mx-auto mb-[20px]" />
      <img :src="item.image" class="w-full rounded-md" />
      <span class="text-[#666] text-sm">{{ item.created_at }}</span>
      <div class="text pb-3">
        <h3 class="text-lg font-semibold py-2">{{ item.title }}</h3>
        <p class="text-base">{{ item.body }}</p>
      </div>
      <hr class="bg-[#6666] border-none h-[1px] mx-auto mb-[20px]" />

      <div class="comments text-sm flex items-center gap-x-4">
        <div>
          <v-icon>mdi-pencil</v-icon>
          <span>{{ item.comments_count }} Comments</span>
        </div>
        <div>
          <span class="bg-[#666] text-white rounded-6">{{
            item.tags.forEach((e: any) => {
              e;
            })
          }}</span>
        </div>
      </div>
    </v-card>
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
