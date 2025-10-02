function getTotalX(a, b) {  
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    function lcm(x, y) {
        return (x * y) / gcd(x, y);
    }

    let lcmA = a.reduce((acc, val) => lcm(acc, val), 1);
    
    let gcdB = b.reduce((acc, val) => gcd(acc, val));
 
    let count = 0;
    let multiple = lcmA;
    while (multiple <= gcdB) {
        if (gcdB % multiple === 0) {
            count++;
        }
        multiple += lcmA;
    }

    return count;
}