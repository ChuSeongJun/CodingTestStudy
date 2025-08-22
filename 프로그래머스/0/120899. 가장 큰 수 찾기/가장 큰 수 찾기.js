function solution(array) {
    var answer = [];
    let number = 0;
    for (let i = 0; i < array.length; i++) {
        if (number < array[i]) {
            number = array[i];
        }
    }
    answer.push(number);
    answer.push(array.indexOf(number));
    return answer;
}
