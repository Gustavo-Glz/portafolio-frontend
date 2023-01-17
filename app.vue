<script setup lang="ts">
useHead({
  titleTemplate: (titlePage?: string) => titlePage ? `Desarrollador Frontend | ${titlePage}` : 'Desarrollador Frontend',
  meta: [
    { name: 'description', content: 'Mi portafolio Frontend'}
  ],
  htmlAttrs: {
    lang: 'es'
  }
})
</script>

<template>
  <TheHeader />
  <main class="container mx-auto mt-40">
    <NuxtPage />
  </main>
</template>
