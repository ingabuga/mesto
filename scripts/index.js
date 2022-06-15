const editBtn = document.querySelector('.profile__edit-button'); //выбираем кнопку редактирования профиля
const popup = document.querySelector('.popup'); //выбираем попап
const closeBtn = document.querySelector('.popup__close-btn'); // выбираем кнопку закррытия попапа
let nameInput = popup.querySelector('.popup__text_input_name');//выбираем имя в попапе
let jobInput = popup.querySelector('.popup__text_input_job'); //выбираем должность в попапе
let formElement = document.querySelector('.popup__form'); //выбираем попап-форму
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__title-job');

//функция открытия попапа
function openPopup(event) {
    event.preventDefault()
    popup.classList.add('popup_opened_true');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

//функция закрытия попапа
function closePopup(event) {
    popup.classList.remove('popup_opened_true');
}


//Обработчик формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                    // Так мы можем определить свою логику отправки.
                                    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent ()
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