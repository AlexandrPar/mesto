import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, { callbackSubmitForm }) {
        super(popup);
        this._popupForm = this._popup.querySelector('.popup__input-container');
        this._items = Array.from(this._popupForm.querySelectorAll('.popup__item'));
        this._callbackSubmitForm = callbackSubmitForm;

    }

    _getInputValues() {
        const inputs = {};
        this._items.forEach((element) => {
            inputs[element.name] = element.value;
        });
        return inputs;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', () => {
            this._callbackSubmitForm(this._getInputValues());
        })
    }

    setInputValues(data) {
        this._items.forEach((element) => {
            element.value = data[element.name];
        });
    }

    close() {
        super.close();
        this._popupForm.reset();

    }

    loadButtom(load) {
        if (load === true) {
            this._popup.querySelector('.popup__save').textContent = 'Сохранение...';
        } else {
            this._popup.querySelector('.popup__save').textContent = 'Сохранить';
        }
    }
}