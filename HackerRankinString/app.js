function hackerrankInString(s) {
    const target = "hackerrank";
    let j = 0; 
    for (let i = 0; i < s.length && j < target.length; i++) {
        if (s[i] === target[j]) {
            j++;
        }
    }

    return j === target.length ? "YES" : "NO";
}