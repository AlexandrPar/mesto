const popupProfileOpenButtonElement = document.querySelector('.profile__edit-button');
const popupImageElement = document.querySelector('.popup_class_image');
const imageImagePopap = popupImageElement.querySelector('.popup__image');
const subtitelImagePopap = popupImageElement.querySelector('.popup__subtitel');
const popupProfileElement = document.querySelector('.popup_class_profile');
const popupCardElement = document.querySelector('.popup_class_card');
const popupImageCloseButtonElement = popupImageElement.querySelector('.popup__close_class_image');
const popupProfileCloseButtonElement = popupProfileElement.querySelector('.popup__close_class_profile');
const popupCardCloseButtonElement = popupCardElement.querySelector('.popup__close_class_card');
const gallery = document.querySelector('.gallery');
const popupCardOpenButtonElement = document.querySelector('.profile__add-button');
const cardTemplate = document.querySelector('#card-template').content;
const formProfileElement = document.querySelector('.popup__input-container_class_profile');
const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__profession');
const nameIn = formProfileElement.querySelector('.popup__item_el_name');
const jobIn = formProfileElement.querySelector('.popup__item_el_profession');
const formCardElement = document.querySelector('.popup__input-container_class_card');
const titleIn = formCardElement.querySelector('.popup__item_el_title');
const linkIn = formCardElement.querySelector('.popup__item_el_link');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

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

formProfileElement.addEventListener('submit', handleProfileFormSubmit);
popupCardOpenButtonElement.addEventListener('click', () =>  openPopup(popupCardElement));
popupProfileOpenButtonElement.addEventListener('click', fillPopup);
popupProfileCloseButtonElement.addEventListener('click', () => closePopup(popupProfileElement));
popupCardCloseButtonElement.addEventListener('click', () => closePopup(popupCardElement));
popupImageCloseButtonElement.addEventListener('click', () => closePopup(popupImageElement));


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

function setEvtListeners(cardElement) {

  cardElement.querySelector('.card__like').addEventListener('click', toggleLikes);
  cardElement.querySelector('.card__delete').addEventListener('click', deleteCard);
  cardElement.querySelector('.card__image').addEventListener('click', handleImageClick);

}

function createCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  const textCard = cardElement.querySelector('.card__name');
  const imageCard = cardElement.querySelector('.card__image');

  textCard.textContent = name;
  imageCard.src = link;
  imageCard.alt = name;
  setEvtListeners(cardElement);
  return cardElement;
}

function renderCards(element) {
  const cardElement = createCard(element.name, element.link)
  gallery.append(cardElement);
};

function getNewItemCard(evt) {

  evt.preventDefault();
  const cardElement = createCard(titleIn.value, linkIn.value);
  gallery.prepend(cardElement);
  closePopup(popupCardElement);
  formCardElement.reset(); 
}

formCardElement.addEventListener('submit', getNewItemCard);

function renderInitialCards(initialCards) {
  initialCards.forEach(renderCards);
}

renderInitialCards(initialCards);

function toggleLikes(evt) {

  evt.target.classList.toggle('card__like_active');

}

function deleteCard(evt) {

  const dedicatedCard = evt.target.closest('.card');
  dedicatedCard.remove();

}

function handleImageClick(evt) {

  openPopup(popupImageElement);
  const dedicatedCard = evt.target.closest('.card');
  const textCard = dedicatedCard.querySelector('.card__name');
  const imageCard = dedicatedCard.querySelector('.card__image');

  subtitelImagePopap.textContent = textCard.textContent;
  imageImagePopap.src = imageCard.getAttribute("src");
  imageImagePopap.alt = textCard.textContent;

}

