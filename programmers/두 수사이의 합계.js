a = 3
b = 5
//ex
result = 12

//a와 b사이의 값을 더하는 문제
function solution(a, b) {
    var answer = 0;
    if (a < b) {
        for (var i = a; i <= b; i++) {
            answer = answer + i;
        }
    } else {
        for (var i = b; i <= a; i++) {
            answer = answer + i;
        }
    }

    if (result = answer) return true;
    return answer;
}