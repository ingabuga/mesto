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