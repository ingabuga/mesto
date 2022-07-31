/*
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
*/

class Card {
  constructor(data, templateSelector) {
      this._title = data.name;
      this._description = data.name;
      this._image = data.link;
      this._templateSelector = templateSelector;
  }

 _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
    
    // вернём DOM-элемент карточки
    return cardElement;
  } 

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.elements__image').src = `${this._image}`;
    this._element.querySelector('.elements__title').textContent = this._title; 
    this._element.querySelector('.elements__image').alt = this._description;
    return this._element;
  }


  _setEventListeners() {
    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._openPopup()// открываем попап
    });
    
    this._element.querySelector('.elements__like').addEventListener('click', () => {
      this._handleLike()// лайкаем карточку
    });

    this._element.querySelector('.elements__trash').addEventListener('click', () => {
      this._handleDelete()// удаляем карточку
    });
  }

  _handleLike() {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }

  _handleDelete() {
    this._element.remove(); 
  }
/*
  _openPopup() {
    popupImage.src = this._image; 
    popupImage.alt = this._title; 
    popupDescription.textContent = this._title;
    openPopups(popupPhoto); 
  }
*/
}

export {Card};