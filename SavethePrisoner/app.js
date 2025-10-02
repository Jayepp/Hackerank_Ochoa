function saveThePrisoner(n, m, s) {
    
    let last = (s + m - 1) % n;
    
    return last === 0 ? n : last;
    
}
