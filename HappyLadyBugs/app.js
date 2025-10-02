function happyLadybugs(b) {
    
    if (b.length === 1) {
        return b === '_' ? "YES" : "NO";
    }

    
    const counts = {};
    let hasEmpty = false;
    for (const ch of b) {
        counts[ch] = (counts[ch] || 0) + 1;
        if (ch === '_') hasEmpty = true;
    }

   
    if (!hasEmpty) {
        
        for (let i = 0; i < b.length; i++) {
            const leftSame = (i > 0 && b[i] === b[i - 1]);
            const rightSame = (i < b.length - 1 && b[i] === b[i + 1]);
            if (!leftSame && !rightSame) {
                return "NO";
            }
        }
        return "YES";
    }

    
    for (const ch in counts) {
        if (ch === '_') continue;
        if (counts[ch] === 1) return "NO";
    }

    return "YES";
}
