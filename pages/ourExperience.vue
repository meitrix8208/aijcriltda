<template>
  <main
    class="grid grid-cols-1 sm:grid-cols-4 lg:gap-4 pt-14 justify-items-center"
  >
    <div>
      <ul>
        <li>
          <NuxtImg
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
          :slide="true"
          :pictures="pictures1"
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
              <span class="dark:text-white"> Óptica green. </span>
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
              <span class="dark:text-white">p
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
          :pictures="pictures2"
          :slide="true"
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
          :slide="true"
          :pictures="pictures3"
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
          :slide="true"
          :pictures="pictures4"
          class="lg:col-span-2 col-span-1 pb-4 pt-6"
        />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const pictures1 = [
  {
    src: "https://pimsa.co/wp-content/uploads/2022/05/colombina.jpg",
  },
  {
    src: "https://pimsa.co/wp-content/uploads/2022/05/Acecor-300x300.jpeg",
  },
  {
    src: "https://pimsa.co/wp-content/themes/last-twentythirteen/images/logo_02.jpg",
  },
];

const pictures2 = [
  {
    src: "https://grupovpglobal.com/wp-content/uploads/2019/05/lamercerd.png",
  },
  {
    src: "data:image/jpeg;base64,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",
  },
  {
    src: "https://redempresarial.movilidadbogota.gov.co/sites/default/files/promigas.png",
  },
];

const pictures3 = [
  {
    src: "https://data2-uac.s3.amazonaws.com/2022/11/logo-universidad-autonoma.jpg",
  },
  {
    src: "https://logowik.com/content/uploads/images/cementos-argos7767.logowik.com.webp",
  },
  {
    src: "https://www.monomeros.com.co/wp-content/uploads/2022/08/LOGO-MCV.jpg",
  },
];
const pictures4 = [
  {
    src: "data:image/jpeg;base64,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",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEIaMpJDPbVKuaYcRBpA-nH5ElriUA_zAoY4bdS78EsEd5UUjf_EhLwRGVvqEEyKMkls&usqp=CAU",
  },
  {
    src:"data:image/png;base64,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"
  },
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
