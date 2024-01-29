import { api } from "../api/index.js";

export class ColumnService {
  static getAllColumns() {
    return api.get('/dashboard/columns')
  }

  static addNewColumn(column) {
    return api.post('/dashboard/columns', column)
  }

  static deleteColumn(columnId) {
    return api.delete(`/dashboard/columns/${columnId}`)
  }
}