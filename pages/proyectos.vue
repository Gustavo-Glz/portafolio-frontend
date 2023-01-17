<script setup lang="ts">
useHead({
  title: "Proyectos",
});
</script>

<template>
  <section class="mt-24">
    <h2
      class="bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-blue-600 text-2xl font-semibold md:text-3xl"
    >
      Proyectos
    </h2>
    <div class="my-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      <Proyecto
        titulo="cotizador de criptomonedas"
        url="https://cripto-cotizador-gustavo.netlify.app/"
        code="https://github.com/Gustavo-Glz/cripto-cotizador.git"
        src="cotizador"
        :tecnologias="['react', 'tailwind']"
      />
      <Proyecto
        titulo="portafolio"
        url="https://portafolio-gustavo-gonzalez.vercel.app/"
        code="https://github.com/Gustavo-Glz/portafolio-frontend.git"
        src="portafolio"
        :tecnologias="['nuxt-3', 'tailwind']"
      />
    </div>
  </section>
</template>
