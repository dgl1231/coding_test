function solution(begin, end) {
    var answer = new Array(end - begin + 1).fill(0);

    for (var i = begin; i <= end; i++) {
        answer[i - begin] = block(i);
    }
    if (begin === 1) answer[0] = 0;
    return answer;
}

const block = (n) => {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && n / i <= 1e7) {
            return n / i;
        }
    }
    return 1;
}