import { openPopup, closePopupByClickOnOverlay, closePopupByKeydown } from './index.js';


const popupImageElement = document.querySelector('.popup_class_image');
const imageImagePopap = popupImageElement.querySelector('.popup__image');
const subtitelImagePopap = popupImageElement.querySelector('.popup__subtitel');


export default class Card {
  constructor(item, cardTemplate) {
    this._textCard = item.name;
    this._imageCard = item.link;
    this._cardTemplate = cardTemplate;
  }



  _getTemplete() {
    const cardElement = document
      .querySelector(this._cardTemplate)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplete();
    this._cardImage = this._element.querySelector('.card__image');
    this._likeButton = this._element.querySelector('.card__like');
    this._deleteButton = this._element.querySelector('.card__delete');
    this._setEvtListeners();

    this._cardImage.src = this._imageCard;
    this._cardImage.alt = this._textCard;
    this._element.querySelector('.card__name').textContent = this._textCard;

    return this._element;
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('card__like_active');
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  };

  _handleImageClick() {
    subtitelImagePopap.textContent = this._textCard;
    imageImagePopap.src = this._imageCard;
    imageImagePopap.alt = this._textCard;
    openPopup(popupImageElement);
  };

  _setEvtListeners() {

    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });
    this._deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleImageClick();
    });
  };
};
