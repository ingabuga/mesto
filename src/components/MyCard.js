import Card from './Card.js';

export default class MyCard extends Card {
    constructor({data, handleCardClick}, templateSelector, handleDeleteCard, handleClickLike) {
      super({data, handleCardClick}, templateSelector, handleClickLike);
      this._handleDeleteCard = handleDeleteCard;
    }
  

    handleCardDelete() {
      this._element.remove();
      this._element = null; 
    }

    
    _setEventListeners() {
      super._setEventListeners();

      // this._element.querySelector('.elements__trash').addEventListener('click', () => {
      //   this._handleDelete(this._cardId, this)// удаляем карточку
      // });

      this._element.querySelector('.elements__trash').addEventListener('click', () => {
        this._handleDeleteCard(this._cardId, this)// удаляем карточку
      });
    } 
  
    // _handleDelete() {
    //   this._element.remove();
    //   this._element = null; 
    // }


  }
  