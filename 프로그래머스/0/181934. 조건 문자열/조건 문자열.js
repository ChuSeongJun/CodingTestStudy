function solution(ineq, eq, n, m) {
    var answer = 0;
    const result = sol[ineq + eq];
    answer = Number(result(n, m));
    return answer;
}

const sol = {
    ">=": (n, m) => n >= m,
    "<=": (n, m) => n <= m,
    ">!": (n, m) => n > m,
    "<!": (n, m) => n < m,
};
