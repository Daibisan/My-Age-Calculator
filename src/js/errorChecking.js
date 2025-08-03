let yearElm = null;
let monthElm = null;
let dayElm = null;

export function checkEmptyInput(birthElements) {
    
    let isEmpty = false;
    yearElm = birthElements.birthYearElm;
    monthElm = birthElements.birthMonthElm;
    dayElm = birthElements.birthDayElm;

    if (dayElm.value === '') {
        isEmpty = true;
        console.log('input day kosong');
    }

    if (monthElm.value === '') {
        isEmpty = true;
        console.log('input bulan kosong');
    }
    
    if (yearElm.value === '') {
        isEmpty = true;
        console.log('input tahun kosong');
    }

    return isEmpty;
}

export function checkInputValidation() {
    
    let isInvalid = false;

    // Get Birth Date Values
    const birthDay = Number(dayElm.value);
    const birthMonth = Number(monthElm.value);
    const birthYear = Number(yearElm.value);
    
    // Check Day
    if (typeof birthDay !== 'number' || birthDay < 0 || birthDay > 31) {
        isInvalid = true;
        console.log('Invalid Day');
    }

    // Check Month
    if (typeof birthMonth !== 'number' || birthMonth < 0 || birthMonth > 12) {
        isInvalid = true;
        console.log('Invalid Month');
    }
    
    // Check Year
    if (typeof birthYear !== 'number' || birthYear < 0) {
        isInvalid = true;
        console.log('Invalid Year');
    }

    const nowYear = new Date().getFullYear();
    if (birthYear > nowYear) {
        isInvalid = true;
        console.log('Year must be in the past');
    }

    return isInvalid;
}