import {Card} from './card.js';
//Кнопки 
const buttonEdit = document.querySelector('.profile__edit-button'); //выбираем кнопку редактирования профиля 
const buttonClose = document.querySelectorAll('.popup__close-btn'); // выбираем кнопку закрытия попапа 
const buttonCard = document.querySelector('.profile__add-button'); //выбираем кнопку добавления карточки 
const buttonLike = document.querySelectorAll('elements__like');

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

const elementsList = document.querySelector('.elements__element'); 
const elementsTemplate = document.querySelector('.elements-template').content;

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


/*
const renderItems = () => { 
  initialCards.forEach(renderCard); 
} 

 
const createCard = (element) => { 
  const placeElement = elementsTemplate.cloneNode(true);
  const elementsImage = placeElement.querySelector('.elements__image');//кнопка изображения
  placeElement.querySelector('.elements__title').textContent = element.name;
  elementsImage.src = element.link;
  elementsImage.alt = element.name;

  //Слушатель кнопок 
  const buttonDelete = placeElement.querySelector('.elements__trash');//кнопка удаления карточки 
	buttonDelete.addEventListener('click', handleDelete); 

  const like = placeElement.querySelector('.elements__like');//кнопка лайка 
  like.addEventListener('click', handleLike); 

  elementsImage.addEventListener('click', () => handlePreview(elementsImage.src, elementsImage.alt));
  return placeElement; 
} 
*/
/*
class Card {
  constructor(data, templateSelector) {
      this._title = data.name;
      this._description = data.name;
      this._image = data.link;
      this._templateSelector = templateSelector;
  }

 _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
    
    // вернём DOM-элемент карточки
    return cardElement;
  } 

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.elements__image').src = `${this._image}`;
    this._element.querySelector('.elements__title').textContent = this._title; 
    this._element.querySelector('.elements__image').alt = this._title;
    return this._element;
  }


  _setEventListeners() {
    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._openPopup()// открываем попап
    });
    
    this._element.querySelector('.elements__like').addEventListener('click', () => {
      this._handleLike()// лайкаем карточку
    });

    this._element.querySelector('.elements__trash').addEventListener('click', () => {
      this._handleDelete()// удаляем карточку
    });
  }

  _handleLike() {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }

  _handleDelete() {
    this._element.remove(); 
  }
/*

  _openPopup() {
    popupImage.src = this._image; 
    popupImage.alt = this._title; 
    popupDescription.textContent = this._title;
    openPopups(popupPhoto); 
  }

}
*/

function renderCard(data) { 
  const card = new Card(data, '.elements-template');
  const cardElement = card.generateCard();
  elementsList.prepend(cardElement);
};

initialCards.forEach((data) => {
  renderCard(data);
});




//обработчик добавления карточки 
const handleSubmit = (event) => { 
  event.preventDefault() 
  renderCard({name:placeInput.value, link:linkInput.value}); 
  formPlace.reset(); //очистка полей ввода 
  const submitButton = document.querySelector('.popup__save-button');
  disableSubmitButton(submitButton, 'popup__save-button_inactive');
  deleteListenerClose(popupPlace); 
} 

function inputName(event) { 
  event.preventDefault() 
  nameInput.value = nameProfile.textContent; 
  jobInput.value = jobProfile.textContent; 
  const submitButton = document.querySelector('.popup__save-button');
  disableSubmitButton(submitButton, 'popup__save-button_inactive');
  openPopups(popupProfile); 
} 

//Функция открытия попапа 
function openPopups(popup) { 
  popup.classList.add('popup_opened'); 
  document.addEventListener('keydown', escapeHandler); 
} 

//функция закрытия попапа 
function closePopups(popup) { 
  popup.classList.remove('popup_opened');
} 

function resetPopup(popup) {
  if (!popup.classList.contains('popup_photo')) {
      const form = popup.querySelector('.popup__form');
      const inputs = Array.from(form.querySelectorAll('.popup__text'));
      const submitButton = popup.querySelector('.popup__save-button');
  
      inputs.forEach((currentInput) => {
        hideInputError(form, currentInput, {inputErrorClass: 'error_active', errorClass: 'popup__text_input_error'});
        disableSubmitButton(submitButton, 'popup__save-button_inactive');
      });
      form.reset();
      closePopups(popup);
  }
  closePopups(popup);
}

function deleteListenerClose(popup) {
  document.removeEventListener('keydown', escapeHandler);
  resetPopup(popup);
}


//Обработчик формы 
function formSubmitHandler (evt) { 
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;  
  jobProfile.textContent = jobInput.value; 
  deleteListenerClose(popupProfile) 
} 

//Закртыие по клику на overlay 
popups.forEach((popup) => { 
  popup.addEventListener('mousedown', (evt) => { 
      overlayHandler(evt, popup)}); 
}) 

//функция отслеживающая нажатие на оверлей и кнопку закрытия 
function overlayHandler(evt, popup) { 
  if (evt.target.classList.contains('popup_opened')) { 
    deleteListenerClose(popup); 
  } else if (evt.target.classList.contains('popup__close-btn')) { 
    deleteListenerClose(popup); 
  } 
} 

//функция закрытия попапа по нажатию Escape 
function escapeHandler(evt) { 
  if (evt.key === 'Escape') { 
      const openedPopup = document.querySelector('.popup_opened'); 
      deleteListenerClose(openedPopup); 
  } 
} 

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка» 
buttonEdit.addEventListener('click', inputName); 
buttonCard.addEventListener('click', () => openPopups(popupPlace)); 
formProfile.addEventListener('submit', formSubmitHandler); 
formPlace.addEventListener('submit', handleSubmit); 
