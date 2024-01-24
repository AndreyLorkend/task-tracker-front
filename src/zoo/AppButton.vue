<script setup>

</script>

<template lang="pug">
v-btn.app-button--style( variant="flat" rounded="xl" )
  slot 
</template>

<style scoped>
.app-button--style {
  background-color: white;
  color: var(--app-text-color);
  text-transform: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>