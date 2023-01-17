<script setup lang="ts">
useHead({
  title: "Contacto",
});
</script>

<template>
  <section>
    <h2
      class="bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-blue-600 text-2xl font-semibold md:text-3xl"
    >
      Contacto
    </h2>
    <div class="my-10 flex flex-col gap-10 md:flex-row md:items-center">
      <div class="text-white flex flex-col gap-5">
        <h3 class="font-semibold text-justify">
          Actualmente me encuentro en busca de nuevas oportunidades laborales.
          Mi bandeja de entrada siempre está abierta, ya sea que tenga una
          pregunta o solo quiera saludar.
        </h3>
        <div>
          <p class="mb-2">
            Ubicacion:
            <span
              class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-blue-600"
            >
              México
            </span>
          </p>
          <p>
            Telefono:
            <span
              class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-blue-600"
            >
              +52 238 103 88 25
            </span>
          </p>
        </div>
        <Redes />
      </div>
      <img class="md:w-1/2 lg:w-2/5" src="@/assets/contacto.svg" alt="" />
    </div>
  </section>
</template>

<style scoped></style>
