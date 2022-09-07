export default class Card {
  constructor({data, handleCardClick}, templateSelector, handleCardRemove, handleClickLike, userId) {
    this._title = data.name;
    this._image = data.link;
    this._likeCount = data.likes.length;
    this._cardId = data._id;
    this._cardOwner = data.owner._id;
    this._myId = userId;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
    this._handleClickLike = handleClickLike;
    this._handleCardRemove = handleCardRemove;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
    
    // вернём DOM-элемент карточки
    return cardElement;
  } 

  countLikes(likes) {
    this._likeCount = likes.length;
    this._likeNumbers.textContent = this._likeCount;
  }


  generateCard() {
    this._element = this._getTemplate();
    
    this._cardImage = this._element.querySelector('.elements__image');
    this._likeButton = this._element.querySelector('.elements__like');
    this._cardTitle = this._element.querySelector('.elements__title');
    this._likeNumbers = this._element.querySelector('.elements__like-numbers');
    this._trashButton = this._element.querySelector('.elements__trash');

    this._cardImage.src = this._image;
    this._cardTitle.textContent = this._title;
    this._cardImage.alt = this._title;
    this._likeNumbers.textContent = this._likeCount;
    this._checkOwner();

    this._setEventListeners();
    return this._element;
  }


  _checkOwner() {
    if(this._cardOwner === this._myId) {
        this._enableDelete();
    }
  }



  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._image, this._title)// открываем попап
    });



    this._likeButton.addEventListener('click', () => {
      this._handleClickLike(this, this._cardId, this._isLiked)// лайкаем карточку
    });

    // this._trashButton.addEventListener('click', () => {
    //   this._handleCardRemove(this._cardId, this)// удаляем карточку
    // });

  }


  // Переключение сердечка на карточке
  toggleLike(isLiked) { 
    if (isLiked) {
      this._likeButton.classList.add('elements__like_active');
      this._isLiked = true;
    } else {
      this._likeButton.classList.remove('elements__like_active');
      this._isLiked = false;
    }
  }


  handleRemoveCard() {
    this._element.remove();
    this._element = null; 
  }



  _enableDelete() {
    this._trashButton.classList.add('elements__trash-active');
    this._trashButton.removeAttribute('disabled');

    this._trashButton.addEventListener('click', () => {
      this._handleCardRemove(this._cardId, this)// удаляем карточку
    });
  }

}
