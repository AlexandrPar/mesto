const popupProfileElement = document.querySelector('.popup_class_profile');
const popupProfileOpenButtonElement = document.querySelector('.profile__edit-button');
const popupProfileCloseButtonElement = popupProfileElement.querySelector('.popup__close_class_profile');
const formProfileElement = document.querySelector('.popup__input-container_class_profile');
const nameIn = formProfileElement.querySelector('.popup__item_el_name');
const jobIn = formProfileElement.querySelector('.popup__item_el_profession');
const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__profession');

const popupImageElement = document.querySelector('.popup_class_image');
const imageImagePopap = popupImageElement.querySelector('.popup__image');
const subtitelImagePopap = popupImageElement.querySelector('.popup__subtitel');
const popupImageCloseButtonElement = popupImageElement.querySelector('.popup__close_class_image');

const popupCardElement = document.querySelector('.popup_class_card');
const cardTemplate = document.querySelector('#card-template').content;
const popupCardCloseButtonElement = popupCardElement.querySelector('.popup__close_class_card');
const popupCardOpenButtonElement = document.querySelector('.profile__add-button');
const formCardElement = document.querySelector('.popup__input-container_class_card');
const titleIn = formCardElement.querySelector('.popup__item_el_title');
const linkIn = formCardElement.querySelector('.popup__item_el_link');

const cardFormSubmitButton = document.querySelector('.popup__save_class_card');
const gallery = document.querySelector('.gallery');

const initialCards = [
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

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByKeydown);
  popup.addEventListener('click', closePopupByClickOnOverlay);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByKeydown);
  popup.removeEventListener('click', closePopupByClickOnOverlay);
};

function closePopupByClickOnOverlay(evt) {
  if (evt.target !== evt.currentTarget) {
    return;
  }
  evt.target.classList.remove('popup_opened');
};

function closePopupByKeydown(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

function fillPopup() {
  nameIn.value = nameInput.textContent;
  jobIn.value = jobInput.textContent;
  openPopup(popupProfileElement);
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInput.textContent = nameIn.value;
  jobInput.textContent = jobIn.value;
  closePopup(popupProfileElement);
};

function getNewItemCard(evt) {
  evt.preventDefault();
  const item = {name: titleIn.value, link: linkIn.value} 
  const card = new Card (item, '#card-template');
  const cardElement = card.generateCard();
  gallery.prepend(cardElement);
  closePopup(popupCardElement);
  formCardElement.reset();
};

import Card from './card.js';

initialCards.forEach((item) => {
  const card = new Card (item, '#card-template');
  const cardElement = card.generateCard();
  gallery.append(cardElement);
});

formProfileElement.addEventListener('submit', handleProfileFormSubmit);
popupCardOpenButtonElement.addEventListener('click', () => {
  disableSubmitButton(cardFormSubmitButton, configValidation.inactiveButtonClass);
  openPopup(popupCardElement);
});
formCardElement.addEventListener('submit', getNewItemCard);
popupProfileOpenButtonElement.addEventListener('click', fillPopup);
popupProfileCloseButtonElement.addEventListener('click', () => closePopup(popupProfileElement));
popupCardCloseButtonElement.addEventListener('click', () => closePopup(popupCardElement));
popupImageCloseButtonElement.addEventListener('click', () => closePopup(popupImageElement));


