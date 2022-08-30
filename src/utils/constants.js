//Кнопки 
export const buttonEdit = document.querySelector('.profile__edit-button'); //выбираем кнопку редактирования профиля 
export const buttonAvatar = document.querySelector('.profile__avatar-hover'); //выбираем кнопку редактирования аватара
// const buttonClose = document.querySelectorAll('.popup__close-btn'); // выбираем кнопку закрытия попапа 
export const buttonCard = document.querySelector('.profile__add-button'); //выбираем кнопку добавления карточки 
// const buttonLike = document.querySelectorAll('elements__like');

//Попап 
export const popupProfile = document.querySelector('.popup_profile'); //попап профиля  
export const popupPlace = document.querySelector('.popup_place'); //попап нового места 
export const popupAvatar = document.querySelector('.popup_avatar'); //попап смены аватарки
// export const popupPhoto = document.querySelector('.popup_photo'); //попап превью фотографии  
// export const popups = document.querySelectorAll('.popup'); //все попапы 

//Попап добавления карточки 
// export const placeInput = popupPlace.querySelector('.popup__text_input_name');//выбираем название места 
// export const linkInput = popupPlace.querySelector('.popup__text_input_job');//выбираем ссылку на фото 

//Попап превью фото карточки 
// export const popupImage = popupPhoto.querySelector('.popup__image');//выбираем изображение в попапе  
// export const popupDescription = popupPhoto.querySelector('.popup__description');//выбираем подпись в попапе  


//Формы редактирования данных 
// export const formProfile = document.querySelector('.popup__form_profile'); //выбираем форму данных профиля 
export const formPlace = document.querySelector('.popup__form_place'); // выбираем форму данных нового места 

//Поля данных в форме профиля 
export const nameInput = popupProfile.querySelector('.popup__text_input_name');//выбираем имя в попапе 
export const jobInput = popupProfile.querySelector('.popup__text_input_job'); //выбираем должность в попапе 

// export const nameProfile = document.querySelector('.profile__title'); //выбираем Имя в профиле 
// export const jobProfile = document.querySelector('.profile__title-job');//выбираем Должность в профиле 

// export const cardsContainer = document.querySelector('.elements__element'); 
// const elementsTemplate = document.querySelector('.elements-template').content;

export const initialCards = [
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

export const validationData = {
  formSelector: '.popup__form', 
  inputSelector: '.popup__text', 
  submitButtonSelector: '.popup__save-button', 
  inactiveButtonClass: 'popup__save-button_inactive', 
  inputErrorClass: 'error_active', 
  errorClass: 'popup__text_input_error' 
};