<script setup lang="ts">
const urls = [
  { nombre: "Inicio", path: "/" },
  { nombre: "Proyectos", path: "/proyectos" },
  { nombre: "Contacto", path: "/contacto" },
];

</script>

<template>
  <nav>
    <NuxtLink
      class="text-white text-sm uppercase font-bold py-10 md:py-0"
      v-for="{ nombre, path } in urls"
      :to="path"
      @click="$emit('link-click')"
    >
      {{ nombre }}
    </NuxtLink>
  </nav>
</template>

<style lang="pcss" scoped>
.router-link-active {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-blue-600;
}
</style>
