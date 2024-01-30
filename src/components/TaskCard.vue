<script setup>
import { ref } from "vue";
import DeleteDialog from './DeleteDialog.vue'
import { useCardStore } from '../store/card.store'

const cardStore = useCardStore()

const props = defineProps({
  card: null
})

const isDeleting = ref(false)

function deleteCard(id) {
  cardStore.deleteCard(id)
  isDeleting.value = false
}
</script>

<template lang="pug">
.task-card--container
  .d-flex.align-center.justify-space-between.task-card-title--width
    app-title.mr-2 {{ card.title }}
    v-icon.task-card--icon(@click="isDeleting = !isDeleting" size="small") mdi-delete
  app-body-text.mt-4 {{ card.description }}
delete-dialog( :visible="isDeleting" :itemName="'карточку'" @close="isDeleting = false" @delete="deleteCard(card.id)")
</template>

<style scoped>
.task-card--container {
  min-width: 300px;
  border-radius: 20px;
  border: 1px solid rgba(49, 50, 55, 0.80);
  background: rgba(222, 225, 248, 0.20);

  display: flex; 
  align-items: flex-start;
  flex-direction: column;
  padding: 25px;
  margin-bottom: 25px;
}

.task-card--icon {
  color: var(--app-text-color); 
  cursor: pointer;
}

.task-card-title--width {
  width: 100%;
}
</style>

