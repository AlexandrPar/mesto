const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
let formElement = document.querySelector('.popup__input-container');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__profession');
let nameIn = formElement.querySelector('.popup__item_el_name');
let jobIn = formElement.querySelector('.popup__item_el_profession');

const openPopup = function () {
  popupElement.classList.add('popup_opened')
};

const closePopup = function () {
  popupElement.classList.remove('popup_opened')
};

let fillPopup = function () {
  nameIn.value = nameInput.innerHTML;
  jobIn.value = jobInput.innerHTML;
};

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameInput.textContent = nameIn.value;
  jobInput.textContent = jobIn.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
popupOpenButtonElement.addEventListener('click', openPopup);
popupOpenButtonElement.addEventListener('click', fillPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

