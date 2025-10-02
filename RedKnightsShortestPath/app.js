function printShortestPath(n, i_start, j_start, i_end, j_end) {
    const moves = [
        [-2, -1, "UL"],
        [-2,  1, "UR"],
        [ 0,  2, "R"],
        [ 2,  1, "LR"],
        [ 2, -1, "LL"],
        [ 0, -2, "L"]
    ];

    let visited = Array.from({ length: n }, () => Array(n).fill(false));
    let queue = [[i_start, j_start, []]];
    visited[i_start][j_start] = true;

    while (queue.length > 0) {
        let [i, j, path] = queue.shift();

        if (i === i_end && j === j_end) {
            console.log(path.length);
            console.log(path.join(" "));
            return;
        }

        for (let [di, dj, move] of moves) {
            let ni = i + di, nj = j + dj;
            if (ni >= 0 && ni < n && nj >= 0 && nj < n && !visited[ni][nj]) {
                visited[ni][nj] = true;
                queue.push([ni, nj, [...path, move]]);
            }
        }
    }

    console.log("Impossible");
}