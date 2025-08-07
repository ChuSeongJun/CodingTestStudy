function solution(str_list) {
    let lIndex = -1;
    let rIndex = -1;

    lIndex = str_list.indexOf("l");
    rIndex = str_list.indexOf("r");

    if (lIndex === -1 && rIndex === -1) return [];
    if (lIndex === -1) return str_list.slice(rIndex + 1);
    if (rIndex === -1) return str_list.slice(0, lIndex);

    return lIndex < rIndex ? str_list.slice(0, lIndex) : str_list.slice(rIndex + 1);
}
