<template>
  <div class="ml-2 mt-0">
    <ClientOnly>
      <button
        :id="'color-mode-button-' + props.parent"
        @click="toggleTheme"
        :title="colorMode.preference"
        class="focus:outline-none text-gray-500"
      >
        <div v-if="colorMode.preference === 'light'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            ></path>
            <circle
              cx="12"
              cy="12"
              r="4"
            ></circle>
            <path
              d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
            ></path>
          </svg>
        </div>
        <div v-else-if="$colorMode.preference === 'dark'">
          <svg
            style="width: 24px; height: 24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"
            />
          </svg>
        </div>
        <div v-else-if="$colorMode.preference === 'system'">
          <svg
            style="width: 24px; height: 24px"
            viewBox="0 0 24 24"
          >
            <path
              :fill="$colorMode.value === 'dark' ? 'white' : 'black'"
              d="M19 3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
            ></path>
          </svg>
        </div>
      </button>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  parent: {
    type: String,
    required: true,
  },
});
const colorMode = useColorMode();
const toLightMode = () => {
  colorMode.preference = "light";
  colorMode.value = "light";
};

const toDarkMode = () => {
  colorMode.preference = "dark";
  colorMode.value = "dark";
};

const toSystemMode = () => {
  colorMode.preference = "system";
  colorMode.value = "system";
};
function sayPreference() {
  console.log(colorMode.preference);
  console.log(colorMode.value);
}
const toggleTheme = () => {
  if (colorMode.preference === "system") {
    toDarkMode();
    sayPreference();
  } else if (colorMode.preference === "dark") {
    toLightMode();
    sayPreference();
  } else if (colorMode.preference === "light") {
    toSystemMode();
    sayPreference();
  }
};
</script>
