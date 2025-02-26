function solution(my_string, overwrite_string, s) {
    let first = my_string.substring(0, s);
    
    let second = overwrite_string;
    
    let third = my_string.substring(s + overwrite_string.length);
    
    return first + second + third;
}