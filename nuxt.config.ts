import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@nuxt/devtools"],
  ssr: true,
  css: ["@unocss/reset/tailwind.css"],

  vite: {
    resolve: {
      alias: {
        "@": new URL("./", import.meta.url).pathname,
      },
    },
  },
});
