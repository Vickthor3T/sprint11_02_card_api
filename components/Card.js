class Card {
  constructor(data, templateSelector, handleImageClick) {
    console.log(handleImageClick);
    this._title = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
    this._element = ""; //que esta propiedad
    this._handleImageClick = handleImageClick;
    //la vas a generar en los metodos
  }
  //this._templateSelector
  /*<template id="card-template">
      <div class="card">
        <h1 class="card__title">
          <p class="card_paragraph">Hola</p>
        </h1>
        <img src="" class="card__image" />
      </div>
    </template>*/

  //HAY UN TIEMPO DE CONSTRUCCION  NEW

  //HAY UN TIEMPO PARA USAR ESA CONSTRUCCION
  //QUE ES CUANDO LLAMAS A LOS METODOS PUBLICOS

  _getTemplate() {
    //cuando vas a leer el html para el template
    return document
      .querySelector(this._templateSelector)
      .content.cloneNode(true);
  }

  generateCard() {
    this._element = this._getTemplate();
    const imageElement = this._element.querySelector(".card__image");
    const titleElement = this._element.querySelector(".card_paragraph");

    titleElement.textContent = this._title;
    imageElement.src = this._image;

    imageElement.addEventListener("click", () => {
      this._handleImageClick();
    });

    return this._element;
  }
}

export default Card;
