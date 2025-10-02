
function alternate(s) {
    const uniqueChars = [...new Set(s)];
    let maxLen = 0;

    
    for (let i = 0; i < uniqueChars.length; i++) {
        for (let j = i + 1; j < uniqueChars.length; j++) {
            const c1 = uniqueChars[i];
            const c2 = uniqueChars[j];

            
            const filtered = [...s].filter(ch => ch === c1 || ch === c2).join("");

            
            if (isAlternating(filtered)) {
                maxLen = Math.max(maxLen, filtered.length);
            }
        }
    }

    return maxLen;

    function isAlternating(str) {
        for (let i = 1; i < str.length; i++) {
            if (str[i] === str[i - 1]) return false;
        }
        return true;
    }
}
