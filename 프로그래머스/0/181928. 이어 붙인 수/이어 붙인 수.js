function solution(num_list) {
    var answer = 0;
    let list1 = [];
    let list2 = [];
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            list1.push(num_list[i]);
        } else {
            list2.push(num_list[i]);
        }
    }
    answer = Number(list1.join("")) + Number(list2.join(""));

    return answer;
}
