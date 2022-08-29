export default class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }


    async getUserData() {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'GET',
          headers: this._headers
        })
          .then(res => this._check(res))
      }

    async  getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          method: 'GET',
          headers: this._headers
        })
          .then(res => this._check(res))
      }

    // async getUserData() {
    //     try {
    //     const res = await fetch('https://mesto.nomoreparties.co/v1/cohort-49/users/me', {
    //         method: 'GET',
    //         headers: this._headers
    //     });
    
    //     const data = await res.json();
    //     userInput.setUserInfo(data.name, data.about, data.avatar);
    
    //     } catch(e) {
    //     alert('Не удалось загрузить данные профиля');
    //     }
    // }

    // async getInintialCards() {
    //     const res = await fetch(`${this._baseUrl}/cards`, {
    //         headers: {
    //             authorization: 'ccf50a2a-0bfe-45bb-ba00-99b5825eb2e5'
    //         }
    //     });
    //     if (res.ok) {
    //         return res.json();
    //     }
    //     return await Promise.reject(`Ошибка: ${res.status}`);
    //   } 
    
    // async patchUserData() {
    //     try {
    //     const resPatch = await fetch('https://mesto.nomoreparties.co/v1/cohort-49/users/me', {
    //         method: 'PATCH',
    //         headers: {
    //         authorization: 'ccf50a2a-0bfe-45bb-ba00-99b5825eb2e5',
    //         'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //         name: 'Жак Ив Кусто',
    //         about: 'Ученый, исследователь',
    //         // avatar: 'https://imageup.ru/img267/4010540/heman.jpg'
    //         })
    //     });
    //     const item = await resPatch.json();
    //     console.log(item);
    
    //     } catch(e) {
    //     alert('Не удалось отредактировать данные профиля');
    //     }
    // }
    
    // async addCards() {
    //     try {
    
    //     const resCard = await fetch('https://mesto.nomoreparties.co/v1/cohort-49/cards', {
    //         method: 'GET',
    //         headers: {
    //         authorization: 'ccf50a2a-0bfe-45bb-ba00-99b5825eb2e5'
    //         }
    //     });
    //     const cardItem = await resCard.json();
    //     console.log(cardItem);
    
        
    
    //     } catch(e) {
    //     alert('Не удалось загрузить карточки');
    //     }
    // }

    _check(res) {
        if (res.ok) {
          return res.json();
        }
    
        return Promise.reject(res);
      }
  
}  


