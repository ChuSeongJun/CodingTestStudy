function solution(k, tangerine) {
    var answer = 0;
    let sum=0;

    let object={};

    tangerine.forEach((n)=>{
        object[n]= ++object[n] || 1;
    })

    let array=Object.values(object).sort((a,b)=> b-a);
    for (let num of array){
        answer++;
        sum+=num;

        if(sum>=k) break;
    }

    return answer;
}

