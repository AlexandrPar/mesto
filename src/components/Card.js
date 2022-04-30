export default class Card {
  constructor(item, cardTemplate, handleCardClick, handleDeleteCard, handleLikeClick, userId) {
    this._likes = item.likes;
    this._name = item.name;
    this._link = item.link;
    this._id = item._id;
    this._ownerId = item.owner._id;
    this._handleDeleteCard = handleDeleteCard;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._cardTemplate = cardTemplate;
    this._userId = userId.id
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
    this._cardImage = this._element.querySelector('.card__image');
    this._likeButton = this._element.querySelector('.card__like');
    this._deleteButton = this._element.querySelector('.card__delete');
    this._amountLike = this._element.querySelector('.card__like-amount');


    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__name').textContent = this._name;
    this._removeDelButton();
    this._handlerLikes();
    this._setEvtListeners();
    
    return this._element;
  }

  _removeDelButton() {
    if (this._userId !== this._ownerId) {
      this._deleteButton.remove();
    }
  }

  isLiked() {
    return Boolean(this._likes.find(user => user._id === this._userId))
  };

  removeButtonClick() {
    this._element.remove();
    this._element = null;
  }

  setLikes(likes) {
    this._likes = likes;
    this._handlerLikes();
  };

  getId() {
    return this._id
  };

  _handlerLikes() {
    this._element.querySelector('.card__like-amount').textContent = this._likes.length
    if (this.isLiked()) {
      this._likeButton.classList.add('card__like_active')
    } else {
      this._likeButton.classList.remove('card__like_active')
    }
  };

  _setEvtListeners() {

    this._deleteButton.addEventListener('click', () => 
    this._handleDeleteCard(this));
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick(this);
    });
    this._cardImage.addEventListener('click', () => this._handleCardClick({ name: this._name, link: this._link }));
  };
};
