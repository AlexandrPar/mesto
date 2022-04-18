export default class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
    };

    _showError(inputElement) {
        this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        this._errorElement.textContent = inputElement.validationMessage;
    };

    _hideError(inputElement) {
        this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        this._errorElement.textContent = "";
    };

    _checkValidity(inputElement) {
        const isInputNotValidity = !inputElement.validity.valid;


        if (isInputNotValidity) {
            this._showError(inputElement);
        } else {
            this._hideError(inputElement);
        }
    };

    _hasInvalidInput() {
        this._inputElements = Array.from(this._inputList);
        return this._inputElements.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _disableSubmitButton() {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.disabled = true;
    };

    _unDisableSubmitButton() {
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
        this._buttonElement.removeAttribute("disabled");
    }

    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton();
        } else {
            this._unDisableSubmitButton();
        }
    };

    resetValidation(){
        this._inputList.forEach((inputElement) => this._hideError(inputElement));
        this.toggleButtonState()
    }

    _setEventListeners() {
        this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener("input", () => {
                this._checkValidity(inputElement);
                this.toggleButtonState();
            });
        });
    };

    enableValidation = () => {

        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };

};
