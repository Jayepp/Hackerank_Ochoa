function equalizeArray(arr) {
    let freq = {};

    
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    
    let maxFreq = 0;
    for (let key in freq) {
        maxFreq = Math.max(maxFreq, freq[key]);
    }

    
    return arr.length - maxFreq;
    
}

