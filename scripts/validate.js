const showInputError = (formElement, inputElement, errorMessage, parameters) => { 
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
  inputElement.classList.add(parameters.errorClass); 
  errorElement.textContent = errorMessage; 
  errorElement.classList.add(parameters.inputErrorClass); 
}; 


const hideInputError = (formElement, inputElement, parameters) => { 
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
  inputElement.classList.remove(parameters.errorClass); 
  errorElement.classList.remove(parameters.inputErrorClass); 
  errorElement.textContent = ''; 
}; 


const checkInputValidity = (formElement, inputElement, parameters) => { 
  if (!inputElement.validity.valid) { 
    showInputError(formElement, inputElement, inputElement.validationMessage, parameters); 
  } else { 
    hideInputError(formElement, inputElement, parameters); 
  } 
}; 

 
const setEventListeners = (formElement, parameters) => { 

  const inputList = Array.from(formElement.querySelectorAll(parameters.inputSelector)); 

  const buttonElement = formElement.querySelector(parameters.submitButtonSelector); 
  toggleButtonState(inputList, buttonElement, parameters); 

  inputList.forEach((inputElement) => { 
    inputElement.addEventListener('input', function () { 
      checkInputValidity(formElement, inputElement, parameters); 
      toggleButtonState(inputList, buttonElement, parameters); 
    }); 

  }); 

}; 

const hasInvalidInput = (inputList) => { 
  return inputList.some((inputElement) => { 
    return !inputElement.validity.valid; 
  }) 

};  

const enableValidation = (parameters) => { 
  const formList = Array.from(document.querySelectorAll(parameters.formSelector)); 
  formList.forEach((formElement) => { 
    setEventListeners(formElement, parameters); 
  }); 

}; 


const toggleButtonState = (inputList, submitButton, {inactiveButtonClass}) => { 
  if (hasInvalidInput(inputList)) { 
    disableSubmitButton(submitButton, inactiveButtonClass);

  } else {  
    enableSubmitButton(submitButton, inactiveButtonClass);
  } 

};  


function disableSubmitButton(submitButton, inactiveButtonClass) {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.setAttribute('disabled', true);
}

function enableSubmitButton(submitButton, inactiveButtonClass) {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.removeAttribute('disabled', true);
}
 

enableValidation({ 
  formSelector: '.popup__form', 
  inputSelector: '.popup__text', 
  submitButtonSelector: '.popup__save-button', 
  inactiveButtonClass: 'popup__save-button_inactive', 
  inputErrorClass: 'error_active', 
  errorClass: 'popup__text_input_error' 

}); 

/*
class FormValidator {
  constructor(data, profilePopup) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._currentForm = profilePopup;
  } 
  /*
  _checkInputValidity (formElement, inputElement, parameters) { 
    if (!inputElement.validity.valid) { 
      _showInputError(formElement, inputElement, inputElement.validationMessage, parameters); 
    } else { 
      _hideInputError(formElement, inputElement, parameters); 
    } 
  }; 

  _isValid(currentInput) {
    if(!currentInput.validity.valid) {
        this._showInputError(currentInput, currentInput.validationMessage);
    } else {
        this._hideInputError(currentInput);
    }
  }

  enableValidation () { 
    const formList = Array.from(document.querySelectorAll(this._formSelector)); 
    formList.forEach((formElement) => { 
      setEventListeners(formElement, parameters); 
    }); 
  }; 


  _showInputError(inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(this._errorClass); 
    errorElement.textContent = errorMessage; 
    errorElement.classList.add(this._inputErrorClass); 
  }

  _hideInputError (inputElement) { 
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.remove(this._errorClass); 
    errorElement.classList.remove(this._inputErrorClass); 
    errorElement.textContent = ''; 
  }; 

  _setEventListeners (formElement, parameters) { 

    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector)); 

    const buttonElement = formElement.querySelector(this._submitButtonSelector); 
    _toggleButtonState(inputList, buttonElement, parameters); 

    inputList.forEach((inputElement) => { 
      inputElement.addEventListener('input', function () { 
        _checkInputValidity(formElement, inputElement, parameters); 
        _toggleButtonState(inputList, buttonElement, parameters); 
      }); 

    }); 

  }; 


  _toggleButtonState (inputList, submitButton, {inactiveButtonClass}) { 
    if (_hasInvalidInput(inputList)) { 
      disableSubmitButton(submitButton, inactiveButtonClass);

    } else {  
      _enableSubmitButton(submitButton, inactiveButtonClass);
    } 
  }; 
  
  disableSubmitButton() {
    submitButton.classList.add(this._inactiveButtonClass);
    submitButton.setAttribute('disabled', true);
  } 

  _enableSubmitButton() {
    submitButton.classList.remove(this._inactiveButtonClass);
    submitButton.removeAttribute('disabled', true);
  }

}

export {FormValidator};
*/
