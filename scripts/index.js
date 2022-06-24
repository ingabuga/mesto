const editBtn = document.querySelector('.profile__edit-button'); //выбираем кнопку редактирования профиля
const popup = document.querySelector('.popup'); //выбираем попап
const closeBtn = document.querySelector('.popup__close-btn'); // выбираем кнопку закррытия попапа
let nameInput = popup.querySelector('.popup__text_input_name');//выбираем имя в попапе
let jobInput = popup.querySelector('.popup__text_input_job'); //выбираем должность в попапе
let formElement = document.querySelector('.popup__form'); //выбираем попап-форму
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__title-job');

const elementsElement = document.querySelector('.elements__element'); //выбираем элемент списка карточек
const elementsTemplate = document.querySelector('.elements-template').content; //выбираем шаблон для вставки карточки

const directorsList = document.querySelector('.directors');
const directorTemplate = document.querySelector('.director-template').content;


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

//цикл добавления карточек 
/*initialCards.forEach(function (element) {
  const elementsCards = elementsTemplate.cloneNode(true);

  elementsCards.querySelector('.elements__image').src = element.link;
  elementsCards.querySelector('.elements__title').textContent = element.name;
  elementsCards.querySelector('.directors__films').href = element.films;

  directorsList.append(elementsCards)
})*/

initialCards.forEach(function (element) {
  const directorElement = directorTemplate.cloneNode(true);

  directorElement.querySelector('.directors__name').textContent = element.name;
  directorElement.querySelector('.directors__description').textContent = element.link;

  directorsList.append(directorElement)
})

//функция открытия попапа
function openPopup(event) {
    event.preventDefault()
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

//функция закрытия попапа
function closePopup(event) {
    popup.classList.remove('popup_opened');
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
closeBtn.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);