function solution(n){
    const root = Math.trunc(Math.sqrt(n));
    return root * root === n ? 1 : 2;
}
