function solution(num_list) {
    var answer = 0;
    let sum = 0;
    for (let i = 0; i < num_list.length; i += 2) {
        answer += num_list[i];
    }

    for (let i = 0; i < num_list.length; i++) {
        sum += num_list[i];
    }

    if (answer >= sum - answer) {
        return answer;
    }else{
        return sum-answer
    }
}
