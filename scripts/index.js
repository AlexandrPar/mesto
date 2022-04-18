import {
  popupProfileElement,
  popupProfileOpenButtonElement,
  formProfileElement,
  popupCardElement,
  cardTemplate,
  popupCardOpenButtonElement,
  formCardElement,
  gallery,
  userName,
  jobInput,
  nameIn,
  jobIn,
  initialCards,
  configValidation,
}
  from '../utils/constants.js'


import Card from './Card.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import PopupWithForm from './PopupWithForm.js';
import FormValidator from './FormValidator.js'

const formProfileElementValidator = new FormValidator(configValidation, formProfileElement);
formProfileElementValidator.enableValidation();

const formCardElementValidator = new FormValidator(configValidation, formCardElement);
formCardElementValidator.enableValidation();

function createCard(item) {
  const card = new Card(item, cardTemplate, (item) => handleCardClick(item));
  const cardElement = card.generateCard();
  return cardElement;
};


const rendererCard = (item) => {
  const card = createCard(item);
  sectionCards.addItem(card)
};

const sectionCards = new Section({
  items: initialCards,
  renderer: rendererCard
},
  gallery
);

const popupImageElement = new PopupWithImage('.popup_class_image');

const handleCardClick = (item) => {
  const items = {
      name: item.name,
      link: item.link
  }
  popupImageElement.open(items);
}

sectionCards.renderItems();

const cardPopup = new PopupWithForm(popupCardElement, {
  callbackSubmitForm: (data) => {
    const items = {
      name: data.title,
      link: data.link
    };
    rendererCard(items);
    cardPopup.close()
  }
});

const popupProfil = new PopupWithForm(popupProfileElement, {
  callbackSubmitForm: (data) => {
    userInfo.setUserInfo(data.name, data.profession);
    popupProfil.close();
  }
});

const userInfo = new UserInfo(userName, jobInput);

popupProfileOpenButtonElement.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  nameIn.value = data.name;
  jobIn.value = data.job;
  popupProfil.open();

});

popupCardOpenButtonElement.addEventListener('click', () => {
  cardPopup.open();
  formCardElementValidator.toggleButtonState();
});


popupImageElement.setEventListeners();
cardPopup.setEventListeners();
popupProfil.setEventListeners();


