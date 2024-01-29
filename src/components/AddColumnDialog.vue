<script setup>
import { computed, reactive } from "vue";
import { useColumnStore } from '../store/column.store'

const store = useColumnStore()

const props = defineProps({
  visible: Boolean
})

const rules = reactive({
  nameRequired: value => !!value || '',
  colorRequired: value => !!value || ''
})

const dialog = reactive({
  title: null, 
  color: null
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

function addNewColumn(dialog) {
  if (dialog.title && dialog.color) {
    store.addNewColumn(dialog)
    emit('close')
  }
  dialog.title = null
  dialog.color = null
}
</script>


<template lang="pug">
v-dialog( v-model="show" width="500" )
  v-card 
    .add-dialog--container
      app-title Добавить новую колонку
      v-text-field( v-model="dialog.title" label="Введите название колонки" hide-details :rules="[rules.nameRequired]" )
      v-text-field( v-model="dialog.color" label="Введите цвет колонки" hide-details :rules="[rules.colorRequired]" )
      .d-flex.justify-center
        app-button.mr-3.add-button--color(@click="addNewColumn(dialog)") Добавить 
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