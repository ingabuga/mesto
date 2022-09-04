import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor({ popupSelector, submitForm }) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
      }
    
      setEventListener() {
        super.setEventListener();
        this._form.addEventListener('submit', (evt)=> {
          evt.preventDefault();
          this._submitForm(this._cardId, this._currentCard);
        })
      }
    
      open(cardId, card) {
        super.open();
        this._cardId = cardId;
        this._currentCard = card;
        
    }
    
}