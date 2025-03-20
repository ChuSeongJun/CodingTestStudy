function solution(num_list) {
    var answer = num_list;
    let newList = num_list.slice(-2);
    newList[0] < newList[1] ? answer.push(newList[1] - newList[0]) : answer.push(newList[1] * 2);
    return answer;
}
