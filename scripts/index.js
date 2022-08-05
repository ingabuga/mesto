import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

//Кнопки 
const buttonEdit = document.querySelector('.profile__edit-button'); //выбираем кнопку редактирования профиля 
// const buttonClose = document.querySelectorAll('.popup__close-btn'); // выбираем кнопку закрытия попапа 
const buttonCard = document.querySelector('.profile__add-button'); //выбираем кнопку добавления карточки 
// const buttonLike = document.querySelectorAll('elements__like');

//Попап 
const popupProfile = document.querySelector('.popup_profile'); //попап профиля  
const popupPlace = document.querySelector('.popup_place'); //попап нового места  
const popupPhoto = document.querySelector('.popup_photo'); //попап превью фотографии  
const popups = document.querySelectorAll('.popup'); //все попапы 

//Попап добавления карточки 
const placeInput = popupPlace.querySelector('.popup__text_input_name');//выбираем название места 
const linkInput = popupPlace.querySelector('.popup__text_input_job');//выбираем ссылку на фото 

//Попап превью фото карточки 
const popupImage = popupPhoto.querySelector('.popup__image');//выбираем изображение в попапе  
const popupDescription = popupPhoto.querySelector('.popup__description');//выбираем подпись в попапе  


//Формы редактирования данных 
const formProfile = document.querySelector('.popup__form_profile'); //выбираем форму данных профиля 
const formPlace = document.querySelector('.popup__form_place'); // выбираем форму данных нового места 

//Поля данных в форме профиля 
const nameInput = popupProfile.querySelector('.popup__text_input_name');//выбираем имя в попапе 
const jobInput = popupProfile.querySelector('.popup__text_input_job'); //выбираем должность в попапе 

const nameProfile = document.querySelector('.profile__title'); //выбираем Имя в профиле 
const jobProfile = document.querySelector('.profile__title-job');//выбираем Должность в профиле 

const cardsContainer = document.querySelector('.elements__element'); 
// const elementsTemplate = document.querySelector('.elements-template').content;

const initialCards = [
  {
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
]; 

const validationData = {
  formSelector: '.popup__form', 
  inputSelector: '.popup__text', 
  submitButtonSelector: '.popup__save-button', 
  inactiveButtonClass: 'popup__save-button_inactive', 
  inputErrorClass: 'error_active', 
  errorClass: 'popup__text_input_error' 
};




function renderCard(data) { 
  const card = new Card(data, '.elements-template', handlePreview);
  const cardElement = card.generateCard();
  return cardElement;
};

function createCard(data) {
  cardsContainer.prepend(renderCard(data));
}

initialCards.forEach((data) => {
  createCard(data);
});



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
} 

//Функция открытия попапа добавления карточки
function openCardPopup() {
  cardValidator.clearError();
  formPlace.reset(); 
  openPopups(popupPlace);
}


//Функция открытия попапа 
function openPopups(popup) { 
  popup.classList.add('popup_opened'); 
  document.addEventListener('keydown', escapeHandler); 
} 

//функция закрытия попапа 
function closePopups(popup) { 
  document.removeEventListener('keydown', escapeHandler);
  popup.classList.remove('popup_opened');
  // cardValidator.clearError();
} 


//Обработчик формы 
function formSubmitHandler (evt) { 
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;  
  jobProfile.textContent = jobInput.value; 
  closePopups(popupProfile);
} 

//Закртыие по клику на overlay 
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
function escapeHandler(evt) { 
  if (evt.key === 'Escape') { 
      const openedPopup = document.querySelector('.popup_opened'); 
      closePopups(openedPopup); 
  } 
} 

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
