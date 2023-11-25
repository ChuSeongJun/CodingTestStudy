function solution(n) {
    var answer = 0;

    let num=[0,1];
    for(let i=2; i<=n; i++){
        num.push((num[i-2]+num[i-1])%1234567)
    }

    answer=num[n]

    return answer;
}