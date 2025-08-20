function solution(quiz) {
    let result = 0;
    return quiz.map((s) => {
        const [x, op, y, , z] = s.split(" ");
        result = op === "+" ? Number(x) + Number(y) : Number(x) - Number(y);
        return result === Number(z) ? "O" : "X";
    });
}
