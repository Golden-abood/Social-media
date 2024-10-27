<template>
  <nav
    class="w-full bg-white flex justify-between items-center pt-[35px] px-[20px] pb-[20px] rounded-[5px]"
  >
    <div class="flex items-center justify-between">
      <h2 class="mr-8 text-base font-semibold">Goldenbook</h2>
      <div class="hidden lg:flex items-center gap-x-[20px]">
        <p>
          <NuxtLink class="text-black no-underline" to="/">Home</NuxtLink>
        </p>
        <p>
          <NuxtLink class="text-[#666] no-underline" to="/profile"
            >Profile</NuxtLink
          >
        </p>
      </div>
    </div>
    <div class="flex items-center justify-end">
      <!-- <v-icon class="!lg:hidden cursor-pointer">mdi-menu</v-icon> -->
      <div class="flex">
        <div v-if="!token" class="flex">
          <Button
            size="small"
            class="bg-[#49af41] !text-white font-medium py-1 px-3 text-sm rounded-[6px] border-[1px] border-[#49af41] mr-3"
            @click="
              dialog = true;
              type = login;
            "
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="success"
            size="small"
            class="bg-[#49af41] !text-white font-medium py-1 px-3 text-sm rounded-[6px] border-[1px] border-[#49af41]"
            @click="
              dialog = true;
              type = register;
            "
          >
            Register
          </Button>
        </div>
        <div v-else class="flex items-center gap-x-4" id="user-profile">
          <div class="flex items-center justify-end gap-x-1">
            <img
              src="/images/team-02.jpg"
              class="max-w-[10%] rounded-full onject-fit"
            />
            <span class="text-sm">Golden</span>
          </div>
          <Button
            id="logout-btn"
            class="text-[#ff0000] hover:bg-[#ff0000] hover:text-white font-medium py-1 px-3 text-sm rounded-[6px] border-[1px] border-[#ff0000] mr-3"
            @click="dialog = true"
          >
            logout
          </Button>
        </div>
      </div>
    </div>
    <!-- <Dialog @close="closeDialog()" :dialog="dialog" :type="type" /> -->
  </nav>
</template>

<script setup lang="ts">
import type Button from "./ui/button/Button.vue";

const token = ref(false);
const type = ref();
const dialog = ref(false);

const closeDialog = () => {
  dialog.value = !dialog.value;
};

const login = reactive({
  title: "Sign in",
  userName: "user name",
  password: "password",
  btnTitle: "Login",
});
const register = reactive({
  title: "Sign up",
  userName: "user name",
  name: "name",
  password: "password",
  btnTitle: "Register",
});
/*
const createPost = reactive({
  title: "Create Post",
  title: {
    title: "title",
    type: "text",
  },
  body: {
    title: "body",
    type: "text",
  },
  image: {
    title: "image",
    type: "file",
  },

  btnTitle: "Create",
});
*/
</script>

<style scoped></style>
