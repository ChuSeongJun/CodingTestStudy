function solution(arr) {
    var answer = [];
    const numArray = [];
    arr.forEach((item, index) => {
        if (item === 2) {
            numArray.push(index);
        }
    });

    if (numArray.length === 0) {
        return [-1];
    }

    const firstIndex = numArray[0];
    const lastIndex = numArray[numArray.length - 1];

    answer = arr.slice(firstIndex, lastIndex + 1);

    return answer;
}
