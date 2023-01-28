<script setup lang="ts">
interface Training {
  name: string,
  platform: string,
}
const props = defineProps<Training>();
</script>
<template>
  <div>
    <h3 class="text-white font-bold">{{ props.name }}</h3>
    <h4 class="text-white text-sm">{{ props.platform }}</h4>
  </div>
</template>
