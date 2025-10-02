function beautifulDays(i, j, k) {
    let count = 0;

    for (let day = i; day <= j; day++) {
        
        let reversed = parseInt(day.toString().split('').reverse().join(''));
        
        if (Math.abs(day - reversed) % k === 0) {
            count++;
        }
    }

    return count;
}
