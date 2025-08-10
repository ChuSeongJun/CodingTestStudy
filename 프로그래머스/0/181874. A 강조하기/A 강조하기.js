function solution(myString) {
    return [...myString].map(char => {
        if (char === 'a') return 'A';
        if (char >= 'B' && char <= 'Z') return char.toLowerCase();
        return char;
    }).join('');
}