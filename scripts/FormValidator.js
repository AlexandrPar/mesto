export default class FormValidator {
    constructor(config, popupClass) {
        this._config = config;
        this._popupClass = popupClass;
    };

    _showError(inputElement) {
        this._errorElement = this._popupClass.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        this._errorElement.textContent = inputElement.validationMessage;
    };

    _hideError(inputElement) {
        this._errorElement = this._popupClass.querySelector(`.${inputElement.id}-error`);
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

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton();
        } else {
            this._unDisableSubmitButton();
        }
    };

    _setEventListeners() {
        this._inputList = Array.from(this._popupClass.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._popupClass.querySelector(this._config.submitButtonSelector);
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener("input", () => {
                this._checkValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    enableValidation = () => {

        this._popupClass.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };

};
