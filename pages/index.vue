<script setup lang="ts">
const skills: string[] = [
  "html",
  "css",
  "js",
  "ts",
  "vue",
  "nuxt-3",
  "react",
  "tailwind",
  "vuetify",
  "git",
];

const training = [
  {
    name: "Lic. en Ing. en Sistemas Computacionales",
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
</script>

<template>
  <section class="grid gap-5 md:grid-cols-2 md:items-center">
    <div class="flex flex-col gap-5">
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
        <NuxtLink
          class="text-white text-sm font-semibold border-solid border-2 border-transparent py-1.5 px-2 rounded-lg transition-all ease-in-out duration-500 shadow-lg hover:shadow-blue-600 border-gradient"
          to="https://drive.google.com/file/d/1VhSVGCYaqszL774L7f_KsvRJ72PkU7O6/view?usp=share_link"
          target="_blank"
        >
          Descargar CV
        </NuxtLink>
        <Redes />
      </div>
    </div>
    <nuxt-img
      class="justify-self-center md:justify-self-end lg:w-4/5"
      src="/hero.svg"
      alt="hero imagen"
    />
  </section>
  <section class="mt-20">
    <h2
      class="bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-blue-600 text-2xl font-semibold lg:text-3xl"
    >
      Habilidades
    </h2>
    <div
      class="mt-10 grid grid-cols-4 gap-10 justify-items-center lg:grid-cols-6"
    >
      <Icon
        class="cursor-pointer transition-all ease-in-out duration-500 hover:scale-125"
        v-for="skill in skills"
        :name="skill"
        size="4rem"
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
      <li
        class="p-5 cursor-pointer border-solid border-2 border-transparent border-gradient rounded-lg transition-all ease-out duration-700 hover:scale-105"
        v-for="{ name, platform } in training"
      >
        <h3 class="text-white font-semibold">{{ name }}</h3>
        <h4 class="text-white text-sm">{{ platform }}</h4>
      </li>
    </ul>
  </section>
</template>

<style>
.border-gradient {
  background: linear-gradient(90deg, #111827, #111827),
    linear-gradient(to bottom right, #42d392, #2563eb);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}
</style>
