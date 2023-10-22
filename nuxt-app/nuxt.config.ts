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
    "@formkit/auto-animate/nuxt",
  ],
  image: {
    format: ["webp"],
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  /*
  pinia: {
    storeDirs: ["./stores/**"],
  },
  */
  css: ["vuetify/lib/styles/main.sass", "~/assets/styles/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  app: {
    head: {
      title: "",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
});
