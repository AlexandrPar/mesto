export const popupProfileSelector = '.popup_class_profile';
export const popupProfileOpenButtonElement = document.querySelector('.profile__edit-button');
export const formProfileElement = document.querySelector('.popup__input-container_class_profile');
export const popupCardSelector = '.popup_class_card';
export const cardTemplate = '#card-template';
export const popupCardOpenButtonElement = document.querySelector('.profile__add-button');
export const formCardElement = document.querySelector('.popup__input-container_class_card');
export const gallery = document.querySelector('.gallery');
export const userName = '.profile__name';
export const jobInput = '.profile__profession';
export const avatar = '.profile__avatar'
export const nameIn = document.querySelector('.popup__item_el_name');
export const jobIn = document.querySelector('.popup__item_el_profession');
export const userId = {};
export const popupDeleteSelector = '.popup_class_delete';
export const popupAvatarSelector = '.popup_class_avatar';
export const formAvatarElement = document.querySelector('.popup__input-container_class_avatar');
export const popupAvatarOpenButtonElement = document.querySelector('.profile__avatar-replace');

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const configValidation = {
  formSelector: '.popup__input-container',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__input-error'

};