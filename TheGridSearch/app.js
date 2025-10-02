function gridSearch(G, P) {
    const R = G.length;       // rows ng G
    const C = G[0].length;    // cols ng G
    const r = P.length;       // rows ng P
    const c = P[0].length;    // cols ng P

    for (let i = 0; i <= R - r; i++) {
        for (let j = 0; j <= C - c; j++) {
            let found = true;
            
           
            for (let x = 0; x < r; x++) {
                const subG = G[i + x].substr(j, c);
                if (subG !== P[x]) {
                    found = false;
                    break;
                }
            }
            
            if (found) return "YES";
        }
    }
    return "NO";
}
