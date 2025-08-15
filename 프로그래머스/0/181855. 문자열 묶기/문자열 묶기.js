function solution(strArr) {
    const count = {};

    for (const str of strArr) {
        count[str.length] = (count[str.length] || 0) + 1;
    }

    return Math.max(...Object.values(count));
}
