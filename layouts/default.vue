<template>
  <NavBar />
  <ContainerPage>
    <slot />
  </ContainerPage>
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
