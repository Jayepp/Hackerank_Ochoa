function balancedSums(arr) {
    let total = arr.reduce((a, b) => a + b, 0); 
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let rightSum = total - leftSum - arr[i];
        if (leftSum === rightSum) {
            return "YES";
        }
        leftSum += arr[i];
    }

    return "NO";
}