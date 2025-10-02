function missingNumbers(arr, brr) {
    const freqA = new Map();
    const freqB = new Map();


    for (const num of arr) {
        freqA.set(num, (freqA.get(num) || 0) + 1);
    }

    
    for (const num of brr) {
        freqB.set(num, (freqB.get(num) || 0) + 1);
    }

    const result = [];

    
    for (const [num, countB] of freqB.entries()) {
        const countA = freqA.get(num) || 0;
        if (countB > countA) {
            result.push(num);
        }
    }

   
    return result.sort((a, b) => a - b);
}
