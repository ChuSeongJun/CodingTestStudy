const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(n, s) {
    for (let target = 1; target <= 26; target++) {
        let answer = 0;
        let lt = 0;
        let maxLen = 0;
        let ch = Array.from({ length: 26 }, () => 0);

        for (let rt = 0; rt < s.length; rt++) {
            if (ch[s.charCodeAt(rt) - 'a'.charCodeAt(0)] === 0) {
                maxLen++;
            }
            ch[s.charCodeAt(rt) - 'a'.charCodeAt(0)]++;

            while (maxLen > target) {
                ch[s.charCodeAt(lt) - 'a'.charCodeAt(0)]--;
                if (ch[s.charCodeAt(lt) - 'a'.charCodeAt(0)] === 0) {
                    maxLen--;
                }
                lt++;
            }

            if (maxLen === target) {
                answer = Math.max(answer, rt - lt + 1);
            }
        }
        console.log(answer);
    }
}

rl.question('', function (N) {
    rl.question('', function (S) {
        solution(N, S);
        rl.close();
    });
});

rl.on('close', function () {
    process.exit();
});
