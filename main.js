(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.data,o=e.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=r.name,this._image=r.link,this._templateSelector=n,this._handleCardClick=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".elements__image"),this._likeButton=this._element.querySelector(".elements__like"),this._cardTitle=this._element.querySelector(".elements__title"),this._cardImage.src="".concat(this._image),this._cardTitle.textContent=this._title,this._cardImage.alt=this._title,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._image,e._title)})),this._likeButton.addEventListener("click",(function(){e._handleLike()})),this._element.querySelector(".elements__trash").addEventListener("click",(function(){e._handleDelete()}))}},{key:"_handleLike",value:function(){this._likeButton.classList.toggle("elements__like_active")}},{key:"_handleDelete",value:function(){this._element.remove(),this._element=null}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formTemplate=n}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._formTemplate.querySelector("#".concat(e.id,"-error"));e.classList.add(this._errorClass),n.textContent=t,n.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._formTemplate.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._errorClass),t.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"enableValidation",value:function(){this._inputList=Array.from(this._formTemplate.querySelectorAll(this._inputSelector)),this._buttonElement=this._formTemplate.querySelector(this._submitButtonSelector),this.toggleButtonState(),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!0)}},{key:"resetValidation",value:function(){var e=this;this._disableSubmitButton(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handlerEscClose=this._handlerEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handlerEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handlerEscClose)}},{key:"_handlerEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListener",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-btn"))&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function c(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(r){var o=d(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return c(this,e)});function i(e){var t,n,r,a,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),u=function(e,r){f((t=p(n),d(i.prototype)),"open",t).call(t),n._name.textContent=e,n._image.alt=e,n._image.src=r},(a="open")in(r=p(n=o.call(this,e)))?Object.defineProperty(r,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):r.open=u,n._name=n._popup.querySelector(".popup__description"),n._image=n._popup.querySelector(".popup__image"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(u);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t,n=e.popupSelector,r=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._submitForm=r,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__text"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListener",value:function(){var e=this;v(S(a.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"close",value:function(){v(S(a.prototype),"close",this).call(this),this._form.reset()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.nameSelector,r=t.jobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={name:this._name.textContent,job:this._job.textContent},this._userInfo}},{key:"setUserInfo",value:function(e){this._name.textContent=e.nameProfile,this._job.textContent=e.jobProfile}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),O=document.querySelector(".profile__edit-button"),C=document.querySelector(".profile__add-button"),L=document.querySelector(".popup_profile"),P=document.querySelector(".popup_place"),I=(document.querySelector(".popup__form_place"),L.querySelector(".popup__text_input_name")),q=L.querySelector(".popup__text_input_job"),B={formSelector:".popup__form",inputSelector:".popup__text",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"error_active",errorClass:"popup__text_input_error"},x=new h(".popup_photo"),T=new i({data:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=R(e);T.addItem(t)}},".elements__element"),R=function(e){return new t({data:e,handleCardClick:function(){x.open(e.name,e.link)}},".elements-template").generateCard()},V=new w({popupSelector:".popup_place",submitForm:function(e){var t=R(e);T.addItem(t),V.close()}});V.setEventListener();var D=new j({nameSelector:".profile__title",jobSelector:".profile__title-job"}),A=new w({popupSelector:".popup_profile",submitForm:function(e){D.setUserInfo(e),A.close()}});A.setEventListener(),O.addEventListener("click",(function(){var e;e=D.getUserInfo(),I.value=e.name,q.value=e.job,A.open(),U.resetValidation()})),C.addEventListener("click",(function(){F.resetValidation(),V.open()})),T.renderItems(),x.setEventListener();var F=new r(B,P);F.enableValidation();var U=new r(B,L);U.enableValidation()})();