//Валидация форм
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
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
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    });
    setEventListeners(formElement);
  }); 
};

enableValidation();


/* Некрасов
formProfile.addEventListener('input', handlerInputForm);
validate(formProfile);

formPlace.addEventListener('input', handlerInputForm);
validate(formPlace);

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
    submitButton.removeAttribute('disabled', true);
    submitButton.classList.add('popup__save-button_inactive');
    submitButton.classList.remove('popup__save-button_inactive');
  } else {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.remove('popup__save-button_inactive');
    submitButton.classList.add('popup__save-button_inactive');
  }
}

const showInputError = (input) => {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
  //input.classList.add('popup__text_input_error');
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add('popup__text_error_active');
};
*/