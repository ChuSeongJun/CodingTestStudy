function solution(myString) {
    return myString
        .split("")
        .map((arr) => (arr >= "a" && arr <= "k" ? "l" : arr))
        .join("");
}
