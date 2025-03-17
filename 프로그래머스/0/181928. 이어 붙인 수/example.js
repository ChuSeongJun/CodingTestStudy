function solution(num_list) {
    var answer = 0;
    let list1, list2;
    list1 = num_list.filter((n) => n % 2 === 0).join("");
    list2 = num_list.filter((n) => n % 2 !== 0).join("");
    answer = Number(list1) + Number(list2);

    return answer;
}
