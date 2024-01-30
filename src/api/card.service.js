import { api } from "../api/index.js";

export class CardService {

  static getAllDashboardCards() {
    return api.get('/dashboard/cards')
  }

  static addCard(card) {
    return api.post('/dashboard/cards', card)
  }

  static deleteCard(cardId) {
    return api.delete(`/dashboard/cards/${cardId}`)
  }
}
