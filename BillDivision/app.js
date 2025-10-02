function bonAppetit(bill, k, b) {
    let total = bill.reduce((sum, val) => sum + val, 0);
    let annaShare = (total - bill[k]) / 2;

    if (b === annaShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}