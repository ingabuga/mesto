import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import Section from './Section.js'
import Popup from './Popup.js'
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




const defaultCardList = new Section({ 
  data: initialCards, 
  renderer: (item) => {
  const card = new Card(item, '.elements-template', handlePreview);
  const cardElement = card.generateCard();
  defaultCardList.addItem(cardElement);
}
}, 
cardsContainer
);


defaultCardList.renderItems();


// function renderCard(data) { 
  // const card = new Card(data, '.elements-template', handlePreview);
//   const cardElement = card.generateCard();
//   return cardElement;
// };

// function createCard(data) {
//   cardsContainer.prepend(renderCard(data));
// }

// initialCards.forEach((data) => {
//   createCard(data);
// });



//обработчик добавления карточки 
const handleSubmit = (event) => { 
  event.preventDefault() 
  createCard({name:placeInput.value, link:linkInput.value}); 
  closePopups(popupPlace); 
  formPlace.reset(); //очистка полей ввода 
} 

function inputName(event) { 
  event.preventDefault() 
  nameInput.value = nameProfile.textContent; 
  jobInput.value = jobProfile.textContent; 
  profileValidator.clearError();
  openPopups(popupProfile); 
} 

//Функция заполнения попапа превью фото 
function handlePreview(link, name) {
  popupImage.src = link; 
  popupImage.alt = name; 
  popupDescription.textContent = name; 
  openPopups(popupPhoto); 
  // popupPhoto.open();
} 

//Функция открытия попапа добавления карточки
function openCardPopup() {
  cardValidator.clearError();
  formPlace.reset(); 
  openPopups(popupPlace);
  // popupPlace.open();
}


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
function formSubmitHandler (evt) { 
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;  
  jobProfile.textContent = jobInput.value; 
  closePopups(popupProfile);
  // popupProfile.close();
} 

//Закрытие по клику на overlay 
popups.forEach((popup) => { 
  popup.addEventListener('mousedown', (evt) => { 
      overlayHandler(evt, popup)}); 
}) 

//функция отслеживающая нажатие на оверлей и кнопку закрытия 
function overlayHandler(evt, popup) { 
  if (evt.target.classList.contains('popup_opened')) { 
    closePopups(popup);
  } else if (evt.target.classList.contains('popup__close-btn')) { 
    closePopups(popup);
  } 
} 

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
buttonEdit.addEventListener('click', inputName); 
buttonCard.addEventListener('click', openCardPopup);  
formProfile.addEventListener('submit', formSubmitHandler); 
formPlace.addEventListener('submit', handleSubmit); 
