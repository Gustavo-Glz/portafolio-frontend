<script setup lang="ts">
interface Props {
  titulo: string;
  url: string;
  tecnologias: string[];
}

const props = defineProps<Props>();
</script>

<template>
  <h2>{{ props.titulo }}</h2>
  <NuxtLink :to="props.url">
  </NuxtLink>
  <div>
    <Icon v-for="tecnologia in props.tecnologias" :name="tecnologia" />
  </div>
</template>
