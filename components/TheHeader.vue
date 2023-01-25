<script setup lang="ts">
const logo = "<GustavoDev />";
const openMenu = ref<boolean>(false);
</script>

<template>
  <header
    class="h-24 fixed top-0 right-0 left-0 bottom-0 bg-gray-900 z-50 container mx-auto flex justify-between items-center"
  >
    <NuxtLink
      class="bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-blue-600 text-2xl font-bold md:text-4xl"
      to="/"
    >
      {{ logo }}
    </NuxtLink>
    <NavBar class="hidden md:flex gap-10" />
    <button class="text-white p-1 md:hidden" @click="openMenu = !openMenu" aria-label="btn-menu">
      <Icon v-if="!openMenu" name="menu" size="2rem" />
      <Icon v-else name="close" size="2rem" />
    </button>
  </header>
  <NavBar
    class="fixed top-24 h-screen bg-gray-900 w-full flex flex-col gap-10 items-center md:hidden"
    v-show="openMenu"
    @link-click="openMenu = !openMenu"
  />
</template>
