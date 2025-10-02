function marsExploration(s) {
    let count = 0;
    const expected = "SOS";

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== expected[i % 3]) {
            count++;
        }
    }

    return count;
}