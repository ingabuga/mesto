import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

import {
  buttonEdit,
  buttonCard,
  popupProfile,
  popupPlace,
  popupPhoto,
  popups,
  placeInput,
  linkInput,
  popupImage,
  popupDescription,
  formProfile,
  formPlace,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
  cardsContainer,
  initialCards,
  validationData
} from './constants.js';


const popupPreview = new PopupWithImage(popupPhoto);

//функция создания карточки из списка
const defaultCardList = new Section({ 
  data: initialCards, 
  renderer: (item) => {
  const cardElement = renderCard(item);
  defaultCardList.addItem(cardElement);
}
}, 
'.elements__element'
);

const renderCard = (data) => {
  const card = new Card({
    data,
    handleCardClick: () => {
      popupPreview.open(data.name, data.link);
    }
  },
    '.elements-template');
  return card.generateCard();
}

//добавление новой карточки
const popupNewCard = new PopupWithForm(popupPlace, 
  {submitForm: (item) => {
  const newCard = renderCard(item);
  cardsContainer.prepend(newCard);
  popupNewCard.close();
  formPlace.reset();
  }
});
popupNewCard.setEventListener();

//Редактирование информации класса пользователя
const userInput = new UserInfo({nameInput: '.profile__title', jobInput: '.profile__title-job'});

//попап редактирования профиля
const profilePopup = new PopupWithForm(
  popupProfile, 
  {submitForm: (data) => {
  userInput.setUserInfo(data);
  profilePopup.close();
  }
});
profilePopup.setEventListener();

//заполнение попапа профиля пользователя
function openProfile() {
  nameInput.value = nameProfile.textContent; 
  jobInput.value = jobProfile.textContent; 
  profilePopup.open();
  profileValidator.clearError();
}


// function inputName(event) { 
//   event.preventDefault() 
//   nameInput.value = nameProfile.textContent; 
//   jobInput.value = jobProfile.textContent; 
//   profileValidator.clearError();
//   openPopups(popupProfile); 
// } 

//слушатели кнопок

//Кнопка редактирования профиля
buttonEdit.addEventListener('click', () => {
  // profilePopup.open();
  openProfile();
  profileValidator._toggleButtonState();
});

//кнопка добавления новых мест
buttonCard.addEventListener('click', () => {
  cardValidator.clearError();
  popupNewCard.open();
  cardValidator._toggleButtonState();
});


// formProfile.addEventListener('submit', formSubmitHandler); 


//обработчик добавления карточки 
// const handleSubmit = (event) => { 
//   event.preventDefault() 
//   createCard({name:placeInput.value, link:linkInput.value}); 
//   closePopups(popupPlace); 
//   formPlace.reset(); //очистка полей ввода 
// } 



//отрисовка карточек из списка
defaultCardList.renderItems();

//превью карточки
popupPreview.setEventListener();









//Функция открытия попапа добавления карточки
// function openCardPopup() {
//   cardValidator.clearError();
//   formPlace.reset(); 
//   openPopups(popupPlace);
//   // popupPlace.open();
// }



//Обработчик формы 
// function formSubmitHandler (evt) { 
//   evt.preventDefault(); 
//   nameProfile.textContent = nameInput.value;  
//   jobProfile.textContent = jobInput.value; 
//   closePopups(popupProfile);
// } 


//Подключаем валидатор
const cardValidator = new FormValidator(validationData, popupPlace); //валидатор формы нового места
cardValidator.enableValidation();

const profileValidator = new FormValidator(validationData, popupProfile);//валидатор формы профиля
profileValidator.enableValidation();


