function hurdleRace(k, height) {
    let maxHurdle = Math.max(...height); 
    
    if (k >= maxHurdle) {
        return 0; 
    } else {
        return maxHurdle - k; 
    }
}