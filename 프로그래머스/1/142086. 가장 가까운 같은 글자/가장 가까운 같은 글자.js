function solution(s) {
    const answer = [];
    const array = {};

    for (let i = 0; i < s.length; i++) {
        const v = s[i];

        if (array[v] !== undefined) {
            answer.push(i - array[v]);
        } else {
            answer.push(-1);
        }
        array[v] = i;
    }

    return answer;
}
