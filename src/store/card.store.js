import { defineStore } from "pinia";
import { CardService } from "../api/card.service.js";

export const useCardStore = defineStore('useCardStore', {
  state: () => ({
    allCards: [],
  }),

  actions: {
    getAllCards() {
      return CardService.getAllDashboardCards().then(data => {
        console.log('cards', data)
      })
    }
  }
})

