<template>
  <NavBar />
  <div class="dark:text-gray-100 container mx-auto px-10 md:px-38 pt-4">
    <slot />
  </div>
  <FooterComp />
</template>

<style>
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #9ca3af #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 9px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #a4a1a5;
  border-radius: 10px;
  border: 6px none #ffffff;
}
</style>
