const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        let currentText = display.innerText;
        let lastChar = currentText.slice(-1);
        let operators = ["+", "-", "*", "/"];

        if (item.id === "clear") {
            display.innerText = "";
        } else if (item.id === "backspace") {
            display.innerText = currentText.slice(0, -1);
        } else if (item.id === "equal") {
            if (currentText !== "" && !operators.includes(lastChar)) {
                display.innerText = eval(currentText);
            } else {
                display.innerText = "Error";
                setTimeout(() => (display.innerText = ""), 2000);
            }
        } else if (operators.includes(item.id)) {
            // Evita que un operador aparezca al inicio
            if (currentText === "") {
                return;
            }
            // Si el último caracter ya es un operador, lo reemplaza en lugar de agregar otro
            if (operators.includes(lastChar)) {
                display.innerText = currentText.slice(0, -1) + item.id;
            } else {
                display.innerText = currentText + item.id;
            }
        } else {
            // Asegura que los números y el punto se agreguen correctamente
            display.innerText += item.id;
        }
    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};
