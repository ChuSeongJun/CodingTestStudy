function solution(rank, attendance) {
    var answer = 0;
    let array = [];
    array = rank
        .map((num, index) => ({ number: index, rank: num }))
        .filter((num, index) => attendance[index] === true)
        .sort((a, b) => a.rank - b.rank)
        .slice(0, 3);

    const [a, b, c] = array.map((arr) => arr.number);
    return 10000*a+100*b+c
}
