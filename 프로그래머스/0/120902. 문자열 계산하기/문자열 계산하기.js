function solution(my_string) {
    var answer = 0;
    let result=[];
    let secondNumber=0;
    let cul=""
    result = my_string.split(" ");
    answer=Number(result[0]);
    for(let i=1;i<result.length;i+=2){
        cul=result[i];
        secondNumber=Number(result[i+1]);
        if(cul==="+"){
            answer+=secondNumber;
        }else if(cul==="-"){
            answer-=secondNumber
        }
    }
    return answer;
}
