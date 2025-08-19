function solution(n, t) {
    answer = n;
    for (let i = 0; i < t; i++) {
        answer = answer * 2;
    }
    return answer
}
