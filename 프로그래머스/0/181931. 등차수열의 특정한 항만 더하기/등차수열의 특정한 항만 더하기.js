function solution(a, d, included) {
    var answer = 0;
    let number = 0;
    for (let i = 0; i < included.length; i++) {
        number = a + i * d;
        if (included[i] === true) {
            answer += number;
        }
    }
    return answer;
}
