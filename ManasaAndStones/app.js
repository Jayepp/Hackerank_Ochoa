function stones(n, a, b) {
    let result = new Set();

    for (let i = 0; i < n; i++) {
        
        let value = i * b + (n - 1 - i) * a;
        result.add(value);
    }

    
    return Array.from(result).sort((x, y) => x - y);
}
