import { defineStore } from "pinia";

export const usePostStore = defineStore("post", () => {
    let post = "smd"
  return {post};
});
