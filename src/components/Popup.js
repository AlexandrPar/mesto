export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup);
        this._closeButton = this._popup.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    _closeByClickOnOverlay(event, className) {
        if (!event.target.closest(className)) {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close();
        })

        this._popup.addEventListener('mousedown', e => this._closeByClickOnOverlay(e, '.popup__container'));
    }
}