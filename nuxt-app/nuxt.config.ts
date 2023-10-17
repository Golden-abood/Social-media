// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@pinia/nuxt",
    "@unocss/nuxt",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
  ],
  image: {
    format: ["webp"],
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
  /*
  pinia: {
    storeDirs: ["./stores/**"],
  },
  */
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
