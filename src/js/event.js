import calculateAge from "./calculateAge.js";
import { checkEmptyInput, checkInputValidation } from "./errorChecking.js";
import { displayAgeResult } from "./UI.js";

export default function init() {

    // Trigger submit on clicked
    const submit_btn = document.getElementById("submit-btn");
    submit_btn.addEventListener("click", ageCalculatorOnSubmit);

    // Trigger submit on enter
    const inputContainer = document.getElementById("input-container");
    const inputs = inputContainer.querySelectorAll("input");
    inputs.forEach((input) => {
        input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                ageCalculatorOnSubmit();
            }
        });
    });
}

function ageCalculatorOnSubmit() {
    const birthYearElm = document.getElementById("year-input");
    const birthMonthElm = document.getElementById("month-input");
    const birthDayElm = document.getElementById("day-input");

    const birthElements = { birthYearElm, birthMonthElm, birthDayElm };

    // Input Validation
    const inputIsEmpty = checkEmptyInput(birthElements);
    const inputIsInvalid = checkInputValidation(birthElements);

    if (inputIsEmpty || inputIsInvalid) return;

    // Calculate Age
    const birthYear = birthYearElm.value.trim();
    const birthMonth = birthMonthElm.value.trim();
    const birthDay = birthDayElm.value.trim();

    const birthData = { birthYear, birthMonth, birthDay };    

    const ageResult = calculateAge(birthData);
    displayAgeResult(ageResult);
}