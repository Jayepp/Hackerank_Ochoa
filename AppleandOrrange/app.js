function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    for (let i = 0; i < apples.length; i++) {
        let landingPosition = a + apples[i];
        if (landingPosition >= s && landingPosition <= t) {
            appleCount++;
        }
    }
    for (let i = 0; i < oranges.length; i++) {
        let landingPosition = b + oranges[i];
        if (landingPosition >= s && landingPosition <= t) {
            orangeCount++;
        }
    }
    return [appleCount, orangeCount];



}