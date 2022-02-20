const popupProfileOpenButtonElement = document.querySelector('.profile__edit-button');
const popupProfileElement = document.querySelector('.popup_class_profile');
const popupCardElement = document.querySelector('.popup_class_card');
const popupProfileCloseButtonElement = popupProfileElement.querySelector('.popup__close_class_profile');
const popupCardCloseButtonElement = popupCardElement.querySelector('.popup__close_class_card');
const gallery = document.querySelector('.gallery');
const popupCardOpenButtonElement = document.querySelector('.profile__add-button');
const cardTemplate = document.querySelector('#card-template').content;
let formProfileElement = document.querySelector('.popup__input-container_class_profile');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__profession');
let nameIn = formProfileElement.querySelector('.popup__item_el_name');
let jobIn = formProfileElement.querySelector('.popup__item_el_profession');
let formCardElement = document.querySelector('.popup__input-container_class_card');
let titleIn = formCardElement.querySelector('.popup__item_el_title');
let linkIn = formCardElement.querySelector('.popup__item_el_link');


const openProfilePopup = function () {
  popupProfileElement.classList.add('popup_opened')
};

const openCardPopup = function () {
  popupCardElement.classList.add('popup_opened')
};

const closeProfilePopup = function () {
  popupProfileElement.classList.remove('popup_opened')
};

const closeCardPopup = function () {
  popupCardElement.classList.remove('popup_opened')
};

let fillPopup = function () {
  nameIn.value = nameInput.textContent;
  jobIn.value = jobInput.textContent;
};

function rewriteProfile(evt) {
  evt.preventDefault();

  nameInput.textContent = nameIn.value;
  jobInput.textContent = jobIn.value;
  closeProfilePopup();
}

formProfileElement.addEventListener('submit', rewriteProfile);
popupCardOpenButtonElement.addEventListener('click', openCardPopup);
popupProfileOpenButtonElement.addEventListener('click', openProfilePopup);
popupProfileOpenButtonElement.addEventListener('click', fillPopup);
popupProfileCloseButtonElement.addEventListener('click', closeProfilePopup);
popupCardCloseButtonElement.addEventListener('click', closeCardPopup);


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

function setEvtListeners(cardElement){

  cardElement.querySelector('.card__like').addEventListener('click', cardLike);
  cardElement.querySelector('.card__delete').addEventListener('click', cardDelite);
  cardElement.querySelector('.card__image').addEventListener('click', openImagePopup);

}


function renderCards(element) {
  const cardElement = cardTemplate.cloneNode(true);
  const textCard = cardElement.querySelector('.card__name');
  const imageCard = cardElement.querySelector('.card__image');

  textCard.textContent = element.name;
  imageCard.src = element.link;
  setEvtListeners(cardElement);
  
  gallery.appendChild(cardElement);
};

function getNewItemCard(){
  const cardElement = cardTemplate.cloneNode(true);
  const textCard = cardElement.querySelector('.card__name');
  const imageCard = cardElement.querySelector('.card__image');

  textCard.textContent = titleIn.value;
  imageCard.src = linkIn.value;
  setEvtListeners(cardElement);
  
  gallery.appendChild(cardElement);
  closeCardPopup();

}

formCardElement.addEventListener('submit', (evt) =>{

  evt.preventDefault();
  getNewItemCard();

});

function renderinitialCards(initialCards) {
  initialCards.forEach(renderCards);
}

renderinitialCards(initialCards);

function cardLike(evt){

  evt.target.classList.toggle('card__like_active');

}

function  cardDelite(evt){

  let dedicatedCard = evt.target.closest('.card');
    dedicatedCard.remove();

}
