function weightedUniformStrings(s, queries) {
    const weights = new Set();
    let currentChar = "";
    let currentCount = 0;

    for (let char of s) {
        if (char === currentChar) {
            currentCount++;
        } else {
            currentChar = char;
            currentCount = 1;
        }
        const weight = (char.charCodeAt(0) - 96) * currentCount;
        weights.add(weight);
    }

    return queries.map(q => (weights.has(q) ? "Yes" : "No"));
}