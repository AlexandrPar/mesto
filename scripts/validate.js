const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    
}

const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = " ";
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
    const inputList = formElement.querySelectorAll('.popup__item');
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", (evt) => {
            console.log(evt.target.name, evt.target.value)
            checkValidity(formElement, inputElement);
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

enableValidation();