<script setup>
import TaskCard from "./TaskCard.vue";
</script>

<template lang="pug">
.column-layout--container
  div
    app-title.pb-6 column name
    task-card
  div
    app-button.column-layout--button Добавить новую задачу
</template>

<style scoped>
.column-layout--container {
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 400px;
  min-width: 400px;
  width: 400px;
  height: 750px;

  border-radius: 30px;
  background: #FFF;
  padding: 30px;

  justify-content: space-between;

  text-align: center;
}

.column-layout--button {
  background-color: #EAFFD8;
}
</style>