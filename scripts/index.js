const editBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close-btn');

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);

function openPopup(event) {
    event.preventDefault()
    popup.classList.add('popup__opened');
}

function closePopup(event) {
    popup.classList.remove('popup__opened');
}


let formElement = document.querySelector('.popup__card');
// Находим поля формы в DOM
let nameInput = popup.querySelector('.popup__text-name');
let jobInput = popup.querySelector('.popup__text-job');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                    // Так мы можем определить свою логику отправки.
                                    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInput = popup.querySelector('.popup__text-name');
    let jobInput = popup.querySelector('.popup__text-job');

    // Выберите элементы, куда должны быть вставлены значения полей
    let name = document.querySelector('.profile__title');
    let job = document.querySelector('.profile__title-job');
    
    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput.value; 
    job.textContent = jobInput.value;
    // Закрываем попап после добавления новых данных
    popup.classList.remove('popup__opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);