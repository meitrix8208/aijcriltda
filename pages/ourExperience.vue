<template>
  <main
    class="grid grid-cols-1 sm:grid-cols-4 lg:gap-4 pt-14 justify-items-center"
  >
    <div>
      <ul>
        <li>
          <NuxtImg
            class="rounded-lg"
            src="check.png"
            alt="check img"
          />
        </li>
      </ul>
    </div>
    <div class="col-span-3 w-full">
      <h1 class="text-2xl font-bold pb-4">
        Nuestra empresa es sinónimo de calidad y experiencia
      </h1>
      <hr class="border-green" />
      <p class="pb-8">
        La satisfacción de Nuestros clientes, refleja en gran medida nuestra
        calidad y experiencia en el área de la seguridad y salud en el trabajo,
        ya que, al confiarnos su empresa, desarrollamos nuestras actividades de
        manera eficaz, para lograr alcanzar las metas propuestas por su
        organización.
      </p>
      <!-- grid de dos columnas para dos ul -->
      <p class="pb-2 font-bold text-lg">
        Dentro de las principales empresas que nos han confiado sus trabajos se
        encuentran:
      </p>
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:gap-2 gap-0">
        <section>
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white">
                Paramo Industria De Refrigeración S.A.
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Procesos Metálicos </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> C.I. Green Line S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> EG Construcciones </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Transportes Max Paez S.A </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Aceros Cortados </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Transportes Quiroga </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Gecolsa S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                A.R.L Protección Laboral Seguro Social De Cartagena
              </span>
            </li>
          </ul>
        </section>
        <section>
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white"> Agrodelnorte SAS </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                MATTO De Transportadores SAS
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> IST Training </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Pimsa </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Colombina </span>
            </li>
          </ul>
        </section>
        <!-- slider -->
        <Carousel
          :slide="false"
          class="lg:col-span-2 col-span-1 pb-4 pt-6"
        />
      </section>
      <p class="pb-6">
        También hemos realizado actividades por petición de las ARL a nivel
        nacional.
      </p>
      <h1 class="text-3xl font-bold pb-4">
        Colmena Seguros
      </h1>
      <hr class="border-green" />
      <p class="pb-4">
        La cual solicito la realización de actividades en las siguientes empresas:
      </p>
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:gap-2 gap-0">
        <section>
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white">
                Paramo Industria De Refrigeración S.A.
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Procesos Metálicos </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> C.I. Green Line S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> EG Construcciones </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Transportes Max Paez S.A </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Aceros Cortados </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Transportes Quiroga </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Gecolsa S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                A.R.L Protección Laboral Seguro Social De Cartagena
              </span>
            </li>
          </ul>
        </section>
        <section>
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white"> Agrodelnorte SAS </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                MATTO De Transportadores SAS
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> IST Training </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Pimsa </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Colombina </span>
            </li>
          </ul>
        </section>
        <!-- slider -->
        <Carousel
          :slide="false"
          class="lg:col-span-2 col-span-1 pb-4 pt-6"
        />
      </section>
      <h1 class="text-3xl font-bold pb-4">
        ARL SURA
      </h1>
      <hr class="border-green" />
      <p class="pb-4">
        La cual solicito la realización de actividades en las siguientes empresas:
      </p>
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:gap-2 gap-0">
        <section>
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white">
                Paramo Industria De Refrigeración S.A.
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Procesos Metálicos </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> C.I. Green Line S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> EG Construcciones </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Transportes Max Paez S.A </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Aceros Cortados </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Transportes Quiroga </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Gecolsa S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                A.R.L Protección Laboral Seguro Social De Cartagena
              </span>
            </li>
          </ul>
        </section>
        <section >
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white"> Agrodelnorte SAS </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                MATTO De Transportadores SAS
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> IST Training </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Pimsa </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Colombina </span>
            </li>
          </ul>
        </section>
        <!-- slider -->
        <Carousel
          :slide="false"
          class="lg:col-span-2 col-span-1 pb-4 pt-6"
        />
      </section>
      <h1 class="text-3xl font-bold pb-4">
        AXA Colpatria
      </h1>
      <hr class="border-green" />
      <p class="pb-4">
        La cual solicito la realización de actividades en las siguientes empresas:
      </p>
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:gap-2 gap-0">
        <section >
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white">
                Paramo Industria De Refrigeración S.A.
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Procesos Metálicos </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> C.I. Green Line S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> EG Construcciones </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Transportes Max Paez S.A </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Aceros Cortados </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Transportes Quiroga </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Gecolsa S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                A.R.L Protección Laboral Seguro Social De Cartagena
              </span>
            </li>
          </ul>
        </section>
        <section>
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white"> Agrodelnorte SAS </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                MATTO De Transportadores SAS
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> IST Training </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Pimsa </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Colombina </span>
            </li>
          </ul>
        </section>
        <!-- slider -->
        <Carousel
          :slide="false"
          class="lg:col-span-2 col-span-1 pb-4 pt-6"
        />
      </section>
    </div>
  </main>
</template>

<style scoped>
li {
  color: #28c45c;
  /* Bullet Color */
}

li span {
  color: black;
  /* Text Color */
}
</style>
