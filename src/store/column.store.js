import { defineStore } from "pinia";
import { ColumnService } from "../api/column.service.js";

export const useColumnStore = defineStore('useColumnStore', {
  state: () => ({

  }),

  actions: {
    fetchColumns() {
      return ColumnService.getAllColumns().then(data => {
        console.log('columns', data)
      })
    }

  }
})