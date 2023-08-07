// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "@nuxt/devtools",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],
  ssr: true,
  css: ["@unocss/reset/tailwind.css"],
  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    classSuffix: "",
  },
  vite: {
    resolve: {
      alias: {
        "@": new URL("./", import.meta.url).pathname,
      },
    },
  },
  app : {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
