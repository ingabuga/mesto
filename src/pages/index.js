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
  popupPhoto,
  // popups,
  // placeInput,
  // linkInput,
  // popupImage,
  // popupDescription,
  // formProfile,
  formPlace,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
  cardsContainer,
  initialCards,
  validationData
} from '../utils/constants.js';


const popupPreview = new PopupWithImage(popupPhoto);

//функция создания карточки из списка
const defaultCardList = new Section({ 
  data: initialCards, 
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
const popupNewCard = new PopupWithForm(popupPlace, 
  {submitForm: (item) => {
  const newCard = renderCard(item);
  cardsContainer.prepend(newCard);
  popupNewCard.close();
  }
});
popupNewCard.setEventListener();

//Редактирование информации класса пользователя
const userInput = new UserInfo({nameInput: '.profile__title', jobInput: '.profile__title-job'
});

//попап редактирования профиля
const profilePopup = new PopupWithForm(
  popupProfile, 
  {submitForm: (data) => {
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
  profileValidator.clearError();
}


//слушатели кнопок

//Кнопка редактирования профиля
buttonEdit.addEventListener('click', () => {
  // profilePopup.open();
  profileValidator.toggleButtonState();
  openProfile();
});

//кнопка добавления новых мест
buttonCard.addEventListener('click', () => {
  cardValidator.clearError();
  popupNewCard.open();
  cardValidator.toggleButtonState();
});



//отрисовка карточек из списка
defaultCardList.renderItems();

//превью карточки
popupPreview.setEventListener();



//Подключаем валидатор
const cardValidator = new FormValidator(validationData, popupPlace); //валидатор формы нового места
cardValidator.enableValidation();

const profileValidator = new FormValidator(validationData, popupProfile);//валидатор формы профиля
profileValidator.enableValidation();


