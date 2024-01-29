<script setup>
import ColumnLayout from "./ColumnLayout.vue";
import AddColumnDialog from './AddColumnDialog.vue'
import { useColumnStore } from '../store/column.store'
import { useCardStore } from '../store/card.store'
import { onMounted, ref } from "vue";

const columnStore = useColumnStore()
const cardStore = useCardStore()

const isDialog = ref(false)

onMounted(() => {
  columnStore.fetchColumns()
  cardStore.getAllCards()
})

function openAddColumnDialog() {
  isDialog.value = !isDialog.value
}
</script>

<template lang="pug">
.dashboard-layout-header 
  .dashboard-layout-header--text タスクリスト
  app-button(@click="openAddColumnDialog") Добавить новую колонку
.dashboard-layout-column
  column-layout( v-for="column in columnStore.allColumns" :column="column" )
add-column-dialog( :visible="isDialog" @close="isDialog = false" )
</template>

<style scoped>
.dashboard-layout-header {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 25px;
}
.dashboard-layout-header--text {
  color: var(--app-text-color);
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.dashboard-layout-column {
  display: flex;
  gap: 25px;
  margin: 0px 25px;
  overflow-x: auto;
}

.dashboard-layout-column::-webkit-scrollbar-track
{
	background-color: #F5F5F5;
  height: 4px;
  width: 4px;

}

.dashboard-layout-column::-webkit-scrollbar
{
	background-color: #F5F5F5;
  height: 4px;
  width: 4px;
}

.dashboard-layout-column::-webkit-scrollbar-thumb
{
	background-color: var(--app-text-color);
}
</style>