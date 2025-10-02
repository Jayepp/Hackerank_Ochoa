function timeConversion(s) {
    let period = s.slice(-2);       
    let hours = parseInt(s.slice(0, 2));
    let minutesSeconds = s.slice(2, 8);  

    if (period === "AM") {
        if (hours === 12) {
            hours = 0; 
        }
    } else {
        if (hours !== 12) {
            hours += 12; 
        }
    }

    return (hours < 10 ? "0" : "") + hours + minutesSeconds;
    
}