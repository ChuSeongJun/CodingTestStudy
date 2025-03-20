function solution(n, control) {
    var answer = 0;
    for (let i = 0; i < control.length; i++) {
        n += calculator[control[i]];
    }
    answer = n;
    return answer;
}

const calculator = {
    w: +1,
    s: -1,
    d: +10,
    a: -10,
};
