<script setup lang="ts">
useHead({
  titleTemplate: (titlePage?: string) => titlePage ? `${titlePage} | Desarrollador Frontend` : 'Desarrollador Frontend'
})
</script>

<template>
  <TheHeader />
  <main class="container mx-auto">
    <NuxtPage />
  </main>
</template>
