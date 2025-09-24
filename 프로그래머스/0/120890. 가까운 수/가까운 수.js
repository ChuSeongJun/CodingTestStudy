function solution(array, n) {
    var answer = 0;
    let result=[]
    result=[...array,n].sort((a,b) => a - b);
    const i= result.indexOf(n);
    if(i===0)return result[1];
    if(i===result.length-1) return result[result.length-2];

    const left  = result[i - 1];
    const right = result[i + 1];
    const dl = Math.abs(n - left);
    const dr = Math.abs(right - n);

    return dl <= dr ? left : right;
}

