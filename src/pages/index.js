import '../pages/index.css';
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
  avatar,
  nameIn,
  jobIn,
  initialCards,
  configValidation,
  userId,
  popupDeleteElement,
  popupAvatarElement,
  formAvatarElement,
  popupAvatarOpenButtonElement
}
  from '../utils/constants.js'


import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'
import Api from '../components/Api.js'

export const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-40",
  headers: {
    authorization: '01f605d6-2ba8-465e-8b72-b66efbe87468',
    'Content-Type': 'application/json'
  }
});


Promise.all([api.getProfileInfo(), api.getMassivCards()])
  .then(([item, cards]) => {
    userInfos.setUserInfo(item);
    userId.id = item._id;
    sectionCards.renderItems(cards)
  })
  .catch(err => {
    console.log(`Ошибка получения данных: ${err}`)
  });


const userInfos = new UserInfo(userName, jobInput, avatar);

const popupProfil = new PopupWithForm(
  popupProfileElement,
  {callbackSubmitForm: (data) => {
      popupProfil.loadButtom(true)
      console.log(data)
      api.renameProfileInfo(data)
        .then((item) => {
          userInfos.setUserInfo(item);
          popupProfil.close()
        })
        .catch(err => console.log(`Ошибка обновления данных: ${err}`))
        .finally(() => {
          popupProfil.loadButtom(false)
        })
    },
  }
)

popupProfil.setEventListeners()

popupProfileOpenButtonElement.addEventListener('click', () => {
  const userData = userInfos.getUserInfo();
  nameIn.value = userData.name;
  jobIn.value = userData.profession;
  popupProfil.open();
  formProfileElementValidator.resetValidation();
});

const popupAvatar = new PopupWithForm(
  popupAvatarElement,
  {callbackSubmitForm : (item) => {
    console.log(item)
    popupAvatar.loadButtom(true)
    api.replaceProfileAvatar(item)
      .then((item) => {
        userInfos.setUserInfo(item);
        popupAvatar.close();
      })
    .catch(err => console.log(`Ошибка аватара: ${err}`))
    .finally(() => {
      popupAvatar.loadButtom(false)
    })
  },
});

popupAvatar.setEventListeners()

popupAvatarOpenButtonElement.addEventListener('click', () => {
  formAvatarElementValidator.resetValidation();
  popupAvatar.open();
});

const sectionCards = new Section({
  renderer: (cards) => {
    const element = createCard(cards)
    sectionCards.addItem(element)
  }
},
  gallery
);

const handleCardClick = (item) => {
  popupImageElement.open(item)
}

const handleDeleteCard = (card) => {
  popupConfirm.open()
  popupConfirm.submitAction(() => {
    api.deleteCard(card.getId())
      .then(() => {
        card.removeButtonClick()
        popupConfirm.close()
      })
      .catch((err) =>
        console.log(`Ошибка удаления карточки: ${err}`));
  })
}

const popupConfirm = new PopupWithConfirmation(popupDeleteElement);
popupConfirm.setEventListeners();


const handleLikeClick = (card) => {
  if (card.isLiked()) {
    api.deleteCardLike(card.getId())
      .then(dataLikes => {
        card.setLikes(dataLikes.likes)
      })
      .catch(err => console.log(`Ошибка удаления лайка: ${err}`))
  } else {
    api.getCardLike(card.getId())
      .then(dataLikes => {
        card.setLikes(dataLikes.likes)
      })
      .catch(err => console.log(`Ошибка установки лайка: ${err}`))
  }
}


function createCard(item) {
  const card = new Card(item,
    cardTemplate,
    handleCardClick,
    handleDeleteCard,
    handleLikeClick,
    userId,
  );
  return card.generateCard();
}

const cardPopup = new PopupWithForm(popupCardElement,
    {callbackSubmitForm: (item) => {
      cardPopup.loadButtom(true);
      api.addNewCard(item)
        .then((res) => {
          sectionCards.addItem(createCard(res))
          cardPopup.close()
        })
        .catch((err) => {
          console.log(`Ошибка отправки данных карточки: ${err}`);
        })
        .finally(() => cardPopup.loadButtom(false));
    }
  });

cardPopup.setEventListeners();

popupCardOpenButtonElement.addEventListener('click', () => {
  cardPopup.open();
  formCardElementValidator.resetValidation();
});

const formProfileElementValidator = new FormValidator(configValidation, formProfileElement);
formProfileElementValidator.enableValidation();

const formCardElementValidator = new FormValidator(configValidation, formCardElement);
formCardElementValidator.enableValidation();

const formAvatarElementValidator = new FormValidator(configValidation, formAvatarElement);
formAvatarElementValidator.enableValidation();

// function createCard(item) {
//   const card = new Card(item, cardTemplate, (item) => handleCardClick(item));
//   const cardElement = card.generateCard();
//   return cardElement;
// };


// const rendererCard = (item) => {
//   const card = createCard(item);
//   sectionCards.addItem(card)
// };



const popupImageElement = new PopupWithImage('.popup_class_image');

// const handleCardClick = (item) => {
//   const items = {
//     name: item.name,
//     link: item.link
//   }
//   popupImageElement.open(items);
// }

// sectionCards.renderItems();

// const cardPopup = new PopupWithForm(popupCardElement, {
//   callbackSubmitForm: (data) => {
//     const items = {
//       name: data.title,
//       link: data.link
//     };
//     rendererCard(items);
//     cardPopup.close()
//   }
// });

// const popupProfil = new PopupWithForm(popupProfileElement, {
//   callbackSubmitForm: (data) => {
//     userInfo.setUserInfo(data.name, data.profession);
//     popupProfil.close();
//   }
// });

popupImageElement.setEventListeners();
// cardPopup.setEventListeners();
// popupProfil.setEventListeners();


