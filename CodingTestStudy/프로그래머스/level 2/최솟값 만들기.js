function solution(A,B){
    var answer = 0;

    A=A.sort(function(a, b)  {
        return a - b;
    });
    B=B.sort(function(a, b)  {
        return b - a;
    });

    for ( let i=0; i<A.length; i++){
        const number1=A[i]
        const number2=B[i]
        const multiple=number2*number1;
        answer+=multiple;
    }
    return answer;
}

console.log(solution([1, 4, 2],[5, 4, 4]	));