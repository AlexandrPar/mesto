import  Popup  from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
}

open(item) {
    const image = this._popup.querySelector('.popup__image');
    const subtitel = this._popup.querySelector('.popup__subtitel');

    image.src = item.link
    subtitel.alt = item.name
    subtitel.textContent = item.name
    super.open()
}
}