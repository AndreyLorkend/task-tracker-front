<script setup>
import ColumnLayout from "./ColumnLayout.vue";
import { useColumnStore } from '../store/column.store'
import { onMounted } from "vue";

const store = useColumnStore()

onMounted(() => {
  store.fetchColumns()
})
</script>

<template lang="pug">
.dashboard-layout-header 
  .dashboard-layout-header--text タスクリスト
  app-button Добавить новую колонку
.dashboard-layout-column
  column-layout( v-for="column in store.allColumns" :column="column" )
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