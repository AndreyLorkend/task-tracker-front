<script setup>
import ColumnLayout from "./ColumnLayout.vue";
</script>

<template lang="pug">
.dashboard-layout-header 
  .dashboard-layout-header--text タスクリスト
  app-button Добавить новую колонку
.dashboard-layout-column
  column-layout
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
  margin: 0 25px;
}
</style>