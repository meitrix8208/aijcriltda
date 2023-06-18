<template>
  <NavBar />
  <div class="pl .dark:text-gray-100">
    <slot />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<style></style>
