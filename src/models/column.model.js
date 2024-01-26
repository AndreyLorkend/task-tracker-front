export class Column {
  constructor(json) {
    this.id = json._id 
    this.title = json.title
    this.color = json.color
  }
}