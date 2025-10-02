function gemstones(arr) {
    
    let common = new Set(arr[0]);

    
    for (let i = 1; i < arr.length; i++) {
        
        let currentSet = new Set(arr[i]);
        common = new Set([...common].filter(ch => currentSet.has(ch)));
    }

    
    return common.size;
}
