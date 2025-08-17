function solution(order) {
    let americano = 0;
    let latte = 0;
    for (const v of order) {
        if (v.includes("cafelatte")) {
            latte++;
        } else {
            americano++;
        }
    }
    return 4500 * americano + 5000 * latte;
}
