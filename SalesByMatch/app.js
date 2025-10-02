function sockMerchant(n, ar) {
    const counts = {};
    let pairs = 0;

    for (let sock of ar) {
        counts[sock] = (counts[sock] || 0) + 1;
    }

    for (let color in counts) {
        pairs += Math.floor(counts[color] / 2);
    }

    return pairs;

    
}
