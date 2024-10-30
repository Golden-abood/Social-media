import { defineStore } from "pinia";
import { type Post } from "~/types";
export const usePostStore = defineStore("post", () => {
  const posts = ref<Post[]>([]);
  const post = ref<Post>();
  let baseUrl = "https://tarmeezacademy.com/api/v1";

  const list = async () => {
    const res = await fetch(`${baseUrl}/posts?page=1240`);
    const data = await res.json();
    posts.value = data.data;
  };

  const getPost = async (id: number) => {
    const res = await fetch(`${baseUrl}/posts/${id}`);
    const data = await res.json();
    post.value = data.data;
  };
  return { posts, post, list, getPost };
});
