import { defineStore } from "pinia";
import { CardService } from "../api/card.service.js";
import { Card } from "../models/card.model.js";

export const useCardStore = defineStore('useCardStore', {
  state: () => ({
    allCards: [],
  }),

  getters: {
    getColumnCards: (state) => (columnId) => state.allCards.filter( card => card.columnId == columnId),
  },

  actions: {
    getAllCards() {
      CardService.getAllDashboardCards().then(data => {
        this.allCards = data.map(item => new Card(item))
      })
    },

    addCard(card) {
      CardService.addCard(card).then(data => {
        this.allCards.push(new Card(data))
      })
    },

    deleteCard(cardId) {
      CardService.deleteCard(cardId).then(() => {
        this.allCards = this.allCards.filter(item => item.id != cardId)
        return this.allCards
      })
    }
  }
})

