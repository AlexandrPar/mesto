import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    setEventListeners() {
        super.setEventListeners();
        this._popup.querySelector('.popup__input-container').addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleConfirmationSubmit();
        });
    }

    submitAction(handleConfirmationSubmit) {
        this._handleConfirmationSubmit = handleConfirmationSubmit;
    }

}