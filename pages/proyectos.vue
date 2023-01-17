<script setup lang="ts">
useHead({
  title: "Proyectos",
});
</script>

<template>
  <section class="mt-28">
    <h2
      class="bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-blue-600 text-2xl font-semibold md:text-3xl"
    >
      Proyectos
    </h2>
    <div class="grid">
      <div class="mt-5 flex flex-col gap-2">
        <h2 class="text-white uppercase font-bold">
          Cotizador de Criptomonedas
        </h2>
        <img src="@/assets/cotizador.png" alt="" />
        <div class="flex gap-5">
          <NuxtLink
            class="text-white text-sm font-semibold border-solid border-2 border-transparent py-1.5 px-2 rounded-lg transition-all ease-in-out duration-500 shadow-lg hover:shadow-blue-600 border-gradient"
            to="https://github.com/Gustavo-Glz/cripto-cotizador.git"
            target="_blank"
          >
            Github
          </NuxtLink>
          <NuxtLink
            class="text-white text-sm font-semibold border-solid border-2 border-transparent py-1.5 px-2 rounded-lg transition-all ease-in-out duration-500 shadow-lg hover:shadow-blue-600 border-gradient"
            to="https://cripto-cotizador-gustavo.netlify.app/"
            target="_blank"
          >
            Demo
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
