import Popup from './Popup.js';

export default class PopupWithform extends Popup {
    constructor(popupSelector, {submitForm}) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._submitForm = submitForm;
        this._form = this._popupSelector.querySelector('.popup__form');


    }

    _getInputValues() {
        //достаем элементы полей формы
        this._inputList = this._form.querySelectorAll('.popup__text');

        //создаем пустой объект
        this._formValues = {};

        //добавляем в объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        //возвращаем объект значений
        return this._formValues;
    }

    //перезаписываем родительский метод добавляя обработчик сабмита формы
    setEventListener() {
        super.setEventListener();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
        })
    }


    //перзаписываем родительский метод close и сбрасываем форму
    close() {
        super.close();
        this._form.reset();
    }

}


