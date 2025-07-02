const nameElement = document.querySelector("#name");
const emailElement = document.querySelector("#email");
const subjectElement = document.querySelector("#subject");
const messageElement = document.querySelector("#message");
const buttonSubmit = document.querySelector("#submit-btn");
const errorClassElement = "error";
const errorElement = document.querySelector(`.${errorClassElement}`);

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    validateElements();
})

function validateElements() {
    const elements = [nameElement, emailElement, subjectElement];
    
    elements.forEach((element) => {
        validateInput(element);
    });
}

function validateInput(input) {
    const label = document.querySelector(`label[for="${element.id}"]`);

    if (element.value.trim() == "") {
        throwError(input, `${label.textContent} não pode ficar em branco!`);
    } else {
        removeClassError(input);
    }
}

function throwError(input, errorMessage) {
    const element = input.nextElementSibling;
    element.textContent = errorMessage;
    input.parentElement.classList.add(errorClassElement);
}

function removeClassError(input) {
    const element = input.nextElementSibling;
    element.textContent = "";
    input.parentElement.classList.remove(errorClassElement);
}
