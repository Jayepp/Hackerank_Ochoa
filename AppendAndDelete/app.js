function appendAndDelete(s, t, k) {
    let commonLength = 0;

   
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i] === t[i]) {
            commonLength++;
        } else {
            break;
        }
    }
    let totalOps = (s.length - commonLength) + (t.length - commonLength);

    if (totalOps > k) {
        return "No";
    } else if ((k - totalOps) % 2 === 0 || k >= s.length + t.length) {
        return "Yes";
    } else {
        return "No";
    }
}
