import './index.css';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

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


const popupPreview = new PopupWithImage('.popup_photo');

//функция создания карточки из списка
const defaultCardList = new Section({ 
  data: initialCards, 
  // data: cardItem,
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

//отрисовка карточек из списка
defaultCardList.renderItems();


popupNewCard.setEventListener();

//Редактирование информации класса пользователя
const userInput = new UserInfo({
  nameSelector: '.profile__title', 
  jobSelector: '.profile__title-job'
});

//попап редактирования профиля
const profilePopup = new PopupWithForm({ 
  popupSelector: '.popup_profile',
  submitForm: (data) => {
  userInput.setUserInfo(data);
  profilePopup.close();
  }
});
profilePopup.setEventListener();

//заполнение попапа профиля пользователя
function openProfile() {
  const profileData = userInput.getUserInfo();
  nameInput.value = profileData.name; 
  jobInput.value = profileData.job; 
  profilePopup.open();
  profileValidator.resetValidation();
}


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


async function getUserData() {
  try {
    const res = await fetch('https://mesto.nomoreparties.co/v1/cohort-49/users/me', {
      method: 'GET',
      headers: {
        authorization: 'ccf50a2a-0bfe-45bb-ba00-99b5825eb2e5'
      }
    });

    const data = await res.json();
    userInput.setUserInfo(data.name, data.about, data.avatar);

  } catch(e) {
    alert('Не удалось загрузить данные профиля');
  }
}

async function patchUserData() {
  try {
    const resPatch = await fetch('https://mesto.nomoreparties.co/v1/cohort-49/users/me', {
      method: 'PATCH',
      headers: {
        authorization: 'ccf50a2a-0bfe-45bb-ba00-99b5825eb2e5',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Жак Ив Кусто',
        about: 'Ученый, исследователь',
        // avatar: 'https://imageup.ru/img267/4010540/heman.jpg'
      })
    });
    const item = await resPatch.json();
    console.log(item);

  } catch(e) {
    alert('Не удалось отредактировать данные профиля');
  }
}

async function addCards() {
  try {

    const resCard = await fetch('https://mesto.nomoreparties.co/v1/cohort-49/cards', {
      method: 'GET',
      headers: {
        authorization: 'ccf50a2a-0bfe-45bb-ba00-99b5825eb2e5'
      }
    });
    const cardItem = await resCard.json();
    console.log(cardItem);

    

  } catch(e) {
    alert('Не удалось загрузить карточки');
  }
}




getUserData();
patchUserData();
addCards();