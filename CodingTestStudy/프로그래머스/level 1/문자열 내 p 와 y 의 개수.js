function solution(s) {
  s = s.toLowerCase(); // 대소문자 구분을 없애기 위해 모두 소문자로 변환
  return s.split('p').length === s.split('y').length;
}
