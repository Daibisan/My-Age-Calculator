import { hideInlineError, showInlineError } from "./UI.js";

// Input elements
let yearInputElm = null;
let monthInputElm = null;
let dayInputElm = null;

export function checkEmptyInput(birthElements) {
    
    let isEmpty = false;
    const errorMsg = 'This field is required';

    // Set input elements
    yearInputElm = birthElements.birthYearElm;
    monthInputElm = birthElements.birthMonthElm;
    dayInputElm = birthElements.birthDayElm;    

    // Check Day
    if (dayInputElm.value.trim() === '') {

        isEmpty = true;
        showInlineError(dayInputElm, errorMsg);

    } else {
        hideInlineError(dayInputElm);
    }

    // Check Month
    if (monthInputElm.value.trim() === '') {

        isEmpty = true;
        showInlineError(monthInputElm, errorMsg);

    } else {
        hideInlineError(monthInputElm);
    }
    
    // Check Year
    if (yearInputElm.value.trim() === '') {

        isEmpty = true;
        showInlineError(yearInputElm, errorMsg);

    } else {
        hideInlineError(yearInputElm);
    }
    return isEmpty;
}

export function checkInputValidation() {
    
    let isInvalid = false;
    
    // Get input raw values
    const dayInputValue = dayInputElm.value.trim();
    const monthInputValue = monthInputElm.value.trim();
    const yearInputValue = yearInputElm.value.trim();

    // Parse input raw values into Number
    const birthDay = Number(dayInputValue);
    const birthMonth = Number(monthInputValue);
    const birthYear = Number(yearInputValue);

    // Check Day (if day's raw value is not empty)
    if (dayInputValue !== '') {
        
        if (isNaN(birthDay) || birthDay <= 0 || birthDay > 31) {
            isInvalid = true;
            showInlineError(dayInputElm, 'Must be a valid day');
        }
        else { // Hide error and then run check 2 (checkDateValidation)

            hideInlineError(dayInputElm);

            // Check invalid date (days is more than total days in the month)
            isInvalid = checkDateValidation();

        }

    }

    // Check Month (if month's raw value is not empty)
    if (monthInputValue !== '') {
        
        if (isNaN(birthMonth) || birthMonth <= 0 || birthMonth > 12) {
            isInvalid = true;
            showInlineError(monthInputElm, 'Must be a valid month');
        }
        else {
            hideInlineError(monthInputElm);
        }

    }
    
    // Check Year (if year's raw value is not empty)
    if (yearInputValue !== '') {

        // Check invalid year is NaN OR negative number
        if (isNaN(birthYear) || birthYear <= 0) { 
            isInvalid = true;
            showInlineError(yearInputElm, 'Must be a valid year');
        }
        else { // Hide error and then run check 2 (check invalid year is in the future)
            hideInlineError(yearInputElm);
            isInvalid = checkYearIsInTheFuture(birthYear);
        }
    
    }
    return isInvalid;
}

function checkDateValidation() {
    
    let dateIsInvalid = false;

    const daysInAMonth = new Date(yearInputElm.value, monthInputElm.value, 0).getDate();
    const birthDay = Number(dayInputElm.value);
    
    if (birthDay > daysInAMonth) {
        showInlineError(dayInputElm, 'Must be a valid date');
        dateIsInvalid = true;
    }
    else {
        hideInlineError(dayInputElm);
    }
    return dateIsInvalid;
}

function checkYearIsInTheFuture(birthYear) {
    
    let yearIsInTheFuture = false;
    // Check invalid year is in the future
    const nowYear = new Date().getFullYear();
    if (birthYear > nowYear) { 

        showInlineError(yearInputElm, 'Must be in the past');
        yearIsInTheFuture = true;

    } else {
        hideInlineError(yearInputElm);
    }
    return yearIsInTheFuture;
}