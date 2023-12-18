const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(n, board) {
    let answer = 1;
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    let start, end, telStart1, telStart2, telEnd1, telEnd2;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'S') {
                start = { x: j, y: i };
            } else if (board[i][j] === 'E') {
                end = { x: j, y: i };
            } else if (board[i][j] === 'A') {
                telStart1 = { x: j, y: i };
            } else if (board[i][j] === 'B') {
                telStart2 = { x: j, y: i };
            }
        }
    }

    let queue = [];
    queue.push(start);
    board[start.y][start.x] = 1;

    while (queue.length > 0) {
        const current = queue.shift();

        for (let k = 0; k < 4; k++) {
            let nx = current.x + dx[k];
            let ny = current.y + dy[k];

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[ny][nx] === 0) {
                if (nx === end.x && ny === end.y) {
                    console.log(answer);
                    return;
                }

                queue.push({ x: nx, y: ny });
                board[ny][nx] = 1;

                if ((nx === telStart1.x && ny === telStart1.y)) {
                    queue.push({ x: telEnd1.x, y: telEnd1.y });
                    board[telEnd1.y][telEnd1.x] = 1;
                } else if ((nx === telStart2.x && ny === telStart2.y)) {
                    queue.push({ x: telEnd2.x, y: telEnd2.y });
                    board[telEnd2.y][telEnd2.x] = 1;
                }
            }
        }
    }

    console.log(-1);
    return answer;
}

let N;
let arr = [];

rl.question('', function (number) {
    N = parseInt(number);

    rl.on('line', function (line) {
        arr.push(line.split(''));
        if (arr.length === N) {
            console.log(solution(N, arr));
            rl.close();
        }
    });
});

rl.on('close', function () {
    process.exit();
});
