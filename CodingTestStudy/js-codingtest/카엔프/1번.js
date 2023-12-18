const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(N, K, map) {
    let start;
    let resource = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (map[i][j] === 'B') {
                start = { x: j, y: i };
            } else if (map[i][j] === '0') {
                resource.push({ x: j, y: i });
            }
        }
    }

    if (resource.length < K) {
        console.log('-1');
    } else {
        for (let i = 0; i < K; i++) {
            const now = resource[i];
            map[now.y] = map[now.y].substring(0, now.x) + 'X' + map[now.y].substring(now.x + 1);
        }

        for (let i = 0; i < N; i++) {
            console.log(map[i]);
        }
    }
}

rl.question('', function (number) {
    const [N, K] = number.split(' ').map(Number);
    let map = [];

    rl.on('line', function (line) {
        map.push(line);
        if (map.length === N) {
            solution(N, K, map);
            rl.close();
        }
    });
});

rl.on('close', function () {
    process.exit();
});
