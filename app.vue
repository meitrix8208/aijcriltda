<template>
  <defaultLayout>
    <NuxtPage />
  </defaultLayout>
</template>

<script setup lang="ts">
import defaultLayout from "@/layouts/default.vue";
useHead({
  bodyAttrs: {
    class: "bg-gray-100 dark:bg-gray-900",
  },
  htmlAttrs: {
    lang: "es",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
    },
  ],
});
const route = useRoute();

const title = computed(() => {
  if (route.name === "index") {
    return "Home";
  }
  return route.name;
});
useSeoMeta({
  title: () => `asesorías integrales - ${String(title.value)}`,
  description: "asesorías integrales juan Carlos Rodriguez iglesias limitada",
});
</script>
