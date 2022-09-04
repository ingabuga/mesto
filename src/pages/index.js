import './index.css';

import Card from '../components/Card.js';
import MyCard from '../components/MyCard.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
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
  renderer: (item) => {
  const cardElement = renderCard(item);
  defaultCardList.addItem(cardElement);
  }
}, 
'.elements__element'
);


//Изменение счетчика лайков
function toggleLike(card, cardId, isLiked) {
  if (isLiked) {
    api.removeLike(cardId)
      .then(res => {
        card.toggleLike(false);
        card.countLikes(res.likes);
      })
      .catch((err) => {(console.log(err))});
  } else {
    api.addLike(cardId)
      .then(res => {
        card.toggleLike(true);
        card.countLikes(res.likes);
      })
      .catch((err) => {(console.log(err))});
  }
}


function renderCard(data) {

  const isLiked = (data.likes.find(element => element._id === userId))
    ? true
    : false;

  const card = (data.owner._id === userId)
    ? new MyCard({data, 
      handleCardClick: () => {
      popupPreview.open(data.name, data.link);
      }}, 
      '.elements-template', 
      deleteCard, 
      toggleLike)

    : new Card({data, 
      handleCardClick: () => {
      popupPreview.open(data.name, data.link);
      }}, 
      '.elements-template-alien', 
      toggleLike);

  const addCard = card.generateCard();
  card.toggleLike(isLiked);
  return addCard;
}

//попап добавления новой карточки
const popupNewCard = new PopupWithForm(
  {
    popupSelector: '.popup_place', 
    submitForm: (data) => {
      popupNewCard.displayLoading(true);
      api.addNewCard(data.name, data.link)
      .then(res => {
      const newCard = renderCard(res);
      defaultCardList.addItem(newCard);
      popupNewCard.close();
      })
      .catch((err) => {(console.log(err))})
      .finally(() => popupNewCard.displayLoading(false));
    }
  }
);






// Обновление информации пользователя
function patchUserData(data) {
  userInput.setUserInfo(data.name, data.about);
}


//попап редактирования профиля
const profilePopup = new PopupWithForm({ 
  popupSelector: '.popup_profile',
  submitForm: (data) => {
    profilePopup.displayLoading(true);
  api.patchUserData(data.nameProfile, data.jobProfile)
  .then(res => {
    patchUserData(res);
    profilePopup.close();
  })
  .catch((err) => {(console.log(err))})
  .finally(() => profilePopup.displayLoading(false));
  }
});

// https://imageup.ru/img267/4010540/heman.jpg

//Попап редактирования аватара
const popupWithAvatar = new PopupWithForm(
  {
    popupSelector: '.popup_avatar',
    submitForm: (data) => {
      popupWithAvatar.displayLoading(true);
      api.patchAvatar(data.link)
        .then(res => {
          patchUserAvatar(res);
          popupWithAvatar.close();
        })
        .catch((err) => {(console.log(err))})
        .finally(() => popupWithAvatar.displayLoading(false));
    }
  }
);

// Попап удаления карточки
const popupWithConfirmation = new PopupWithConfirmation(
  {
    popupSelector: '.popup_delete',
<<<<<<< HEAD
    submitForm: (cardId, card) => {
      api.removeCard(cardId)
        .then(() => { 
          card.handleRemoveCard();
          popupWithConfirmation.close();
        })
        .catch(err => showError(err));
=======
    submitForm: (id, card) => {
      api.removeCard(id)
      .then(() => {
        card.handleCardDelete();
        popupWithConfirmation.close();
      })
      .catch((err) => {(console.log(err))});
>>>>>>> feature/remove
    }
  }
);




//колбэк открытия попапа удаления карточки
function deleteCard(cardId, card) {
  popupWithConfirmation.open(cardId, card);
}

// Обновление аватара 
function patchUserAvatar(data) {
  userInput.setUserAvatar(data.avatar);
}





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
      userId = userData._id;
      defaultCardList.renderItems(defaultCards.reverse());
    })
    .catch((err) => {(console.log(err))});
}




//заполнение попапа профиля пользователя
function openProfile() {
  const profileData = userInput.getUserInfo();
  nameInput.value = profileData.name; 
  jobInput.value = profileData.job; 
  profilePopup.open();
  profileValidator.resetValidation();
}


//слушатели попапов
popupWithConfirmation.setEventListener();

popupWithAvatar.setEventListener();

profilePopup.setEventListener();

//превью карточки
popupPreview.setEventListener();

//слушатель попапа нового места
popupNewCard.setEventListener();


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