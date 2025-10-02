function jumpingOnClouds(c, k) {
    let energy = 100;
    let n = c.length;
    let position = 0;

    do {
        position = (position + k) % n;
        energy--; 
        if (c[position] === 1) {
            energy -= 2; 
        }
    } while (position !== 0);

    return energy;
    
}

