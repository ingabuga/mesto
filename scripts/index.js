//Кнопки
const editBtn = document.querySelector('.profile__edit-button'); //выбираем кнопку редактирования профиля
const closeBtn = document.querySelectorAll('.popup__close-btn'); // выбираем кнопку закрытия попапа
const addBtn = document.querySelector('.profile__add-button') //выбираем кнопку добавления карточки

//Попап
const popup = document.querySelector('.popup_profile'); //выбираем попап
const popupCard = document.querySelector('.popup_card'); //выбираем попап карточки

let nameInput = popup.querySelector('.popup__text_input_name');//выбираем имя в попапе
let jobInput = popup.querySelector('.popup__text_input_job'); //выбираем должность в попапе
let formElement = document.querySelector('.popup__form'); //выбираем попап-форму
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__title-job');

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

initialCards.forEach(function (element) {
  const placeElement = elementsTemplate.cloneNode(true);

  placeElement.querySelector('.elements__title').textContent = element.name;
  placeElement.querySelector('.elements__image').src = element.link;

  elementsList.append(placeElement)
})


//функция открытия попапа
function openPopup(event) {
    event.preventDefault()
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

//функция открытия попапа добавления карточки
function openPopupCard(event) {
  event.preventDefault()
  popupCard.classList.add('popup_opened');
}

//функция закрытия попапа
function closePopup(event) {
    popup.classList.remove('popup_opened');
}

function closePopupCard(event) {
  popupCard.classList.remove('popup_opened');
}




//Обработчик формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                    // Так мы можем определить свою логику отправки.
                                    // О том, как это делать, расскажем позже.
    nameProfile.textContent = nameInput.value; 
    jobProfile.textContent = jobInput.value;
    // Закрываем попап после добавления новых данных
    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editBtn.addEventListener('click', openPopup);
closeBtn[0].addEventListener('click', closePopup);
addBtn.addEventListener('click', openPopupCard);
closeBtn[1].addEventListener('click', closePopupCard);
formElement.addEventListener('submit', formSubmitHandler);