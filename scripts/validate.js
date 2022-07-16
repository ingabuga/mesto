


// вебинар
/*
const popupForm = document.querySelectorAll('.popup__form');

popupForm.forEach((input) => {
  input.addEventListener('input', handlerInputForm);
});

function handlerInputForm(event) {
  event.preventDefault();
  const currentForm = event.currentTarget;
  validate(currentForm);
  showInputError(event.target);  
  
}

//неактивная кнопка отправки
function validate(form) {
  const submitButton = form.querySelector('.popup__save-button');

  if(form.checkValidity()) {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('popup__save-button_inactive');
  } else {
    submitButton.removeAttribute('disabled', true);
    submitButton.classList.remove('popup__save-button_inactive');
  }
}

const showInputError = (input) => {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add('popup__text_error_active');
  input.classList.add('popup__text_input_error');
};

const hideInputError = (input) => {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
  //errorElement.reset();
  //errorElement.textContent = '';
  errorElement.classList.remove('popup__text_error_active');
  input.classList.remove('popup__text_input_error');
};
*/



/*const parameters = {
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__text_error_active',
  errorClass: 'popup__text_input_error'
};
*/


//валидация с деактивацией кнопки отправки
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__text_input_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__text_error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__text_input_error');
  errorElement.classList.remove('popup__text_error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
  const buttonElement = formElement.querySelector('.popup__save-button');
  
  console.log(buttonElement.disabled)
  toggleButtonState(inputList, buttonElement);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__container'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    
  const fieldsetList = Array.from(formElement.querySelectorAll('.popup__form'));
    fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
    }); 
  });
};


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 


const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-button_inactive');
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove('popup__save-button_inactive');
    buttonElement.removeAttribute('disabled', true);
  }
}; 

enableValidation();