export function displayAgeResult(ageData) {
    
    document.getElementById('year-output').innerHTML = ageData.ageInYear;
    document.getElementById('month-output').innerHTML = ageData.ageInMonth;
    document.getElementById('day-output').innerHTML = ageData.ageInDay;

}