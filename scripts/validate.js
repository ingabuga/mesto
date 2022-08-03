class FormValidator {
  constructor(data, profilePopup) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._profilePopup = profilePopup;
  } 


  _showInputError(inputElement, errorMessage) {
    const errorElement = this._profilePopup.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(this._errorClass); 
    errorElement.textContent = errorMessage; 
    errorElement.classList.add(this._inputErrorClass); 
  }


  _hideInputError (inputElement) { 
    const errorElement = this._profilePopup.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.remove(this._errorClass); 
    errorElement.classList.remove(this._inputErrorClass); 
    errorElement.textContent = ''; 
  }; 

 
  _checkInputValidity (inputElement) { 
    if (!inputElement.validity.valid) { 
      this._showInputError(inputElement, inputElement.validationMessage); 
    } else { 
      this._hideInputError(inputElement); 
    } 
  }; 


  _isValid(inputElement) {
    if(!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
    } else {
        this._hideInputError(inputElement);
    }
  }

  enableValidation() { 
    this._formList = Array.from(this._profilePopup.querySelectorAll(this._inputSelector));
    this._buttonElement = this._profilePopup.querySelector(this._submitButtonSelector);  
    this._toggleButtonState();
    this._setEventListeners();
  }; 


  _setEventListeners() { 
    this._formList.forEach((inputElement) => { 
      inputElement.addEventListener('input', () => { 
        this._checkInputValidity(inputElement); 
        this._toggleButtonState(); 
      }); 

    }); 

  }; 


  _hasInvalidInput() { 
    return this._formList.some((inputItem) => { 
      return !inputItem.validity.valid; 
    });
  }

  // Переключение кнопки
  _toggleButtonState() { 
    if (this._hasInvalidInput(this._formList)) { 
      this._disableSubmitButton();

    } else {  
      this._enableSubmitButton();
    } 
  }; 
  
  //  Отключение кнопки
  _disableSubmitButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  } 

  // Включение кнопки
  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled', true);
  }

  //Очистка полей ошибок после валидации
  clearError() {
    this._formList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      this._disableSubmitButton(inputElement);
    });

  }

}

export {FormValidator};

