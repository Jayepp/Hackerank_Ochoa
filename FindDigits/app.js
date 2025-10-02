function findDigits(n) {
    const digits = n.toString().split('');
    let count = 0;

    for (let digit of digits) {
        let d = parseInt(digit);
        if (d !== 0 && n % d === 0) {
            count++;
        }
    }

    return count;
    
}
