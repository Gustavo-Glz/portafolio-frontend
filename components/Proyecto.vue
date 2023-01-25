<script setup lang="ts">
interface Props {
  titulo: string;
  url: string;
  code: string;
  src: string;
  tecnologias: string[];
}
const props = defineProps<Props>();

const getImgUrl = (src: string) =>
  new URL(`/assets/${src}.png`, import.meta.url).href;
</script>

<template>
  <div class="bg-gray-800 flex flex-col gap-4 rounded-md cursor-pointer transition-all ease-in-out duration-500 lg:hover:scale-105">
    <div class="mt-5 flex gap-2 justify-center items-center">
      <Icon
        class="cursor-pointer transition-all ease-in-out duration-500 hover:scale-125"
        v-for="tecnologia in props.tecnologias"
        :name="tecnologia"
        size="2rem"
      />
    </div>
    <nuxt-img :src="getImgUrl(props.src)" :alt="props.titulo" loading="lazy" />
    <h3 class="text-white text-sm text-center font-bold uppercase">
      {{ props.titulo }}
    </h3>
    <div class="mb-5 flex gap-5 justify-center items-center">
      <NuxtLink
        class="text-white text-sm font-semibold border-solid border-2 border-transparent py-1.5 px-2 rounded-lg transition-all ease-in-out duration-500 shadow-lg hover:shadow-blue-600 border-gradient"
        :to="props.code"
        target="_blank"
      >
        Github
      </NuxtLink>
      <NuxtLink
        class="text-white text-sm font-semibold border-solid border-2 border-transparent py-1.5 px-2 rounded-lg transition-all ease-in-out duration-500 shadow-lg hover:shadow-blue-600 border-gradient"
        :to="props.url"
        target="_blank"
      >
        Demo
      </NuxtLink>
    </div>
  </div>
</template>
