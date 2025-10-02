function catAndMouse(x, y, z) {
    const distA = Math.abs(z - x); 
    const distB = Math.abs(z - y); 
    if (distA < distB) {
        return "Cat A";
    } else if (distB < distA) {
        return "Cat B";
    } else {
        return "Mouse C";
    }

    
}