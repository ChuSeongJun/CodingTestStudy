function solution(num_list) {
    var answer = 0;
    if (num_list.length <= 10) {
        answer = num_list.reduce((acc, num) => acc * num, 1);
    } else {
        answer = num_list.reduce((acc, num) => acc + num, 0);
    }
    return answer;
}
