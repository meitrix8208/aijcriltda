<template>
  <section>
    <form
      method="post"
      enctype="text/plain"
    >
      <br /><br />

      <label for="mensaje">Mensaje:</label>
      <textarea
        id="mensaje"
        v-model="mensaje"
        rows="4"
        cols="50"
      ></textarea>
      <br /><br />

      <input
        type="submit"
        @click="sendEmail()"
        value="Enviar correo"
      />
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
const mensaje = ref("Mensaje predeterminado.");

const sendEmail = () => {
  globalThis.open(`mailto:test@example.com?body=${mensaje.value}`);
};
</script>

<style></style>
