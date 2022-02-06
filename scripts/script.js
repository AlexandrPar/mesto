const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
let formElement = document.querySelector('.popup__save');
let formElement2 = document.querySelector('.profile__info');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__profession');
let nameIn = document.querySelector('.popup__item_el_name');
let jobIn = document.querySelector('.popup__item_el_profession');

const openPopup = function () {
  popupElement.classList.add('popup_opened')
};

const closePopup = function () {
  popupElement.classList.remove('popup_opened')
};

const fillPopup = function () {
  nameIn.value = nameInput.innerHTML;
  jobIn.value = jobInput.innerHTML;
};



function formSubmitHandler(evt) {
  evt.preventDefault(); 
  let N_In = nameIn.value;
  let J_In = jobIn.value;
  console.log(J_In)
  nameInput.textContent = N_In;
  jobInput.textContent = J_In;
};


popupOpenButtonElement.addEventListener('click', openPopup);
popupOpenButtonElement.addEventListener('click', fillPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closePopup);





