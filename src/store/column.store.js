import { defineStore } from "pinia";
import { ColumnService } from "../api/column.service.js";
import { Column } from "../models/column.model.js";

export const useColumnStore = defineStore('useColumnStore', {
  state: () => ({
    allColumns: [],
  }),

  actions: {
    fetchColumns() {
      return ColumnService.getAllColumns().then(data => {
        this.allColumns = data.map(item => new Column(item))
      })
    },

    addNewColumn(column) {
      ColumnService.addNewColumn(column)
    },

    deleteColumn(columnId) {
      ColumnService.deleteColumn(columnId)
    }

  }
})