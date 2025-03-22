function solution(l, r) {
    var answer = [];

    for (l; l <= r; l++) {
        const number = l.toString();
        if ([...number].every((num) => num === "0" || num === "5")) {
            answer.push(l);
        }
    }
    return answer.length > 0 ? answer : [-1];
}
