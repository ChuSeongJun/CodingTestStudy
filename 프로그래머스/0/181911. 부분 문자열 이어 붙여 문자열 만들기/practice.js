function solution(my_strings, parts) {
    return my_strings.reduce((result, str, i) => {
        const [s, e] = parts[i];
        return result + str.substring(s, e + 1);
    }, "");
}

//   reduce((누적값, 현재요소, 인덱스) => { ... }, 초기값)

function solution(my_strings, parts) {
    var answer = "";
    parts.forEach(([a, b], i) => {
        answer += my_strings[i].substring(a, b + 1);
    });
    return answer;
}
