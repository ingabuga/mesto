export default class Card {
  constructor({data, handleCardClick}, templateSelector, handleClickLike) {
    this._title = data.name;
    this._image = data.link;
    this._likeCount = data.likes.length;
    this._cardId = data._id;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
    this._handleClickLike = handleClickLike;
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

    this._cardImage.src = this._image;
    this._cardTitle.textContent = this._title;
    this._cardImage.alt = this._title;
    this._likeNumbers.textContent = this._likeCount;
    this._setEventListeners();
    return this._element;
  }



  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._image, this._title)// открываем попап
    });

    // this._likeButton.addEventListener('click', () => {
    //   this._handleLike()// лайкаем карточку
    // });

    this._likeButton.addEventListener('click', () => {
      this._handleClickLike(this, this._cardId, this._isLiked)// лайкаем карточку
    });

    // this._element.querySelector('.elements__trash').addEventListener('click', () => {
    //   this._handleDelete()// удаляем карточку
    // });
  }

  // _handleLike() {
  //   this._likeButton.classList.toggle('elements__like_active');
  // }

  // _handleLike(isLiked) {
  //   this._likeButton.classList.toggle('elements__like_active');
  // }

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


  // _handleDelete() {
  //   this._element.remove();
  //   this._element = null; 
  // }
}
