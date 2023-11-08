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
          :pictures="pictures1"
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
          :pictures="pictures2"
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
          :slide="false"
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
    src:""
  },
  {
    src:""
  },
  {
    src:""
  }
]
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
