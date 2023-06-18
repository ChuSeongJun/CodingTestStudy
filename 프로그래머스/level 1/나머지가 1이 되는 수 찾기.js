function solution(n) {
    var answer = 0;
    let list=[]

    for (let i=0; i<n; i++){
        if(n%i===1){
            list.push(i);
        }
    }
    answer=Math.min.apply(null, list);
    return answer;
}
