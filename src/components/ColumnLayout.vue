<script setup>
import TaskCard from "./TaskCard.vue";
import DeleteColumnDialog from './DeleteColumnDialog.vue'
import { useCardStore } from '../store/card.store'
import { useColumnStore } from '../store/column.store'
import { computed, onMounted, ref } from "vue";

const cardStore = useCardStore()
const columnStore = useColumnStore()

const props = defineProps({
  column: null
})

const isDeleting = ref(false)

const cardList = computed(() => {
  return cardStore.getColumnCards(props.column.id)
})

function deleteColumn(id) {
  columnStore.deleteColumn(id)
  isDeleting.value = false
}
</script>

<template lang="pug">
.column-layout--container
  .column-layout--title-container
    .circle
    app-title {{ column.title }}
    v-icon.column-layout--icon(@click="isDeleting = !isDeleting") mdi-delete
  .column-layout--task-list
    task-card( v-for="card in cardList" :card="card" )
  app-button.column-layout--button Добавить новую задачу
delete-column-dialog( :visible="isDeleting" @close="isDeleting = false" @delete="deleteColumn(column.id)" )
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