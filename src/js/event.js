import calculateAge from "./calculateAge.js";
import { checkEmptyInput, checkInputValidation } from "./errorChecking.js";
import { displayAgeResult } from "./UI.js";

export default function init() {

    const submit_btn = document.getElementById('submit-btn-container');

    submit_btn.addEventListener('click', () => {
        const birthYearElm = document.getElementById('year-input');
        const birthMonthElm = document.getElementById('month-input');
        const birthDayElm = document.getElementById('day-input');

        const birthElements = { birthYearElm, birthMonthElm, birthDayElm };

        // Input Validation
        const inputIsEmpty = checkEmptyInput(birthElements);
        const inputIsInvalid = checkInputValidation();


        if (inputIsEmpty || inputIsInvalid) return;
        
        // Calculate Age
        const birthData = { 
            birthYear: birthYearElm.value, 
            birthMonth: birthMonthElm.value, 
            birthDay: birthDayElm.value
        };

        const ageResult = calculateAge(birthData);  
        console.log(ageResult);
              
        displayAgeResult(ageResult); 
    });
}