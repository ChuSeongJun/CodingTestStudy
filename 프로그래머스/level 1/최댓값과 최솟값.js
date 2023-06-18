function solution(s) {
    const numbers = s.split(' ').map(Number);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return `${min} ${max}`;
}


console.log(solution("1 2 3 4"));