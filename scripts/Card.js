class Card {
  constructor(data, templateSelector, handlePreview) {
      this._title = data.name;
      this._image = data.link;
      this._templateSelector = templateSelector;
      this._handlePreview = handlePreview;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
    
    // вернём DOM-элемент карточки
    return cardElement;
  } 

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.elements__image');
    this._likeButton = this._element.querySelector('.elements__like');
    this._setEventListeners();
    this._cardImage.src = `${this._image}`;
    this._element.querySelector('.elements__title').textContent = this._title; 
    this._cardImage.alt = this._title;
    return this._element;
  }


  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handlePreview(this._image, this._title)// открываем попап
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLike()// лайкаем карточку
    });

    this._element.querySelector('.elements__trash').addEventListener('click', () => {
      this._handleDelete()// удаляем карточку
    });
  }

  _handleLike() {
    this._likeButton.classList.toggle('elements__like_active');
  }

  _handleDelete() {
    this._element.remove();
    this._element = null; 
  }
}

export {Card};
