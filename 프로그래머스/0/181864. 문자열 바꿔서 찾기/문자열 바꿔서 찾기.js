function solution(myString, pat) {
    const newString = [...myString].map((str) => cal(str)).join("");
    return newString.includes(pat) ? 1 : 0;
}

const cal = (str) => {
    if (str === "A") {
        return "B";
    } else {
        return "A";
    }
};
