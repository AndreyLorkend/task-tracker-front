<template lang="pug">
//- Отрисовка карточек
.column-layout--container
  div
    app-title column name
  div
    app-button.column-layout--button Добавить новую задачу
</template>

<style scoped>
.column-layout--container {

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  height: 750px;

  border-radius: 30px;
  background: #FFF;
  padding: 30px;

  justify-content: space-between;
}

.column-layout--button {
  background-color: var(--app-color-background);
}
</style>