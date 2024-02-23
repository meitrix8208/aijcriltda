<template>
  <section
    class="max-w-xl mx-auto mt-8 p-8 bg-white dark:bg-gray-800 shadow-md rounded-md"
  >
    <form
      method="post"
      enctype="text/plain"
    >
      <div class="mb-4">
        <label
          for="mensaje"
          class="block text-md font-medium text-gray-700 dark:text-gray-300"
        >
          Envíanos un correo con tus dudas o sugerencias a la siguiente
          dirección:
        </label>
        <label
          for="correo"
          class="block text-sm font-medium text-green-500"
        >
          juancrodriguez6801@gmail.com
        </label>
        <textarea
          id="mensaje"
          v-model="mensaje"
          rows="15"
          class="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200 transition duration-150 dark:bg-gray-700 dark:text-white"
        ></textarea>
      </div>
      <button
        type="submit"
        @click="sendEmail()"
        class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 active:bg-green-800"
      >
        Enviar correo
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
const mensaje = ref("");

const sendEmail = () => {
  globalThis.open(
    `mailto:juancrodriguez6801@gmail.com?body=${mensaje.value}&subject=Contacto desde la página web`,
    "_self"
  );
};
</script>
<style>
#mensaje {
  resize: none;
  scroll-snap-type: mandatory;
}
</style>
