function solution(n, control) {
    const calculator = { w: -1, s: +1, d: +10, a: -10 };
    return [...control].reduce((acc, cur) => acc + calculator[cur], n);
}

// control 문자열을 배열로 변환 ([...'wsda'] → ['w', 's', 'd', 'a'])
// reduce를 사용하여 초기값 n에서 각 문자의 calculator 값을 더함.
