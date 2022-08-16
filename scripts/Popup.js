export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open () {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handlerEscClose); 
    }

    close() {
        document.removeEventListner('keydown', this._handlerEscClose);
        this._popup.classList.remove('popup_opened');
    }

    _handlerEscClose(evt) {
        if (evt.key === 'Escape') { 
            const openedPopup = document.querySelector('.popup_opened'); 
            openedPopup.close(); 
        } 
    }

    setEventListener() {
        this._popup.addEventListener('mousedown', (evt) => { 
            if (evt.target.classList.contains('popup_opened')) { 
                this._popup.close();
              } else if (evt.target.classList.contains('popup__close-btn')) { 
                this._popup.close();
              } 
        });
    }
}