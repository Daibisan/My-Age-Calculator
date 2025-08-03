export default function calculateAge(birthData) {

    // Get Now and Birth Date
    const nowDate = new Date();

    // Get year, month, day from every date
    const nowYear = nowDate.getFullYear();
    const nowMonth = nowDate.getMonth() + 1;
    const nowDay = nowDate.getDate();

    if (birthData === null) return 'birth data is null';
    const birthYear = birthData.birthYear;
    const birthMonth = birthData.birthMonth;
    const birthDay = birthData.birthDay;

    // Calculate Age in year
    let ageInYear = nowYear - birthYear;

    // Calculate Age in month
    let ageInMonth = nowMonth - birthMonth;

    if (ageInMonth < 0) {

        ageInMonth += 12;
        ageInYear--;

    }

    // Calculate Age in days
    let ageInDay = nowDay - birthDay;

    if (ageInDay < 0) {

        const daysInAMonth = new Date(nowYear, nowMonth, 0).getDate();
        ageInDay += daysInAMonth;
        ageInMonth--;

    }
    // console.log(ageInYear, ageInMonth, ageInDay);
    return { ageInYear, ageInMonth, ageInDay };
}