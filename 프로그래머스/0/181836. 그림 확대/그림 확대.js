function solution(picture, k) {
    return picture.flatMap((row) =>
        Array(k).fill(
            row
                .split("")
                .map((char) => char.repeat(k))
                .join("")
        )
    );
}
