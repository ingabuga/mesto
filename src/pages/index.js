import './index.css';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

import {
  buttonEdit,
  buttonCard,
  popupProfile,
  popupPlace,
  nameInput,
  jobInput,
  initialCards,
  validationData
} from '../utils/constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  headers: {
      authorization: 'ccf50a2a-0bfe-45bb-ba00-99b5825eb2e5',
      'Content-Type': 'application/json'
  }
});


const popupPreview = new PopupWithImage('.popup_photo');

//функция создания карточки из списка
const defaultCardList = new Section({ 
  data: initialCards, 
  // data: existingCards,
  renderer: (item) => {
  const cardElement = renderCard(item);
  defaultCardList.addItem(cardElement);
  }
}, 
'.elements__element'
);






const renderCard = (data) => {
  const card = new Card({data,
    handleCardClick: () => {
      popupPreview.open(data.name, data.link);
    }
  },
    '.elements-template');
  return card.generateCard();
}

//добавление новой карточки
const popupNewCard = new PopupWithForm({
  popupSelector: '.popup_place', 
  submitForm: (item) => {
  const newCard = renderCard(item);
  defaultCardList.addItem(newCard);
  popupNewCard.close();
  }
});

//попап редактирования профиля
const profilePopup = new PopupWithForm({ 
  popupSelector: '.popup_profile',
  submitForm: (data) => {
  // userInput.setUserInfo(data);
  api.patchUserData(data.nameProfile, data.jobProfile)
  // .then(res => {
  //   patchUserData(res);
  //   profilePopup.close();
  // })
  .then(res => {
    patchUserData(res);
    profilePopup.close();
  })
  .catch(console.log('Что-то пошло не так'))
  profilePopup.close();
  }
});



//отрисовка карточек из списка
defaultCardList.renderItems();


popupNewCard.setEventListener();

//Редактирование информации класса пользователя
const userInput = new UserInfo({
  nameSelector: '.profile__title', 
  jobSelector: '.profile__title-job',
  avatarSelector: '.profile__avatar'
});



// Рендеринг страницы данными с сервера
function renderPage() {
  Promise.all([
    api.getUserData(),
    api.getInitialCards()
  ])
    .then(([userData, existingCards]) => {
      userInput.setUserInfo(userData.name, userData.about);
      userInput.setUserAvatar(userData.avatar);
      defaultCardList.renderItems(existingCards.reverse());
      console.log(existingCards);
      
    })
    .catch(console.log('Не удалось'));
}





//заполнение попапа профиля пользователя
function openProfile() {
  const profileData = userInput.getUserInfo();
  nameInput.value = profileData.name; 
  jobInput.value = profileData.job; 
  profilePopup.open();
  profileValidator.resetValidation();
}


// Обновление данных пользователя
function patchUserData(data) {
  userInput.setUserInfo(data.name, data.about);
}


// let userId;


profilePopup.setEventListener();


//слушатели кнопок

//Кнопка редактирования профиля
buttonEdit.addEventListener('click', () => {
  openProfile();
});

//кнопка добавления новых мест
buttonCard.addEventListener('click', () => {
  cardValidator.resetValidation();
  popupNewCard.open();
});




//превью карточки
popupPreview.setEventListener();



//Подключаем валидатор
const cardValidator = new FormValidator(validationData, popupPlace); //валидатор формы нового места
cardValidator.enableValidation();

const profileValidator = new FormValidator(validationData, popupProfile);//валидатор формы профиля
profileValidator.enableValidation();





renderPage();