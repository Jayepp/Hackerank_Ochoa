function migratoryBirds(arr) {
    const counts = {};
 
    for (let bird of arr) {
        counts[bird] = (counts[bird] || 0) + 1;
    }

    let maxCount = 0;
    let minType = Infinity;
 
    for (let type in counts) {
        const count = counts[type];
        const typeNum = parseInt(type);
        if (count > maxCount || (count === maxCount && typeNum < minType)) {
            maxCount = count;
            minType = typeNum;
        }
    }

    return minType;
}