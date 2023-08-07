<template>
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-14 justify-items-center">
    <div>
      <ul>
        <li>
          <button
            @click="changeComponent(NosotrosComp)"
            class="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded"
            :class="{'bg-green-900': currentComponent === NosotrosComp}"
            >
            Nosotros
          </button>
        </li>
        <li class="pt-4">
          <button
            @click="changeComponent(MisionVision)"
            class="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded"
            :class="{'bg-green-900': currentComponent === MisionVision}"
            >
            misión y vision
          </button>
        </li>
      </ul>
    </div>
    <div class="col-span-3 w-full">
      <transition name="slide-fade"
      mode="out-in"
      >
        <component :is="currentComponent" />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import NosotrosComp from "@/components/NosotrosComp.vue";
import MisionVision from "@/components/MisionVision.vue";

// crear currentComponent en donde se utilizará el componente que se desea mostrar
const currentComponent = shallowRef(NosotrosComp);

function changeComponent(component: typeof NosotrosComp) {
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