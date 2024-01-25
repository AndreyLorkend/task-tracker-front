<script setup>
import TaskCard from "./TaskCard.vue";
</script>

<template lang="pug">
.column-layout--container
  app-title column name
  .column-layout--task-list
    task-card
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
  min-height: 750px;
  max-height: 750px;

  border-radius: 30px;
  background: #FFF;
  padding: 30px;

  justify-content: space-between;

  text-align: center;

  gap: 30px;
}

.column-layout--button {
  background-color: #EAFFD8;
}

.column-layout--task-list {
  overflow-y:scroll;
  flex: 1;
}
.column-layout--task-list::-webkit-scrollbar-track
{
	background-color: transparent;
  height: 4px;
  width: 4px;

}

.column-layout--task-list::-webkit-scrollbar
{
	background-color: transparent;
  height: 4px;
  width: 4px;
}

.column-layout--task-list::-webkit-scrollbar-thumb
{
	background-color: transparent;
}
</style>