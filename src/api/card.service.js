import { api } from "../api/index.js";

export class CardService {
  /** Получить список всех карточек */
  static getAllDashboardCards() {
    return api.get('/dashboard/cards')
  }
}
