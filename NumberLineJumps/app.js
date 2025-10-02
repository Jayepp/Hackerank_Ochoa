function kangaroo(x1, v1, x2, v2) {
    
    if (x1 === x2) return "YES";
  
    if (v1 === v2) return "NO";

    const numerator = x2 - x1;
    const denominator = v1 - v2;
    const n = numerator / denominator;

    if (Number.isFinite(n) && Number.isInteger(n) && n >= 0) {
        return "YES";
    } else {
        return "NO";
    }
}