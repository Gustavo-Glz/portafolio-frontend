<script setup lang="ts">
useHead({
  titleTemplate: (titlePage?: string) => titlePage ? `Frontend - ${titlePage}` : 'Frontend',
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
