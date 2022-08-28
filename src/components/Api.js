class Api {
    constructor(baseUrl) {
      this._baseUrl = baseUrl;
    }

    async getInintialCards() {
        const res = await fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: 'ccf50a2a-0bfe-45bb-ba00-99b5825eb2e5'
            }
        });
        if (res.ok) {
            return res.json();
        }
        return await Promise.reject(`Ошибка: ${res.status}`);
      } 

}
    // getInitialCards() {
    //   // ...
    // }

    
  
    // другие методы работы с API
  
  

const api = new Api({
baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
headers: {
    authorization: 'ccf50a2a-0bfe-45bb-ba00-99b5825eb2e5',
    'Content-Type': 'application/json'
}
});
