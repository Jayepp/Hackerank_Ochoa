function knightlOnAChessboard(n) {
   
    function bfs(a, b) {
        const targetX = n - 1, targetY = n - 1;
        const visited = Array.from({ length: n }, () => Array(n).fill(false));
        const moves = [
            [ a,  b], [ a, -b], [-a,  b], [-a, -b],
            [ b,  a], [ b, -a], [-b,  a], [-b, -a]
        ];

        const queue = [];
        queue.push([0, 0, 0]); 

        while (queue.length) {
            const [x, y, d] = queue.shift();
            if (x === targetX && y === targetY) return d;

            for (const [dx, dy] of moves) {
                const nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, d + 1]);
                }
            }
        }
        return -1; 
    }

    const ans = Array.from({ length: n - 1 }, () => Array(n - 1).fill(0));

    for (let a = 1; a <= n - 1; a++) {
        for (let b = a; b <= n - 1; b++) { 
            const res = bfs(a, b);
            ans[a - 1][b - 1] = res;
            ans[b - 1][a - 1] = res;
        }
    }

    return ans;
}