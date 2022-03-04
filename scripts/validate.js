const checkVallidity = (formElement, inputElement) => {
    console.log(inputElement.validity);
}

const setEventListeners = (formElement) => {
    const inputList = formElement.querySelectorAll('.popup__item');
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", (evt) => {
            console.log(evt.target.name, evt.target.value)
            checkVallidity(formElement, inputElement);
        });
    });
};

const enableValidation = () => {
    const formList = document.querySelectorAll(".popup__input-container");
    formList.forEach((formElement) =>{
        formElement.addEventListener("submit",  (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
};

enableValidation();