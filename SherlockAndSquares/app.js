function squares(a, b) {
    
    let start = Math.ceil(Math.sqrt(a));

   
    let end = Math.floor(Math.sqrt(b));
 return Math.max(0, end - start + 1);

 
}
