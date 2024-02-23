<template>
  <main>
    <section
      class="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4 pt-14 pb-30 items-center container mx-auto"
    >
      <NuxtPicture
        height="300"
        width="450"
        format="webp"
        src="/img1.webp"
        :img-attrs="{ class: 'rounded-2xl shadow-2xl dark:shadow-none' }"
        alt="sistema de gestión de seguridad y salud en el trabajo"
      />
      <p class="md:text-xl font-400 text-pretty">
        Somos una firma dedicada a la prestación de servicios de asesorías y
        consultorías en materia de Seguridad y salud en el trabajo, brindando
        soluciones efectivas, con el fin de contribuir al logro de los objetivos
        estratégicos y la mejora de las condiciones de salud y seguridad al
        interior de la empresa
      </p>
    </section>
    <section
      class="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4 pt-14 pb-30 items-center container mx-auto"
    >
      <div class="pr-3 font-400">
        <h3 class="md:text-2xl">
          Ayudamos a su empresa en la implementación e integración de los
          sistemas de gestión:
        </h3>
        <ul class="pt-4 pr-3">
          <li>- Gestión de Calidad SGC “NTC ISO 9001”,</li>
          <li>- Gestión Ambiental SGA “NTC ISO 14001”,</li>
          <li>- Gestión en Seguridad y Salud Ocupacional “OSHAS 18001”</li>
          <li>- Seguridad BASC</li>
        </ul>
      </div>
      <NuxtPicture
        width="450"
        height="300"
        format="webp"
        src="/img2.jpg"
        :img-attrs="{ class: 'rounded-2xl shadow-2xl dark:shadow-none' }"
        alt="sistema de gestión de seguridad y salud en el trabajo"
      />
    </section>
    <section
      class="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4 pt-14 pb-30 items-center container mx-auto"
    >
      <NuxtPicture
        width="450"
        height="300"
        format="webp"
        src="/img3.jpg"
        :img-attrs="{ class: 'rounded-2xl shadow-2xl dark:shadow-none' }"
        alt="sistema de gestión de seguridad y salud en el trabajo"
      />
      <p class="md:text-2xl pl-3 font-400 text-pretty">
        Contamos con un grupo de profesionales de diversas disciplinas que
        garantizan el cumplimiento del principio de integralidad e
        interdisciplinariedad formulados para el óptimo desarrollo de las
        actividades.
      </p>
    </section>
  </main>
</template>
