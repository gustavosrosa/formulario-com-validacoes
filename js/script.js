const nameElement = document.querySelector("#name");
const emailElement = document.querySelector("#email");
const subjectElement = document.querySelector("#subject");
const messageElement = document.querySelector("#message");
const buttonSubmit = document.querySelector("#submit-btn");
const errorClassElement = "error";
const errorElement = document.querySelector(`.${errorClassElement}`);
const validation = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    validateElements();
})

function validateElements() {
    const elements = [nameElement, emailElement, subjectElement];

    elements.forEach((element) => {
        const label = document.querySelector(`label[for="${element.id}"]`);
        validateInput(element, label);
    });
}

function validateInput(input, label) {
    if (input.value.trim() == "") {
        manipulateError("add", input, `${label.textContent} não pode ficar em branco!`);
    } else if (input.name == "email") {
        validateEmail(input, label);
    } else {
        manipulateError("remove", input, "");
    }
}

function validateEmail(element, label) {
    if (validation.test(element.value)) {
        manipulateError("remove", element, "");
    } else {
        manipulateError("add", element, `${label.textContent} inválido!`);
    }
}

function manipulateError(func, input, errorMessage) {
    const element = input.nextElementSibling;
    const classList = input.parentElement.classList;

    element.textContent = errorMessage;
    (func == "add") ? classList.add(errorClassElement) : classList.remove(errorClassElement);
}
