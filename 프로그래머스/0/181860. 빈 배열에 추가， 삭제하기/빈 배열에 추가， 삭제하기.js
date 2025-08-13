function solution(arr, flag) {
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        const a = arr[i];
        if (flag[i]) {
            for (let j = 0; j < a * 2; j++) {
                answer.push(a);
            }
        } else {
            // answer.length -= a;
            answer.splice(-a, a);
        }
    }
    return answer;
}
