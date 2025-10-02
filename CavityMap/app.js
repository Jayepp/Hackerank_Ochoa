function cavityMap(grid) {
    const n = grid.length;

   
    let result = grid.map(row => row.split(''));

    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            const cell = grid[i][j];
            const top = grid[i - 1][j];
            const bottom = grid[i + 1][j];
            const left = grid[i][j - 1];
            const right = grid[i][j + 1];

            
            if (
                cell > top &&
                cell > bottom &&
                cell > left &&
                cell > right
            ) {
                result[i][j] = 'X';
            }
        }
    }

    
    return result.map(row => row.join(''));
}
