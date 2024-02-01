<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
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

const messages = [
  `Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.`, // chromium based
  `NotFoundError: The object can not be found here.`, // safari
];
if (typeof window !== "undefined") {
  window.addEventListener("error", (ev) => {
    if (messages.includes(ev.message)) {
      ev.preventDefault();
      window.location.reload();
    }
  });
}
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
  ogTitle: () => `asesorías integrales - ${String(title.value)}`,
  ogDescription: "En Asesorías Integrales Juan Carlos Rodriguez Iglesias LTDA., brindamos asesoramiento y acompañamiento, para la óptima gestión de la seguridad y salud en el trabajo, con Profesionales especializados, implementación del SG-SST, capacitaciones, asesorías, auditorías, entre otros.",
  ogImage: () => `https://aijcriltda.netlify.app/img3.jpg`,
  ogUrl: "https://aijcriltda.netlify.app/",
  twitterTitle: () => `asesorías integrales - ${String(title.value)}`,
  twitterDescription: "En Asesorías Integrales Juan Carlos Rodriguez Iglesias LTDA., brindamos asesoramiento y acompañamiento, para la óptima gestión de la seguridad y salud en el trabajo, con Profesionales especializados, implementación del SG-SST, capacitaciones, asesorías, auditorías, entre otros.",
  twitterImage: () => `https://aijcriltda.netlify.app/img3.jpg`,
  twitterCard: "summary_large_image",
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
