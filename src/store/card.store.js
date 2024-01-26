import { defineStore } from "pinia";
import { CardService } from "../api/card.service.js";
import { Card } from "../models/card.model.js";

export const useCardStore = defineStore('useCardStore', {
  state: () => ({
    allCards: [],
  }),

  actions: {
    getAllCards() {
      return CardService.getAllDashboardCards().then(data => {
        this.allCards = data.map(item => new Card(item))
        console.log('карточки', this.allCards)
      })
    }
  }
})

