function flatlandSpaceStations(n, c) {
  
  c.sort((a, b) => a - b);

  let maxDistance = 0;

  
  maxDistance = Math.max(maxDistance, c[0]);

  
  for (let i = 1; i < c.length; i++) {
    let distance = Math.floor((c[i] - c[i - 1]) / 2);
    maxDistance = Math.max(maxDistance, distance);
  }

  
  maxDistance = Math.max(maxDistance, n - 1 - c[c.length - 1]);

  return maxDistance;
}