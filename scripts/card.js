
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByKeydown);
    popup.addEventListener('click', closePopupByClickOnOverlay);
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
  
  

const popupImageElement = document.querySelector('.popup_class_image');
const imageImagePopap = popupImageElement.querySelector('.popup__image');
const subtitelImagePopap = popupImageElement.querySelector('.popup__subtitel');


export default class Card {
    constructor(item, cardTemplate) {
        this._textCard = item.name;
        this._imageCard = item.link;
        this._cardTemplate = cardTemplate;
    }

    _getTemplete() {
        const cardElement = document
        .querySelector(this._cardTemplate)
        .content
        .querySelector('.card')
        .cloneNode(true);
  
      return cardElement;
    }
    generateCard() {
        this._element = this._getTemplete();
        this._setEvtListeners();

        this._element.querySelector('.card__image').src = this._imageCard;
		this._element.querySelector('.card__image').alt = this._textCard;
		this._element.querySelector('.card__name').textContent = this._textCard;
    
        return this._element;
    }

    _toggleLikes(evt) {
        evt.target.classList.toggle('card__like_active');
      };

    _deleteCard(evt) {
        const dedicatedCard = evt.target.closest('.card');
        dedicatedCard.remove();
      };
    
    _handleImageClick() {
        subtitelImagePopap.textContent = this._textCard;
        imageImagePopap.src = this._imageCard;
        imageImagePopap.alt = this._textCard;
        openPopup(popupImageElement);
      };

    _setEvtListeners() {
        const cardLikeButton = this._element.querySelector('.card__like');
        const cardDeleteButton = this._element.querySelector('.card__delete');
        const cardImage = this._element.querySelector('.card__image');

        cardLikeButton.addEventListener('click', (evt) => {
			this._toggleLikes(evt);
        });
        cardDeleteButton.addEventListener('click', (evt) => {
			this._deleteCard(evt);
        });
        cardImage.addEventListener('click', () => {
			this._handleImageClick();
        });
   }; 
};