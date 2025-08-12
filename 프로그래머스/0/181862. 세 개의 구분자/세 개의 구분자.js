function solution(myStr) {
    const answer = [];
    let current = "";

    for (let i = 0; i < myStr.length; i++) {
        const char = myStr[i];

        if (char === "a" || char === "b" || char === "c") {
            if (current.length > 0) {
                answer.push(current);
                current = "";
            }
        } else {
            current += char;
        }
    }

    if (current.length > 0) {
        answer.push(current);
    }

    return answer.length === 0 ? ["EMPTY"] : answer;
}
