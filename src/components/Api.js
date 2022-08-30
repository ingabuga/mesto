export default class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }


    getUserData() {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'GET',
          headers: this._headers
        })
          .then(res => this._check(res))
      }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          method: 'GET',
          headers: this._headers
        })
          .then(res => this._check(res))
      }


    patchUserData(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            name: name,
            about: about
          })
        })
          .then(res => this._check(res))
          
      }

    patchAvatar(link) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            avatar: link
          })
        })
          .then(res => this._check(res))
      }


    addNewCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            name: name,
            link: link
          })
        })
          .then(res => this._checkFetch(res))
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

    

    _check(res) {
        if (res.ok) {
          return res.json();
        }
    
        return Promise.reject(res);
      }
  
}  


