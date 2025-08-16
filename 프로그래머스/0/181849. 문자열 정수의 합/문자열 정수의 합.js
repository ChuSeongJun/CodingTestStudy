function solution(num_str) {
    var answer = 0;
    answer = num_str.split("").reduce((acc, num) => acc + Number(num), 0);
    return answer;
}
