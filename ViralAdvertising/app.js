function viralAdvertising(n) {
    let shared = 5;
    let totalLikes = 0;

    for (let day = 1; day <= n; day++) {
        let likes = Math.floor(shared / 2);
        totalLikes += likes;
        shared = likes * 3; 
    }

    return totalLikes;
    
}
