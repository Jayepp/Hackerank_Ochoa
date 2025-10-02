function theLoveLetterMystery(s) {
    let operations = 0;
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        operations += Math.abs(s.charCodeAt(left) - s.charCodeAt(right));
        left++;
        right--;
    }

    return operations;
}
