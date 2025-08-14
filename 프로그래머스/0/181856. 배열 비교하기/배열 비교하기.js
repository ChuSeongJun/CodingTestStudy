function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length > arr2.length){
        return 1
    }else if(arr1.length < arr2.length){
        return -1
    }else{
        let sum1=0
        let sum2=0;
        arr1.map((str)=> sum1+=str);
        arr2.map((str)=> sum2+=str);
        if(sum1>sum2){
            return 1
        }else if(sum1<sum2){
            return -1
        }else{
            return 0
        }
    }
    return answer;
}