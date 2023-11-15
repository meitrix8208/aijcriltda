<template>
  <li>
    <div class="relative">
      <button
        id="dropdownNavbarLink"
        @click="toggleDropdown"
        data-dropdown-toggle="dropdownNavbar"
        class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      >
        Dropdown
        <svg
          class="w-5 h-5 ml-1"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <!-- Dropdown menu -->
      <div
        ref="target"
        id="dropdownNavbar"
        :class="{ block: dropdownNavbar, hidden: !dropdownNavbar }"
        class="z-10 absolute top-full right-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-400"
          aria-labelledby="dropdownLargeButton"
        >
          <li>
            <NuxtLink
              to="/"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Dashboard</NuxtLink
            >
          </li>
          <li aria-labelledby="dropdownNavbarLink">
            <div class="relative">
              <button
                id="doubleDropdownButton"
                data-dropdown-toggle="doubleDropdown"
                @click="doubleDropdown = !doubleDropdown"
                data-dropdown-placement="right-start"
                type="button"
                class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dropdown
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="doubleDropdown"
                :class="{ block: doubleDropdown, hidden: !doubleDropdown }"
                class="z-10 absolute top-0 right-full mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray -700 dark:text-gray-200"
                  aria-labelledby="doubleDropdownButton"
                >
                  <li>
                    <NuxtLink
                      to="/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >Overview</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >My downloads</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >Billing</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >Rewards</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Earnings</NuxtLink
            >
          </li>
        </ul>
        <div class="py-1">
          <NuxtLink
            to="/"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
            >Sign out</NuxtLink
          >
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  dropdown: Boolean,
  double: Boolean,
});

const dropdownNavbar = ref(props.dropdown);
const doubleDropdown = ref(props.double);
const target = ref(null);
const toggleDropdown = () => {
  if (dropdownNavbar.value) {
    dropdownNavbar.value = false;
  } else {
    dropdownNavbar.value = true;
  }
};
onClickOutside(target, (event: any) => {
  const dropdownNavbarE = document.getElementById("dropdownNavbarLink");
  if (event.target.id === dropdownNavbarE?.id) return;
  dropdownNavbar.value = false;
  doubleDropdown.value = false;
});
</script>
