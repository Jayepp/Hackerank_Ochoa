function dayOfProgrammer(year) {
    if (year === 1918) {
        return "26.09.1918"; 
    }
    
    let isLeap;
    if (year < 1918) {
        
        isLeap = year % 4 === 0;
    } else {
       
        isLeap = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
    }
    
    return (isLeap ? "12.09." : "13.09.") + year;
}
