function taumBday(b, w, bc, wc, z) {
    
    let costBlack = Math.min(bc, wc + z);

    
    let costWhite = Math.min(wc, bc + z);

    
    return (b * costBlack) + (w * costWhite);
    
}
