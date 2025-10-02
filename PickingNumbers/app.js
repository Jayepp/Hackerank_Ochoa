function pickingNumbers(a) {
    let freq = new Array(101).fill(0); 
   
    for (let num of a) {
        freq[num]++;
    }

    let maxLen = 0;
   
    for (let i = 1; i < freq.length; i++) {
        maxLen = Math.max(maxLen, freq[i] + freq[i - 1]);
    }

    return maxLen;
}