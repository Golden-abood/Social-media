<template>
  <v-dialog
    class="w-[100%] md:w-[35%]"
    :model-value="dialog"
    persistent
    transition="fade-transition"
  >
    <v-card class="py-5">
      <div class="flex px-6 justify-between mb-5">
        <v-card-title> {{ type.title }} </v-card-title>

        <v-icon @click="emits('close')">mdi-close</v-icon>
      </div>
      <div class="px-10 py-5">
        <v-label class="mb-4"> {{ type.userName }} :</v-label>
        <v-text-field
          v-model="authStore.userName"
          type="text"
          variant="outlined"
        ></v-text-field>
        <v-label class="my-4">{{ type.password }} :</v-label>
        <v-text-field
          v-model="authStore.password"
          type="text"
          variant="outlined"
        ></v-text-field>
        <div v-if="type.title === 'Sign up'">
          <v-label class="my-4">{{ type.name }} :</v-label>
          <v-text-field
            v-model="authStore.name"
            type="text"
            variant="outlined"
          ></v-text-field>
        </div>
      </div>
      <div class="text-center">
        <v-btn
          v-if="type.title === 'Sign in'"
          color="primary"
          @click="loginUser()"
          >{{ type.btnTitle }}</v-btn
        >
        <v-btn v-else color="primary" @click="registerUser()">{{
          type.btnTitle
        }}</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();

const emits = defineEmits(["close"]);

defineProps({
  dialog: { required: true, type: Boolean },
  type: { required: true, type: Object },
});

const loginUser = async () => {
  try {
    await authStore.login();
  } catch (err) {
    console.log(err);
  }
};
const registerUser = async () => {
  try {
    await authStore.register();
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped></style>
