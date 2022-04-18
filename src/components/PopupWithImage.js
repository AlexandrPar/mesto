import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._image = this._popup.querySelector('.popup__image');
    this._subtitel = this._popup.querySelector('.popup__subtitel');
  }

  open(item) {
    this._image.src = item.link
    this._subtitel.alt = item.name
    this._subtitel.textContent = item.name
    super.open()
  }
}
