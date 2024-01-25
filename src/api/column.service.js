import { api } from "../api/index.js";

export class ColumnService {
  static getAllColumns() {
    return api.get('/dashboard/columns')
  }
}