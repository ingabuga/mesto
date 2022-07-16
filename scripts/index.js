//Кнопки
const buttonEdit = document.querySelector('.profile__edit-button'); //выбираем кнопку редактирования профиля
const buttonClose = document.querySelectorAll('.popup__close-btn'); // выбираем кнопку закрытия попапа
const buttonCard = document.querySelector('.profile__add-button') //выбираем кнопку добавления карточки

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




const renderItems = () => {
  initialCards.forEach(renderCard);
}

const createCard = (element) => {
  const placeElement = elementsTemplate.cloneNode(true);
  placeElement.querySelector('.elements__title').textContent = element.name;
  placeElement.querySelector('.elements__image').src = element.link;
  
  //Слушатель кнопок
  const buttonDelete = placeElement.querySelector('.elements__trash');//кнопка удаления карточки
	buttonDelete.addEventListener('click', handleDelete);
  
  const like = placeElement.querySelector('.elements__like');//кнопка лайка
  like.addEventListener('click', handleLike);
  
  const buttonImage = placeElement.querySelector('.elements__image');//кнопка изображения
  buttonImage.addEventListener('click', handlePreview);
  return placeElement;
}

function renderCard(item) {
  const card = createCard(item);
  elementsList.prepend(card);
}

//обработчик добавления карточки
const handleSubmit = (event) => {
  event.preventDefault()
  renderCard({name:placeInput.value, link:linkInput.value});
  event.target.reset(); //очистка полей ввода
  closePopups(popupPlace);
}


function inputName(event) {
  event.preventDefault()
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopups(popupProfile);
}

//Функция открытия попапа
function openPopups(popup) {
  popup.classList.add('popup_opened');
  const inputEvent = new Event("input", {bubbles: true}); //проверка фполей формы
    const inputForm = popup.querySelectorAll(".popup__text");
    inputForm.forEach(function (input) {
      input.dispatchEvent(inputEvent);
    });
}

//функция закрытия попапа
function closePopups(popup) {
  popup.classList.remove('popup_opened');
}


//Обработчик формы
function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value; 
  jobProfile.textContent = jobInput.value;
  closePopups(popupProfile)
}


//функция удаления карточки
function handleDelete(evt) {
	evt.target.closest('.elements__item').remove();
}

//Функция лайка карточки
function handleLike(evt) {
	evt.target.classList.toggle('elements__like_active');
}


//Функция заполнения попапа превью фото
function handlePreview(evt) {
  popupImage.src = evt.target.closest('.elements__image').src;
  popupImage.alt = evt.target.closest('.elements__item').querySelector('.elements__title').textContent;
  popupDescription.textContent = evt.target.closest('.elements__item').querySelector('.elements__title').textContent;
  openPopups(popupPhoto);
}


// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
buttonEdit.addEventListener('click', inputName);
buttonCard.addEventListener('click', () => openPopups(popupPlace));
formProfile.addEventListener('submit', formSubmitHandler);
formPlace.addEventListener('submit', handleSubmit);

popupProfile.addEventListener('keydown', escapeHandler); //слушатели нажатия escape
popupPlace.addEventListener('keydown', escapeHandler);
//popupPhoto.addEventListener('keydown', escapeHandler); 


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


renderItems();
