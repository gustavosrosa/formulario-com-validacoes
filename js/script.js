const nameElement = document.querySelector("#name");
const emailElement = document.querySelector("#email");
const subjectElement = document.querySelector("#subject");
const messageElement = document.querySelector("#message");
const buttonSubmit = document.querySelector("#submit-btn");

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

function validateInput(element) {
    const label = document.querySelector(`label[for="${element.id}"]`)
    if (element.value.trim() == "") {
        throwError(element, `${label.textContent} não pode ficar em branco!`);
    }
}

function throwError(input, errorMessage) {
    const element = input.nextElementSibling;
    element.textContent = errorMessage;
    input.parentElement.classList.add("error");
}
