export class Card {
  constructor(json) {
    this.id = json._id 
    this.title = json.title 
    this.description = json.description 
    this.columnId = json.columnId
  }
}