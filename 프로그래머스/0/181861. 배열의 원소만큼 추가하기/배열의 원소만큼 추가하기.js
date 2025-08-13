function solution(arr) {
    const answer = [];
    for (a of arr) {
        let count = a;
        while (count) {
            answer.push(a);
            count--;
        }
    }
    return answer;
}
