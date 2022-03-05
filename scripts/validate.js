const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__item_type_error');
    errorElement.textContent = errorMessage;

}

const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__item_type_error');
    errorElement.textContent = "";
}

const checkValidity = (formElement, inputElement) => {
    const isInputNotValidity = !inputElement.validity.valid;

    if (isInputNotValidity) {
        const errorMessage = inputElement.validationMessage;
        showError(formElement, inputElement, errorMessage);
    } else {
        hideError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
    const buttonElement = formElement.querySelector('.popup__save');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = document.querySelectorAll(".popup__input-container");
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
};

const hasInvalidInput = (inputList) => {
    const inputElements = Array.from(inputList);
     return inputElements.some((inputElement) => {
        return !inputElement.validity.valid ;
    });
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__save_disabled');
        buttonElement.setAttribute("disabled", true);
    } else{
        buttonElement.classList.remove('popup__save_disabled');
        buttonElement.removeAttribute("disabled");
    }

};

enableValidation();

