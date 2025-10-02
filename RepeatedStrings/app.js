function repeatedString(s, n) {
    
    let countInS = (s.split('a').length - 1);

    
    let fullRepeats = Math.floor(n / s.length);

   
    let remainder = n % s.length;

   
    let countInRemainder = (s.substring(0, remainder).split('a').length - 1);

   
    return (countInS * fullRepeats) + countInRemainder;
    
}
