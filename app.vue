<template>
  <defaultLayout>
    <NuxtPage />
  </defaultLayout>
</template>

<script setup lang="ts">
import defaultLayout from "@/layouts/default.vue";

useHead({
  bodyAttrs: {
    class: "bg-white dark:bg-gray-900",
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
  description: "En Asesorías Integrales Juan Carlos Rodriguez Iglesias LTDA., brindamos asesoramiento y acompañamiento, para la óptima gestión de la seguridad y salud en el trabajo, con Profesionales especializados, implementación del SG-SST, capacitaciones, asesorías, auditorías, entre otros.",
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
