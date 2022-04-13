export const popupProfileElement = document.querySelector('.popup_class_profile');
export const popupProfileOpenButtonElement = document.querySelector('.profile__edit-button');
export const popupProfileCloseButtonElement = popupProfileElement.querySelector('.popup__close_class_profile');
export const formProfileElement = document.querySelector('.popup__input-container_class_profile');
export const nameIn = formProfileElement.querySelector('.popup__item_el_name');
export const jobIn = formProfileElement.querySelector('.popup__item_el_profession');
export const nameInput = document.querySelector('.profile__name');
export const jobInput = document.querySelector('.profile__profession');

export const popupImageElement = document.querySelector('.popup_class_image');
export const imageImagePopap = popupImageElement.querySelector('.popup__image');
export const subtitelImagePopap = popupImageElement.querySelector('.popup__subtitel');
export const popupImageCloseButtonElement = popupImageElement.querySelector('.popup__close_class_image');

export const popupCardElement = document.querySelector('.popup_class_card');
export const cardTemplate = document.querySelector('#card-template').content;
export const popupCardCloseButtonElement = popupCardElement.querySelector('.popup__close_class_card');
export const popupCardOpenButtonElement = document.querySelector('.profile__add-button');
export const formCardElement = document.querySelector('.popup__input-container_class_card');
export const titleIn = formCardElement.querySelector('.popup__item_el_title');
export const linkIn = formCardElement.querySelector('.popup__item_el_link');

export const cardFormSubmitButton = document.querySelector('.popup__save_class_card');
export const gallery = document.querySelector('.gallery');

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