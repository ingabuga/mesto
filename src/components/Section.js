export default class Section {
    constructor({ renderer }, cardsContainer) {
      // this._renderedItems = data;
      this._renderer = renderer;
      this._container = document.querySelector(cardsContainer);
    }
  
    addItem(element) {
      this._container.prepend(element);
    }
  
  
    renderItems(cards, userId) {
      cards.forEach(item => {
        this._renderer(item, userId);
      });
    }
  }
  