function solution(numbers) {
    const words = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    let s = numbers;
    for (let d = 0; d < 10; d++) s = s.split(words[d]).join(String(d));
    return Number(s);
}
