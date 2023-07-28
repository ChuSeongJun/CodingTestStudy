function solution(s) {
    let check = 0;

    // 문자열을 for of 반복문을 이용해 하나씩 분석한다.
    for (let round of s) {

        // 괄호가 열리면 check에 +1 닫히면 -1을 해준다.
        round === "(" ? check++ : check--;

        // check가 0보다 아래일 경우
        // 괄호가 닫히는 것이 여는것 보다 먼저 나왔다는 얘기이다.
        // 즉, 열리기 전에 닫혔기 떄문에 false이다.
        if (check < 0) return false;
    }

    // 마지막으로 남은 잔여가 있는지 체크 후 반환한다.
    return check === 0 ? true : false;
}


console.log(solution("()()"));