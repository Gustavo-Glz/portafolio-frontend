<script setup lang="ts">
const logo = "<GustavoDev />";
const openMenu = ref<boolean>(false);
</script>

<template>
  <header class="h-24 fixed top-0 right-0 left-0 bottom-0 bg-gray-900 z-50 container mx-auto flex justify-between items-center">
    <NuxtLink 
      class="bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-blue-600 text-2xl font-bold md:text-4xl"
      to="/"
    >
      {{ logo }}
    </NuxtLink>
    <NavBar class="hidden md:flex gap-10"/>
    <button 
      class="text-white text-xl md:hidden" 
      @click="openMenu = !openMenu"
    >
      <Icon name="oi:menu" />
    </button>
  </header>
  <NavBar class="fixed top-24 bg-gray-900 w-full flex flex-col items-center transition-all ease-in-out duration-700 md:hidden" v-show="openMenu"/>
</template>


