function solution(a, b) {
    var answer = 0;
    num1 = String(a) + String(b);
    num2 = String(b) + String(a);

    if (Math.floor(num1 / num2)) {
        answer = num1;
    } else {
        answer = num2;
    }
    return Number(answer);
}
