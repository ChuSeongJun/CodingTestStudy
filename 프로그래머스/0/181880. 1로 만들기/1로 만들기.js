function solution(num_list) {
    return num_list.reduce((total, num) => total + cal(num), 0);
}

function cal(num) {
    if (num === 1) return 0;

    if (num % 2 === 0) {
        return 1 + cal(num / 2);
    } else {
        return 1 + cal((num - 1) / 2);
    }
}