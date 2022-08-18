import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

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

buttonCard.addEventListener('click', () => {
  popupNewCard.open();
});





// buttonCard.addEventListener('click', openCardPopup);  

// buttonCard.addEventListener('click', () => {
//   popupNewCard.open();
//   // checkNewPlcePopupValidation.toggleButtonState();
// });

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






function inputName(event) { 
  event.preventDefault() 
  nameInput.value = nameProfile.textContent; 
  jobInput.value = jobProfile.textContent; 
  profileValidator.clearError();
  openPopups(popupProfile); 
} 


//Функция открытия попапа добавления карточки
// function openCardPopup() {
//   cardValidator.clearError();
//   formPlace.reset(); 
//   openPopups(popupPlace);
//   // popupPlace.open();
// }


//Функция открытия попапа 
// function openPopups(popup) { 
//   popup.classList.add('popup_opened'); 
//   document.addEventListener('keydown', escapeHandler); 
// } 

//функция закрытия попапа 
// function closePopups(popup) { 
//   document.removeEventListener('keydown', escapeHandler);
//   popup.classList.remove('popup_opened');
// } 


//Обработчик формы 
// function formSubmitHandler (evt) { 
//   evt.preventDefault(); 
//   nameProfile.textContent = nameInput.value;  
//   jobProfile.textContent = jobInput.value; 
//   closePopups(popupProfile);
// } 

//Закрытие по клику на overlay 
// popups.forEach((popup) => { 
//   popup.addEventListener('mousedown', (evt) => { 
//       overlayHandler(evt, popup)}); 
// }) 

//функция отслеживающая нажатие на оверлей и кнопку закрытия 
// function overlayHandler(evt, popup) { 
//   if (evt.target.classList.contains('popup_opened')) { 
//     closePopups(popup);
//   } else if (evt.target.classList.contains('popup__close-btn')) { 
//     closePopups(popup);
//   } 
// } 

//функция закрытия попапа по нажатию Escape 
// function escapeHandler(evt) { 
//   if (evt.key === 'Escape') { 
//       const openedPopup = document.querySelector('.popup_opened'); 
//       closePopups(openedPopup); 
//   } 
// } 

//Подключаем валидатор
const cardValidator = new FormValidator(validationData, popupPlace); //валидатор формы нового места
cardValidator.enableValidation();

const profileValidator = new FormValidator(validationData, popupProfile);//валидатор формы профиля
profileValidator.enableValidation();



// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка» 
// buttonEdit.addEventListener('click', inputName); 
// formProfile.addEventListener('submit', formSubmitHandler); 
// formPlace.addEventListener('submit', handleSubmit); 
