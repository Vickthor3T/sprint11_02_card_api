//PRIMERO PROGRAMAR LAS COSAS QUE TIENEN EN COMUN LOS
//ABRIR Y CERRAR EL POPUP

class Popup {
  constructor(popupSelector) {
    console.log("El Selector del constructo es:" + popupSelector);

    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
  }
}

export default Popup;
