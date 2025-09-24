function solution(arr) {
    let answer=0;
    let result=arr.sort((a,b)=>a-b);
    answer=result[0]
    return answer;
}

console.log(solution([5, 7, 1, 3, 2, 9, 11]));