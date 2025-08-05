export function displayAgeResult(ageData = '- -') {
    
    if (ageData !== '- -') {

        document.getElementById('year-output').innerHTML = ageData.ageInYear;
        document.getElementById('month-output').innerHTML = ageData.ageInMonth;
        document.getElementById('day-output').innerHTML = ageData.ageInDay;
        return;

    } 
    document.getElementById('year-output').innerHTML = ageData;
    document.getElementById('month-output').innerHTML = ageData;
    document.getElementById('day-output').innerHTML = ageData;

}

export function showInlineError(inputElm, errorMsg) {
    
    const labelElm = inputElm.parentElement.querySelector('label');
    const inlineErrorElm = inputElm.parentElement.querySelector('.inline-error-text');
    
    // Change input label text color to red
    if (!labelElm.classList.contains('!text-[hsl(0,100%,67%)]')) 
        labelElm.classList.add('!text-[hsl(0,100%,67%)]');
    
    // Show inline error text
    inlineErrorElm.innerHTML = errorMsg;

    if (inlineErrorElm.classList.contains('hidden')) 
        inlineErrorElm.classList.remove('hidden');

    // Change input border color to red
    if (!inputElm.classList.contains('!border-[hsl(0,100%,67%)]')) 
        inputElm.classList.add('!border-[hsl(0,100%,67%)]');

    displayAgeResult();

}

export function hideInlineError(inputElm) {
    
    const labelElm = inputElm.parentElement.querySelector('label');
    const inlineErrorElm = inputElm.parentElement.querySelector('.inline-error-text');
    
    // Change input label text color
    if (labelElm.classList.contains('!text-[hsl(0,100%,67%)]')) 
        labelElm.classList.remove('!text-[hsl(0,100%,67%)]');

    // Hide inline error text
    if (!inlineErrorElm.classList.contains('hidden')) {
        
        inlineErrorElm.classList.add('hidden');
        inlineErrorElm.innerHTML = '';

    }

    // Change input border color
    if (inputElm.classList.contains('!border-[hsl(0,100%,67%)]')) 
        inputElm.classList.remove('!border-[hsl(0,100%,67%)]');

}

