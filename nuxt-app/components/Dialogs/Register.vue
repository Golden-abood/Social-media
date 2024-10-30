<template>
  <Dialog class="!bg-white">
    <DialogTrigger> <slot /> </DialogTrigger>
    <DialogContent class="max-w-xl p-0 !bg-white">
      <!-- my-16 -->
      <DialogClose
        class="absolute p-2 rounded-full -right-4 -top-4 bg-[#49af41]"
      >
        <NuxtImg src="/images/icons/close_icon_x.svg" class="w-5 h-5" />
      </DialogClose>
      <DialogTitle class="py-6 font-semibold text-center box_sh">
        SIGN UP
      </DialogTitle>

      <div class="px-10 text-center">
        <p class="text-base font-bold">
          Welcome to Goldenbook <br />
          Your Gateway to Unforgettable Adventures!
        </p>
        <p class="pt-3 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet
          quia quas velit quo officiis cupiditate voluptate, illum a voluptatem
          nisi magnam recusandae rerum distinctio odit dolore harum repudiandae
        </p>

        <form class="pt-8 border-b-[1px] border-dark_gray border-dashed">
          <Input placeholder="Email address" class="login_input" />
          <Input
            type="password"
            placeholder="password"
            class="relative mt-6 login_input"
          >
            <NuxtImg
              src="/images/icons/icon_password.svg"
              class="absolute top-[50%] right-5"
            />
          </Input>
          <div class="flex items-center justify-between mt-4">
            <div class="flex items-center gap-x-3">
              <Checkbox
                id="remember_me"
                :checked="isChecked"
                @update:checked="isChecked = !isChecked"
                :class="isChecked && 'bg-[#49af41] text-white '"
              />
              <Label for="remember_me"> Remebmer Me </Label>
            </div>
          </div>
          <Button class="w-full my-5 bg-[#49af41] text-white">Register</Button>
        </form>

        <div class="flex items-center justify-between py-4 gap-x-5">
          <span
            class="text-[13px] font-medium text-start text-dark_gray font-rob"
            >Already a member? Log in below to access your account and explore
            the world with ease.
          </span>
          <Button
            class="bg-transparent rounded-lg font-medium border-[#49af41] border-[1px] text-[#49af41] font-rob text-base hover:bg-transparent"
            >Login</Button
          >
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const isChecked = ref(false);
</script>

<style scoped>
.box_sh {
  box-shadow: 0 3px 6px rgb(0 0 0 / 15%);
}
</style>
