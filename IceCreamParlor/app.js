function icecreamParlor(m, arr) {
    let map = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        let complement = m - arr[i];
        if (map.has(complement)) {
            
            return [map.get(complement) + 1, i + 1];
        }
        map.set(arr[i], i);
    }
}
    return []; 
