function solution(num_list) {
    var answer = 0;
    let number = 0;
    while (1) {
        if (num_list[number] < 0) {
            return (answer = number);
        }
        number++;
        if (number === num_list.length) {
            return (answer = -1);
        }
    }
}
