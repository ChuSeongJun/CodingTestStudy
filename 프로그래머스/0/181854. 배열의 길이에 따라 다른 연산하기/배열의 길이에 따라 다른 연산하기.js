function solution(arr, n) {
    var answer = [];
    return arr.map((num,index)=>
        arr.length % 2 ===0 ? (index%2===1 ? num +n : num)
    : (index % 2 ===0 ? num +n : num)
    )
    
}