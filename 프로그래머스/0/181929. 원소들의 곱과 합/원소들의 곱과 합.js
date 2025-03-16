function solution(num_list) {
    var answer = 0;
    if (calculator(num_list) > calculator2(num_list)) {
        answer = 1;
    } else {
        answer = 0;
    }

    return answer;
}

const calculator = (num_list) => {
    let sum = 0;
    for (let i = 0; i < num_list.length; i++) {
        sum += num_list[i];
    }
    return sum * sum;
};

const calculator2 = (num_list) => {
    let mul = 1;
    for (let i = 0; i < num_list.length; i++) {
        mul *= num_list[i];
    }
    return mul;
};
