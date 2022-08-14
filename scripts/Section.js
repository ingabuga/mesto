export default class Section {
    constructor({ data, renderer }, cardsContainer) {
      this._renderedItems = data;
      this._renderer = renderer;
      this._container = document.querySelector(cardsContainer);
    }
  
    addItem(element) {
      this._container.prepend(element);
    }
  
  
    renderItems() {
      this._renderedItems.forEach(item => {
        this._renderer(item);
      });
    }
  }
  