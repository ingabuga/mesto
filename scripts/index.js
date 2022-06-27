//Кнопки
const editBtn = document.querySelector('.profile__edit-button'); //выбираем кнопку редактирования профиля
const closeBtn = document.querySelectorAll('.popup__close-btn'); // выбираем кнопку закрытия попапа
const addBtn = document.querySelector('.profile__add-button') //выбираем кнопку добавления карточки
//const imageBtn = document.querySelectorAll('.elements__image'); //выбираем изображение в карточке

//Попап
const popups = document.querySelectorAll('.popup'); //массив попапов

//Попап редактирования профиля
const nameInput = popups[0].querySelector('.popup__text_input_name');//выбираем имя в попапе
const jobInput = popups[0].querySelector('.popup__text_input_job'); //выбираем должность в попапе

//Попап добавления карточки
const placeInput = popups[1].querySelector('.popup__text_input_name');//выбираем название места
const linkInput = popups[1].querySelector('.popup__text_input_job');//выбираем ссылку на фото

//Попап превью фото карточки
const popupImage = popups[2].querySelector('.popup__image');//выбираем изображение в попапе надо ли?
const popupDescription = popups[2].querySelector('.popup__description');//выбираем подпись в попапе надо ли?

//Поля формы реадктирования профиля
const formElement = document.querySelectorAll('.popup__form'); //выбираем попап-форму
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

const renderItems = () => {
  initialCards.forEach(renderItem);
}

const renderItem = (element) => {
  const placeElement = elementsTemplate.cloneNode(true);
  placeElement.querySelector('.elements__title').textContent = element.name;
  placeElement.querySelector('.elements__image').src = element.link;
  setEventListeners(placeElement);
  elementsList.append(placeElement);
}



const renderCard = (text, link) => {
  const htmlElement = elementsTemplate.cloneNode(true);
  htmlElement.querySelector('.elements__title').textContent = text;
  htmlElement.querySelector('.elements__image').src = link;
  setEventListeners(htmlElement);
  elementsList.prepend(htmlElement);
  closePopups(1);
}


function inputName(event) {
  event.preventDefault()
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopups(0);
}

function openPopups(index) {
  popups[index].classList.add('popup_opened');
}

//функция закрытия попапа
function closePopups(index) {
  popups[index].classList.remove('popup_opened');
}



//Обработчик формы
function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value; 
    jobProfile.textContent = jobInput.value;
    closePopups(0);
}

//обработчик добавления карточки
const handleSubmit = (evt) => {
  evt.preventDefault()
  renderCard(placeInput.value, linkInput.value);
  placeInput.value = '';
  linkInput.value = '';
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
  openPopups(2);
}

//Слушатель кнопки удаления, кнопки лайка, превью фото
function setEventListeners(htmlElement) {
	const deleteButton = htmlElement.querySelector('.elements__trash');
	deleteButton.addEventListener('click', handleDelete);
  
  const like = htmlElement.querySelector('.elements__like');
  like.addEventListener('click', handleLike);
  
  const imageBtn = htmlElement.querySelector('.elements__image');
  imageBtn.addEventListener('click', handlePreview);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editBtn.addEventListener('click', inputName);
closeBtn[0].addEventListener('click', () => closePopups(0));
addBtn.addEventListener('click', () => openPopups(1));
closeBtn[1].addEventListener('click', () => closePopups(1));
formElement[0].addEventListener('submit', formSubmitHandler);
formElement[1].addEventListener('submit', handleSubmit);
closeBtn[2].addEventListener('click', () => closePopups(2));





renderItems()

