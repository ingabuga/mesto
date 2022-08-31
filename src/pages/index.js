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
  buttonAvatar,
  buttonCard,
  popupProfile,
  popupPlace,
  popupAvatar,
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

let userId = null;


const popupPreview = new PopupWithImage('.popup_photo');

//функция создания карточки из списка
const defaultCardList = new Section({ 
  // data: initialCards, 
  // data: defaultCards,
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

//попап добавления новой карточки
const popupNewCard = new PopupWithForm({
  popupSelector: '.popup_place', 
  submitForm: (item) => {
  const newCard = renderCard(item);
  defaultCardList.addItem(newCard);
  popupNewCard.close();
  }
});

// Обновление информации пользователя
function patchUserData(data) {
  userInput.setUserInfo(data.name, data.about);
}


//попап редактирования профиля
const profilePopup = new PopupWithForm({ 
  popupSelector: '.popup_profile',
  submitForm: (data) => {
  api.patchUserData(data.nameProfile, data.jobProfile)
  .then(res => {
    patchUserData(res);
    profilePopup.close();
  })
  .catch(console.log('Что-то пошло не так'))
  profilePopup.close();
  }
});


//Попап редактирования аватара
const popupWithAvatar = new PopupWithForm(
  {
    popupSelector: '.popup_avatar',
    submitForm: (data) => {
      api.patchAvatar(data.link)
        .then(res => {
          patchUserAvatar(res);
          popupWithAvatar.close();
        })
        .catch(console.log('Не удалось поправить аватар'))
        popupWithAvatar.close();
        // .finally(console.log('Все не так когда твоя девушка больна'))
    }
  }
);

// Обновление аватара 
function patchUserAvatar(data) {
  userInput.setUserAvatar(data.avatar);
}

//отрисовка карточек из списка
// defaultCardList.renderItems();

//слушатель попапа нового места
popupNewCard.setEventListener();

//Редактирование информации класса пользователя
const userInput = new UserInfo({
  nameSelector: '.profile__title', 
  jobSelector: '.profile__title-job',
  avatarSelector: '.profile__avatar'
});




function renderPage() {
  Promise.all([
    api.getUserData(),
    api.getInitialCards()
  ])
    .then(([userData, defaultCards]) => {
      patchUserData(userData);
      patchUserAvatar(userData);
      // userId = userData._id;
      defaultCardList.renderItems(defaultCards);
    })
    .catch(console.log('список карточек нихт'));
}




//заполнение попапа профиля пользователя
function openProfile() {
  const profileData = userInput.getUserInfo();
  nameInput.value = profileData.name; 
  jobInput.value = profileData.job; 
  profilePopup.open();
  profileValidator.resetValidation();
}



popupWithAvatar.setEventListener();

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

//Кнопка редактирования аватара
buttonAvatar.addEventListener('click', () => {
  avatarValidator.resetValidation();
  popupWithAvatar.open();
});


//превью карточки
popupPreview.setEventListener();



//Подключаем валидатор
//валидатор добавления нового места
const cardValidator = new FormValidator(validationData, popupPlace); //валидатор формы нового места
cardValidator.enableValidation();

//валидатор смены данных пользователя
const profileValidator = new FormValidator(validationData, popupProfile);//валидатор формы профиля
profileValidator.enableValidation();

//валидатор попапа смены ававтарки
const avatarValidator = new FormValidator(validationData, popupAvatar); //валидатор формы добавления аватара
avatarValidator.enableValidation();



renderPage();