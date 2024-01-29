<script setup>
import { computed } from "vue";

const props = defineProps({
  visible: Boolean
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
</script>


<template lang="pug">
v-dialog( v-model="show" width="500" )
  v-card 
    app-title Добавить новую колонку
</template>