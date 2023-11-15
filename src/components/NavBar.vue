<template>
  <nav class="bg-green border-gray-400 dark:bg-gray-700">
    <div
      class="max-w-screen-xl flex flex-wrap sm:justify-around items-center justify-between mx-auto p-4"
      ref="target"
    >
      <NuxtLink
        to="/"
        class="flex items-center"
      >
        <NuxtImg
          src="/favicon.png"
          class="h-12 mr-3"
          alt="asesorías Logo"
        />
        <div
          class="self-center text-3.3 md:text-lg text-wrap font-bold dark:text-gray100 text-black"
        >
          <span class="block sm:inline-block">Asesorías Integrales Juan </span>
          <wbr />
          <span>Carlos Rodriguez Iglesias Ltda</span>
        </div>
      </NuxtLink>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="flex items-center p-2 ml-3 text-sm text-gray-900 rounded-lg md:hidden hover:bg-white dark:hover:text-white focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        class="w-full md:block md:w-auto dark:bg-transparent bg-green md:bg-transparent md:shadow-none"
        id="navbar-default"
        :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
      >
        <ul
          class="font-medium flex flex-col p-1 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-green dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
        >
          <li>
            <NuxtLink
              to="/"
              class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Inicio
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Nosotros
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/services"
              class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Servicios
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/ourExperience"
              class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Nuestra Experiencia
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contacto
            </NuxtLink>
          </li>
          <ColorMode />
          <!-- <DropDown
            :double="double"
            :dropdown="dropdown"
          /> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
// const target = ref(null);
// const double = ref(false);
// const dropdown = ref(false);
// import { onClickOutside } from "@vueuse/core";
// onClickOutside(target, (event: any) => {
//   isMenuOpen.value = false;
//   double.value = true;
//   dropdown.value = true;
// });
</script>
