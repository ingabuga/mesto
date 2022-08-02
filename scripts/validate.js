// const showInputError = (formElement, inputElement, errorMessage, parameters) => { 
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
//   inputElement.classList.add(parameters.errorClass); 
//   errorElement.textContent = errorMessage; 
//   errorElement.classList.add(parameters.inputErrorClass); 
// }; 


// const hideInputError = (formElement, inputElement, parameters) => { 
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
//   inputElement.classList.remove(parameters.errorClass); 
//   errorElement.classList.remove(parameters.inputErrorClass); 
//   errorElement.textContent = ''; 
// }; 


// const checkInputValidity = (formElement, inputElement, parameters) => { 
//   if (!inputElement.validity.valid) { 
//     showInputError(formElement, inputElement, inputElement.validationMessage, parameters); 
//   } else { 
//     hideInputError(formElement, inputElement, parameters); 
//   } 
// }; 

 
// const setEventListeners = (formElement, parameters) => { 

//   const inputList = Array.from(formElement.querySelectorAll(parameters.inputSelector)); 

//   const buttonElement = formElement.querySelector(parameters.submitButtonSelector); 
//   toggleButtonState(inputList, buttonElement, parameters); 

//   inputList.forEach((inputElement) => { 
//     inputElement.addEventListener('input', function () { 
//       checkInputValidity(formElement, inputElement, parameters); 
//       toggleButtonState(inputList, buttonElement, parameters); 
//     }); 

//   }); 

// }; 

// const hasInvalidInput = (inputList) => { 
//   return inputList.some((inputElement) => { 
//     return !inputElement.validity.valid; 
//   }) 

// };  

// const enableValidation = (parameters) => { 
//   const formList = Array.from(document.querySelectorAll(parameters.formSelector)); 
//   formList.forEach((formElement) => { 
//     setEventListeners(formElement, parameters); 
//   }); 

// }; 


// const toggleButtonState = (inputList, submitButton, {inactiveButtonClass}) => { 
//   if (hasInvalidInput(inputList)) { 
//     disableSubmitButton(submitButton, inactiveButtonClass);

//   } else {  
//     enableSubmitButton(submitButton, inactiveButtonClass);
//   } 

// };  


// function disableSubmitButton(submitButton, inactiveButtonClass) {
//   submitButton.classList.add(inactiveButtonClass);
//   submitButton.setAttribute('disabled', true);
// }

// function enableSubmitButton(submitButton, inactiveButtonClass) {
//   submitButton.classList.remove(inactiveButtonClass);
//   submitButton.removeAttribute('disabled', true);
// }
 
// const validationData = {
//   formSelector: '.popup__form', 
//   inputSelector: '.popup__text', 
//   submitButtonSelector: '.popup__save-button', 
//   inactiveButtonClass: 'popup__save-button_inactive', 
//   inputErrorClass: 'error_active', 
//   errorClass: 'popup__text_input_error' 
// };

// enableValidation(validationData);


// enableValidation({ 
//   formSelector: '.popup__form', 
//   inputSelector: '.popup__text', 
//   submitButtonSelector: '.popup__save-button', 
//   inactiveButtonClass: 'popup__save-button_inactive', 
//   inputErrorClass: 'error_active', 
//   errorClass: 'popup__text_input_error' 

// }); 



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
    
    

    // this._formList.forEach((inputElement) => { 
    //   _setEventListeners(inputElement); 
    // }); 

    this._formList.forEach((inputElement) => { 
      inputElement.addEventListener('input', () => { 
        this._checkInputValidity(inputElement); 
        this._toggleButtonState(); 
      }); 

    }); 
  }; 


  // _setEventListeners() { 
  //   // this._inputList = Array.from(this._profilePopup.querySelectorAll(this._inputSelector)); 

  //   // _toggleButtonState(this._inputList, this._buttonElement); 

  //   // this._formList.forEach((inputElement) => { 
  //   //   inputElement.addEventListener('input', () => { 
  //   //     _checkInputValidity(inputElement); 
  //   //     _toggleButtonState(); 
  //   //   }); 

  //   // }); 

  // }; 


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

}

export {FormValidator};

