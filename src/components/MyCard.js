import Card from './Card.js';

export default class MyCard extends Card {
    constructor({data, handleCardClick}, templateSelector, handleCardRemove, handleClickLike) {
      super({data, handleCardClick}, templateSelector, handleClickLike);
      this._handleCardRemove = handleCardRemove;
    }
  

    handleRemoveCard() {
      this._element.remove();
      this._element = null; 
    }

    
    _setEventListeners() {
      super._setEventListeners();

      this._element.querySelector('.elements__trash').addEventListener('click', () => {
        this._handleCardRemove(this._cardId, this)// удаляем карточку
      });
    } 
  

  }
  