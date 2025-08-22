function solution(s) {
    return s
        .split("")
        .filter((ch, _, arr) => arr.indexOf(ch) === arr.lastIndexOf(ch))
        .sort()
        .join("");
}
