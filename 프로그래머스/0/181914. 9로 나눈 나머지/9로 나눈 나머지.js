

function solution(number) {
    var answer=0;
    const num = String(number);
    let sum=0;
    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    answer=sum%9;
    return answer
}