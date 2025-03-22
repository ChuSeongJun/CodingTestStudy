function solution(numLog) {
    var answer = "";
    for (let i = 1; i < numLog.length; i++) {
        answer += calculator[String(numLog[i] - numLog[i - 1])];
    }
    return answer;
}

const calculator = { 1: "w", "-1": "s", 10: "d", "-10": "a" };
