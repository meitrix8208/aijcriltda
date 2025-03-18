import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-03-17",
  devtools: { enabled: true },
  srcDir: "src",
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

  image: {
    quality: 80,
    format: ['webp']
  }
  ,
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
