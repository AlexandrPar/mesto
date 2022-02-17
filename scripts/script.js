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


initialCards.forEach(function (element) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__name').textContent = element.name;
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  }); 
  cardElement.querySelector('.card__delete').addEventListener('click', function (evt) {
    let dedicatedCard = evt.target.closest('.card');
    dedicatedCard.remove();
  }); 

  gallery.append(cardElement);
});

function getNewItemCard(evt) {
  evt.preventDefault();
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__name').textContent = titleIn.value;
  cardElement.querySelector('.card__image').src = linkIn.value;

  gallery.append(cardElement);
  
  closeCardPopup();
};

formCardElement.addEventListener('submit', getNewItemCard);