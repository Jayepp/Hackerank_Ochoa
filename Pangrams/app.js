function pangrams(s) {
    const letters = new Set();

    for (let char of s.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            letters.add(char);
        }
    }

    return letters.size === 26 ? "pangram" : "not pangram";
}