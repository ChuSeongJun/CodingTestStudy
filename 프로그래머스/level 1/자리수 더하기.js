function solution(n)
{
    var answer = 0;
    let num=String(n);
    num=num.split("")

    for (let i=0; i<num.length; i++){
        answer+=Number(num[i]);
    }


    return answer;
}

console.log(solution(223))