function solution(n) {
    let answer=0;
    while(n>0){
        answer+=n
        n--
    }
    return answer;
}

console.log(solution(10));