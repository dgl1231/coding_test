// 문자열 내림차수 정렬
function solution(s) {
    var answer = '';
    var arr = [];

    for (var i = 0; i < s.length; i++) {
        arr.push(s[i].charCodeAt(0));
    }

    var arr2 = arr.sort(function (a, b) {
        return b - a;
    })

    var arr = [];
    for (var i = 0; i < s.length; i++) {
        arr.push(String.fromCharCode(arr2[i]))
    }

    answer = arr.join("");
    return answer;
}