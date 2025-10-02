function miniMaxSum(arr) {
    let total = arr.reduce((a, b) => a + b, 0);   
    let min = Math.min(...arr);                  
    let max = Math.max(...arr);                   
    
    let minSum = total - max; 
    let maxSum = total - min; 
    
    console.log(minSum + " " + maxSum);


}