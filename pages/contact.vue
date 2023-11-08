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

      <button
        type="submit"
        @click="sendEmail()"
        value="Enviar correo"
      />
    </form>
  </section>
</template>

<script setup lang="ts">
const mensaje = ref("");

const sendEmail = () => {
  globalThis.open(`mailto:test@example.com?body=${mensaje.value}`);
};
</script>

<style></style>
