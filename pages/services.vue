<template>
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-14 justify-items-center">
    <div class="pr-3">
      <ul>
        <li class="pt-4">
          <button
            @click="changeComponent(homeComp)"
            class="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded"
            :class="{ 'bg-green-900': currentComponent === homeComp }"
          >
            Servicios
          </button>
        </li>
        <li class="pt-4">
          <button
            @click="changeComponent(FormacionYCap)"
            class="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded"
            :class="{ 'bg-green-900': currentComponent === FormacionYCap }"
          >
            Formacion y Capacitación
          </button>
        </li>
        <li class="pt-4">
          <button
            @click="changeComponent(SeguridadIndustrial)"
            class="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded"
            :class="{
              'bg-green-900': currentComponent === SeguridadIndustrial,
            }"
          >
            Seguridad Industrial
          </button>
        </li>
        <li class="pt-4">
          <button
            @click="changeComponent(HigieneIndustrial)"
            class="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded"
            :class="{ 'bg-green-900': currentComponent === HigieneIndustrial }"
          >
            Higiene Industrial
          </button>
        </li>
        <li class="pt-4">
          <button
            @click="changeComponent(MedicinaPreventiva)"
            class="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded"
            :class="{ 'bg-green-900': currentComponent === MedicinaPreventiva }"
          >
            Medicina Preventiva y del Trabajo
          </button>
        </li>
        <li class="pt-4">
          <button
            @click="changeComponent(prestacionServicios)"
            class="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded"
            :class="{
              'bg-green-900': currentComponent === prestacionServicios,
            }"
          >
            Prestacion Servicios Asistenciales
          </button>
        </li>
        <li class="pt-4">
          <button
            @click="changeComponent(MedioAmbiente)"
            class="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded"
            :class="{ 'bg-green-900': currentComponent === MedioAmbiente }"
          >
            Medio Ambiente y Auditorias
          </button>
        </li>
      </ul>
    </div>
    <div class="col-span-3 w-full">
      <transition
        name="slide-fade"
        mode="out-in"
      >
        <component :is="currentComponent" />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import homeComp from "~/components/ourServices/homeComp.vue";
import FormacionYCap from "~/components/ourServices/FormacionYCap.vue";
import SeguridadIndustrial from "~/components/ourServices/seguridadIndustrial.vue";
import HigieneIndustrial from "~/components/ourServices/higieneIndustrial.vue";
import MedicinaPreventiva from "~/components/ourServices/medicinaPreventiva.vue";
import prestacionServicios from "~/components/ourServices/prestacionServicios.vue";
import MedioAmbiente from "~/components/ourServices/medioAmbiente.vue";

// crear currentComponent en donde se utilizará el componente que se desea mostrar
const currentComponent = shallowRef(homeComp);

function changeComponent(component: typeof homeComp) {
  currentComponent.value = component;
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
