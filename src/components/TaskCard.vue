<script setup>

const props = defineProps({
  card: null
})
</script>


<template lang="pug">
.task-card--container
  app-title {{ card.title }}
  app-body-text {{ card.description }}
</template>

<style scoped>
.task-card--container {
  min-width: 300px;
  border-radius: 20px;
  border: 1px solid rgba(49, 50, 55, 0.80);
  background: rgba(222, 225, 248, 0.20);

  display: flex; 
  align-items: center;
  flex-direction: column;
  padding: 25px;
  margin-bottom: 25px;
}
</style>

