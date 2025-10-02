function permutationEquation(p) {
    const n = p.length;
    const result = [];

    for (let x = 1; x <= n; x++) {
        
        let firstIndex = p.indexOf(x) + 1;
       
        let secondIndex = p.indexOf(firstIndex) + 1;
        result.push(secondIndex);
    }

    return result;
    
}
