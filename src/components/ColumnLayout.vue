<script setup>
import TaskCard from "./TaskCard.vue";
import { useCardStore } from '../store/card.store'
import { onMounted } from "vue";

const store = useCardStore()

onMounted(() => {
  store.getAllCards()
})
</script>

<template lang="pug">
.column-layout--container
  .column-layout--title-container
    .circle
    app-title column name
    v-icon.column-layout--icon mdi-delete
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

.column-layout--title-container {
  display: flex;
  align-items: center;
  gap: 8px;
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

.circle {
  width: 15px; 
  height: 15px;
  border-radius: 100%;
  background-color: red;
}

.column-layout--icon {
  color: var(--app-text-color); 
  cursor: pointer;
}
</style>