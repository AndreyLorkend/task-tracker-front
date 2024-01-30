<script setup>
import { computed } from "vue";

const props = defineProps({
  visible: Boolean,
  itemName: String
})

const emit = defineEmits(['close', 'delete'])

const show = computed({
  get () {
    return props.visible
  },
  set (value) {
    if(!value) emit('close')
  }
})

</script>

<template lang="pug">
v-dialog( v-model="show" width="500" )
  v-card 
    .add-dialog--container
      app-title Вы действительно хотите удалить {{ itemName }}?
      .d-flex.justify-center
        app-button.mr-3.add-button--color(@click="emit('delete')") Удалить
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