function solution(my_string, indices) {
    return my_string
        .split("")
        .filter((char, index) => !indices.includes(index))
        .join("");
}
