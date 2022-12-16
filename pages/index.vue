<script setup lang="ts">
const skills = [
  { name: "vue" },
  { name: "html" },
  { name: "css" },
  { name: "javascript" },
  { name: "typescript" },
  { name: "react" },
  { name: "tailwind" },
  { name: "git" },
];

const training = [
  {
    name: "Lic. en Ing. en Sistemas Computaciones",
    platform: "Instituto de Estudios Superiores del Estado, Puebla, México",
  },
  { name: "Vue.js: De cero a experto", platform: "Udemy" },
  { name: "React: De cero a experto ( Hooks y MERN )", platform: "Udemy" },
  {
    name: "JavaScript Moderno: Guía para dominar el lenguaje",
    platform: "Udemy",
  },
  {
    name: "CSS La Guía Completa - Flexbox, CSS Grid, SASS +20 proyectos",
    platform: "Udemy",
  },
];

const getImgUrl = (name: string) =>
  new URL(`../assets/${name}.svg`, import.meta.url).href;
</script>

<template>
  <section class="mt-28 grid gap-5 md:grid-cols-2 md:items-center">
    <div class="flex flex-col gap-2">
      <h1 class="text-white text-2xl font-medium lg:text-3xl">
        Hola, soy Gustavo
      </h1>
      <h2
        class="bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-blue-600 text-3xl font-semibold lg:text-4xl"
      >
        Desarrollador Frontend
      </h2>
      <p class="text-white text-sm text-justify leading-relaxed lg:text-lg">
        Soy un profesional responsable y eficiente en busca de una oportunidad
        como desarrollador frontend que me permita obtener experiencia laboral.
        Cuento con habilidades de comunicación, trabajo en equipo y la capacidad
        de aprender de manera rápida.
      </p>
      <div class="my-5 flex gap-5">
        <a
          class="text-white text-sm font-semibold border-solid border-2 border-transparent py-1.5 px-2 rounded-lg transition-all ease-in-out duration-500 shadow-lg hover:shadow-blue-600 border-gradient"
          href=""
          >Descargar CV</a
        >
        <a
          class="text-white text-sm font-semibold border-solid border-2 border-transparent py-1.5 px-2 rounded-lg transition-all ease-in-out duration-500 shadow-lg hover:shadow-blue-600 border-gradient"
          href=""
          >Contacto</a
        >
      </div>
    </div>
    <img
      class="justify-self-center md:justify-self-end lg:w-4/5"
      src="@/assets/hero.svg"
      alt=""
    />
  </section>
  <section class="mt-20">
    <h2
      class="bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-blue-600 text-2xl font-semibold lg:text-3xl"
    >
      Habilidades
    </h2>
    <div
      class="mt-10 grid grid-cols-4 gap-10 justify-items-center lg:grid-cols-8"
    >
      <img
        class="w-20 cursor-pointer transition-all ease-out duration-500 hover:scale-125"
        v-for="{ name } in skills"
        :src="getImgUrl(name)"
        :alt="name"
      />
    </div>
  </section>
  <section class="my-20">
    <h2
      class="bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-blue-600 text-2xl font-semibold lg:text-3xl"
    >
      Formación
    </h2>
    <ul class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      <li class="p-5 cursor-pointer border-solid border-2 border-transparent border-gradient rounded-lg transition-all ease-out duration-500 hover:scale-105" v-for="{ name, platform } in training">
        <h3 class="text-white font-semibold">{{ name }}</h3>
        <h4 class="text-white text-sm ">{{ platform }}</h4>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.border-gradient {
  background: linear-gradient(90deg, #111827, #111827),
              linear-gradient(to bottom right, #42d392, #2563eb);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}
</style>
