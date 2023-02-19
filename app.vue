<script setup lang="ts">
useHead({
  titleTemplate: (titlePage?: string) =>
    titlePage
      ? `Desarrollador Frontend | ${titlePage}`
      : "Desarrollador Frontend",
  meta: [{ name: "description", content: "Mi portafolio Frontend" }],
  htmlAttrs: {
    lang: "es",
  },
});
</script>

<template>
  <TheHeader />
  <NuxtLayout>
    <main class="container mx-auto mt-40">
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>