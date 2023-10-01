<template>
  <main
    class="grid grid-cols-1 sm:grid-cols-4 lg:gap-4 pt-14 justify-items-center"
  >
    <div>
      <ul>
        <li>
          <img
            class="rounded-lg"
            src="/check.png"
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
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:gap-5 gap-0">
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
        :pictures="pictures"
        :indicators="true"
          class="lg:col-span-2 sm:col-span-2 shadow-lg col-span-1 pb-4 pt-6"
        />
      </section>
      <p class="pb-6">
        También hemos realizado actividades por petición de las ARL a nivel
        nacional.
      </p>
      <h1 class="text-3xl font-bold pb-4">Colmena Seguros</h1>
      <hr class="border-green" />
      <p class="pb-4">
        La cual solicito la realización de actividades en las siguientes
        empresas:
      </p>
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:gap-5 gap-0">
        <section>
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white">
                Fundación Huellas Con Futuro
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">Defensoría Del Pueblo. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                Colarquin Proveemos Soluciones.
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Óptica Lafam. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> IPS Clínica La Merced </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Tebsa. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Colserautos </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> UCPL </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Aplus Norcontrol. </span>
            </li>
          </ul>
        </section>
        <section>
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white"> Sew Eurodrive</span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Genserpower. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Ingecost</span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Carolina Corporación.</span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                Medicina Prepagada Colmedica.
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Nimocom Ltda. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Interlink </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Fundación Carulla. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Inspectorate </span>
            </li>
          </ul>
        </section>
        <!-- slider -->
        <Carousel
          :slide="false"
          class="lg:col-span-2 col-span-1 pb-4 pt-6"
        />
      </section>
      <h1 class="text-3xl font-bold pb-4">ARL SURA</h1>
      <hr class="border-green" />
      <p class="pb-4">
        La cual solicito la realización de actividades en las siguientes
        empresas:
      </p>
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:gap-5 gap-0">
        <section>
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white"> Promigas S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Construcciones Mafyl S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Promitel S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                Centragas Transmisión de gas de la región Central
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Gazel S.A.</span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Mampower de Colombia Ltda. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                Cementos Argos (Planta Caribe, Puerto y Planta Apolo).
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Chaneme Comercial S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Termoflores S.A </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Siemens Sociedad Anónima. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Monomeros S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                Saint Gobain De Colombia S A
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Vigon Colombia. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                Empaques Industriales Colombianos S A
              </span>
            </li>
          </ul>
        </section>
        <section>
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white">
                Universidad Autónoma del Caribe.
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Lasa S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Rama Judicial Contraloría. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                Fresenius medical care Colombia s.a.
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Sodexho Colombia S.A.</span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Universidad el Norte </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Pastas comarrico s.a. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                Hoteles Decameron Colombia S A
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                Asociación Colegio Cristiano J Vender Murphy.
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                Departamento Técnico Administrativo Del Medio Ambiente
                Barranquilla.
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                Precooperativa De Trabajo Asociado Metalmec Pcta
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">
                Compañía Nacional De Vigilancia Y Seguridad Privada Delthac 1
                Ltda
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Aviatur S.A </span>
            </li>
          </ul>
        </section>
        <!-- slider -->
        <Carousel
          :slide="false"
          class="lg:col-span-2 col-span-1 pb-4 pt-6"
        />
      </section>
      <h1 class="text-3xl font-bold pb-4">AXA Colpatria</h1>
      <hr class="border-green" />
      <p class="pb-4">
        La cual solicito la realización de actividades en las siguientes
        empresas:
      </p>
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:gap-5 gap-0">
        <section>
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white"> Ryfield. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Templado S.A. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Ticom. </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Grescaribe </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Castrotcherassi. </span>
            </li>
          </ul>
        </section>
        <section>
          <ul class="list-disc">
            <li class="pb-1">
              <span class="dark:text-white"> Construseñales </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Cannon Sa </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"
                >Servicios Eventuales De La Costa
              </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white">Diseleccsa </span>
            </li>
            <li class="pb-1">
              <span class="dark:text-white"> Curtiembres Búfalo </span>
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

<script setup lang="ts">
const pictures = [
  {
    src: "https://risaraldahoy.com/wp-content/uploads/2019/02/Colombina-1024x800.jpg",
  },
  {
    src: "https://pimsa.co/wp-content/uploads/2022/05/Acecor-300x300.jpeg"
  }
];
</script>
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
