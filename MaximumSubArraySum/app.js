function maximumSum(a, m) {
    let prefix = 0n; 
    let maxMod = 0n;
    let prefixSet = [0n]; 

    for (const num of a) {
        prefix = (prefix + BigInt(num)) % BigInt(m);

        
        let idx = lowerBound(prefixSet, prefix + 1n);
        if (idx < prefixSet.length) {
           
            let candidate = (prefix - prefixSet[idx] + BigInt(m)) % BigInt(m);
            if (candidate > maxMod) maxMod = candidate;
        }

       
        if (prefix > maxMod) maxMod = prefix;

       
        insertSorted(prefixSet, prefix);
    }

    return Number(maxMod);

    function lowerBound(arr, target) {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (arr[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }

    
    function insertSorted(arr, val) {
        let i = lowerBound(arr, val);
        arr.splice(i, 0, val);
    }
}
