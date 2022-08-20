class FormValidator {
  constructor(settings, formTemplate) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formTemplate = formTemplate;
  } 


  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formTemplate.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(this._errorClass); 
    errorElement.textContent = errorMessage; 
    errorElement.classList.add(this._inputErrorClass); 
  }


  _hideInputError (inputElement) { 
    const errorElement = this._formTemplate.querySelector(`#${inputElement.id}-error`); 
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


  enableValidation() { 
    this._inputList = Array.from(this._formTemplate.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formTemplate.querySelector(this._submitButtonSelector);  
    this.toggleButtonState();
    this._setEventListeners();
  }; 


  _setEventListeners() { 
    this._inputList.forEach((inputElement) => { 
      inputElement.addEventListener('input', () => { 
        this._checkInputValidity(inputElement); 
        this.toggleButtonState(); 
      }); 

    }); 

  }; 


  _hasInvalidInput() { 
    return this._inputList.some((inputItem) => { 
      return !inputItem.validity.valid; 
    });
  }

  // Переключение кнопки
  toggleButtonState() { 
    if (this._hasInvalidInput(this._inputList)) { 
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
    this._disableSubmitButton();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

}

export {FormValidator};

