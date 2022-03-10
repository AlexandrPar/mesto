const configValidation = {
    formSelector: '.popup__input-container',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__input-error'
  
  };

const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__item_type_error');
    errorElement.textContent = errorMessage;

}

const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__item_type_error');
    errorElement.textContent = "";
};

const checkValidity = (formElement, inputElement) => {
    const isInputNotValidity = !inputElement.validity.valid;


    if (isInputNotValidity) {
        const errorMessage = inputElement.validationMessage;
        showError(formElement, inputElement, errorMessage);
    } else {
        hideError(formElement, inputElement);
       
    }
};

const hasInvalidInput = (inputList) => {
    const inputElements = Array.from(inputList);
    return inputElements.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};


const disableSubmitButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
};

const unDisableSubmitButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
        disableSubmitButton(buttonElement, inactiveButtonClass);
    } else {
        unDisableSubmitButton (buttonElement, inactiveButtonClass);
    }

};

const setEventListeners = (formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    inputList.forEach(inputElement => {
        inputElement.addEventListener("input", (evt) => {
            checkValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });
};

const enableValidation = ({ formSelector, ...rest }) => {
    const formList = document.querySelectorAll(formSelector);
    formList.forEach(formElement => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, { ...rest });
    });
};

enableValidation(configValidation);

