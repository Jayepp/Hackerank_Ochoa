function pageCount(n, p) {
   
    const fromFront = Math.floor(p / 2);
    
    const fromBack = Math.floor((n - p) / 2);
    
    return Math.min(fromFront, fromBack);
    
}