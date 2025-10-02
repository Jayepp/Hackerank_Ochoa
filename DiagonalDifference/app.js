function diagonalDifference(arr) {
    let primary = 0;
    let secondary = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        primary += arr[i][i];               
        secondary += arr[i][n - 1 - i];    
    }

    return Math.abs(primary - secondary);
}