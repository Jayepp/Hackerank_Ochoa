function beautifulPairs(A, B) {
    const freqA = new Map();
    const freqB = new Map();

    
    for (const num of A) {
        freqA.set(num, (freqA.get(num) || 0) + 1);
    }

   for (const num of B) {
        freqB.set(num, (freqB.get(num) || 0) + 1);
    }

    let matches = 0;

    
    for (const [num, countA] of freqA.entries()) {
        const countB = freqB.get(num) || 0;
        matches += Math.min(countA, countB);
    }

    
    if (matches === A.length) {
        return matches - 1;
    } else {
        return matches + 1;
    }
}
