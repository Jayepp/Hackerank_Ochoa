function minimumLoss(price) {
    
    const arr = price.map((v, i) => [BigInt(v), i]);

    
    arr.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));

    let minLoss = null; 
   
    for (let i = 1; i < arr.length; i++) {
        
        const lower = arr[i - 1]; 
        const higher = arr[i];   

        
        if (higher[1] < lower[1]) {
            
            const loss = higher[0] - lower[0]; 
            
            if (minLoss === null || loss < minLoss) {
                minLoss = loss;
            }
        }
    }

    
    if (minLoss === null) return 0;

    const maxSafe = BigInt(Number.MAX_SAFE_INTEGER);
    return minLoss <= maxSafe ? Number(minLoss) : minLoss.toString();
}