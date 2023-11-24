function solution(s) {
    let result = [0, 0];
    let len = 0;

    while(s.length>1){
        len=s.length;
        s=s.split("0").join("");
        result[0]++;
        result[1]+=len-s.length;
        s=s.length.toString(2);
    }

    return result;
}