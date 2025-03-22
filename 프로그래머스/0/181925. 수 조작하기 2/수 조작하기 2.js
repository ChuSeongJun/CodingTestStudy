function solution(arr, queries) {
    const swap = ([i, j]) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    queries.forEach(swap);
    return arr;
}
