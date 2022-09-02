export default class Card {
  constructor({data, handleCardClick}, templateSelector) {
      this._title = data.name;
      this._image = data.link;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
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
    this._cardTitle = this._element.querySelector('.elements__title');
    this._cardImage.src = `${this._image}`;
    this._cardTitle.textContent = this._title;
    this._cardImage.alt = this._title;
    this._setEventListeners();
    return this._element;
  }


  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._image, this._title)// открываем попап
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLike()// лайкаем карточку
    });

    // this._element.querySelector('.elements__trash').addEventListener('click', () => {
    //   this._handleDelete()// удаляем карточку
    // });
  }

  _handleLike() {
    this._likeButton.classList.toggle('elements__like_active');
  }

  // _handleDelete() {
  //   this._element.remove();
  //   this._element = null; 
  // }
}
