var answer = [];
const hanoi = (n, front, back, middle) => {

    if (n == 1) {
        answer.push([front, back]);
    } else {
        hanoi(n - 1, front, middle, back);
        answer.push([front, back]);
        hanoi(n - 1, middle, back, front)
    }
}

function solution(n) {

    hanoi(n, 1, 3, 2);

    return answer;
}