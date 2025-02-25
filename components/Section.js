//CALLBACK

class Section {
  constructor(items, generateCard, sectionSelector) {
    console.log(sectionSelector);
    this.items = items;
    this._generateCard = generateCard;
    this._cardContainer = document.querySelector(sectionSelector);
    //const cardContainer = document.querySelector(".card-container")
  }

  /*
  this._generateCard
  (place) => {
    const card = new Card(place, "#card-template");
    return card.generateCard();
  }*/

  renderItems() {
    this.items.forEach((place) => {
      this._cardContainer.appendChild(this._generateCard(place));
    });
  }
}

export default Section;
