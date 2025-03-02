function solution(a, b) {
    var answer = 0;
    num1 = Number(`${a}${b}`);
    num2 = 2 * a * b;
    if(num1>=num2){
        answer=num1;
    }else{
        answer=num2
    }
    return answer;
}
