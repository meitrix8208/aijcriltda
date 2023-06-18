<template>
  <nav class="bg-green border-gray-400 dark:bg-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
      <NuxtLink to="/" class="flex items-center">
        <img src="favicon.ico" class="h-12 mr-3" alt="asesorías Logo" />
        <span class="self-center md:text-lg text-wrap font-semibold dark:text-gray100 text-black">Asesorías Integrales<wbr/> Juan Carlos Rodriguez Iglesias Ltda</span>
      </NuxtLink>
      <button
        data-collapse-toggle="navbar-default"
        type="button" 
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-900 rounded-lg md:hidden hover:bg-white hover:text-gray-900 focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
      >
        <ul
          class="font-medium flex flex-col p-1 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-green dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
        >
          <li>
            <NuxtLink
              to="/"
              class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="block py-2 pl-3 pr-4  rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/services"
              class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Services
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/ourExperience"
              class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Our Experience
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
</script>