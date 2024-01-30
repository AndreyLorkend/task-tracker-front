<script setup>
import { computed, reactive } from "vue";
import { useCardStore } from '../store/card.store'

const cardStore = useCardStore()

const props = defineProps({
  visible: Boolean,
  columnId: String
})

const rules = reactive({
  nameRequired: value => !!value || '',
})

const dialog = reactive({
  title: null, 
  description: null
})

const emit = defineEmits(['close'])

const show = computed({
  get () {
    return props.visible
  },
  set (value) {
    if(!value) emit('close')
  }
})

function addNewCard(card) {
  let item = {
    title: card.title, 
    description: card.description, 
    columnId: props.columnId
  }

  if (item.title) {
    cardStore.addCard(item)
    emit('close')
  }

  dialog.title = null 
  dialog.description = null
}

</script>


<template lang="pug">
v-dialog( v-model="show" width="500" )
  v-card 
    .add-dialog--container
      app-title Добавить новую задачу
      v-text-field( v-model="dialog.title" label="Введите название карточки" hide-details :rules="[rules.nameRequired]" )
      v-text-field( v-model="dialog.description" label="Введите описание карточки" hide-details )
      .d-flex.justify-center
        app-button.mr-3.add-button--color(@click="addNewCard(dialog)") Добавить 
        app-button.cancel-button--color(@click="emit('close')") Отменить
</template>

<style scoped>
.add-dialog--container {
  padding: 30px; 
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.add-button--color {
  background-color: #EAFFD8;
}

.cancel-button--color {
  background-color: #FFADA1;
}
</style>