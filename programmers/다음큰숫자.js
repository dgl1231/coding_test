function solution(n) {
    var answer = 0;
    nToString = n.toString(2);
    for (let i = n + 1; i < 1000000; i++) {
        iToString = i.toString(2);
        if (nToString.split('1').length - 1 === (iToString.split('1').length - 1)) {
            answer = i;
            break;
        }
    }
    return answer;
}