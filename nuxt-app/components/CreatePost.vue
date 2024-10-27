<template>
  <div class="create-post">
    <div class="!pb-5 input-box__text">
      <img
        src="../assets/images/avatar-04.png"
        class="w-10 rounded-full create-post__image"
      />
      <BaseInput placeholder="create post" />
    </div>
    <div class="pt-3 create-post__buttons">
      <div class="create-post__buttons__button">
        <Icon name="ri:video-add-fill" color="red"></Icon>
        <span>Live Video</span>
      </div>
      <div class="create-post__buttons__button">
        <Icon name="ri-image-line" color="orange"></Icon>

        <span>Photo/Video</span>
      </div>
      <div class="create-post__buttons__button">
        <Icon name="ri-emotion-happy-line" color="green"></Icon>
        <span>Felling/activity</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
