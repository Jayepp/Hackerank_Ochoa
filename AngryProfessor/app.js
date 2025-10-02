function angryProfessor(k, a) {
    
    let onTime = 0;

    for (let time of a) {
        if (time <= 0) {
            onTime++;
        }
    }

    if (onTime < k) {
        return "YES";
    } else {
        return "NO";
    }
}
