// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@pinia/nuxt",
    "shadcn-nuxt",
    "@nuxt/image",
    "@formkit/auto-animate/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  image: {
    format: ["webp"],
  },

  css: ["~/assets/styles/main.scss"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  app: {
    head: {
      title: "Social Media",
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
