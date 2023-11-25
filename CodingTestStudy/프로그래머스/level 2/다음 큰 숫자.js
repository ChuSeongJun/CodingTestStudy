function solution(n) {
    var answer = 0;
    let len=n.toString(2).split("0").join("").length;

    for(let i=n+1; n<100000; i++){
        let len2=i.toString(2).split("0").join("").length;
        if(len===len2)
            return +i.toString(10);
    }
    return answer;
}

function solution(n) {
    const n2 = n.toString(2).split('').filter(num => num === '1').length;
    for(let i=n+1; n<=1000000; i++) {
        const i2= i.toString(2).split('').filter(num => num === '1').length;
        if(n2 === i2) {
            return +i.toString(10);
        }
    }
}