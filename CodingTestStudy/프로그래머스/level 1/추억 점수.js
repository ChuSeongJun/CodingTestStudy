function solution(name, yearning, photo) {
    const answer = [];
    for (let i = 0; i < photo.length; i++) {
        let score = 0;
        for (let j = 0; j < photo[i].length; j++) {
            const idx = name.indexOf(photo[i][j]);
            if (idx !== -1) {
                score += yearning[idx];
            }
        }
        answer.push(score);
    }
    return answer;
}


console.log(solution(["may", "kein", "kain", "radi"],[5, 10, 1, 3],[["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]))