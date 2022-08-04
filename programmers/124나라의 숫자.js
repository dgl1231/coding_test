function solution(n) {
    var answer = '';
    var num = [4, 1, 2];

    while (n) {
        answer = num[n % 3] + answer;
        n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
    }
    return answer;
}
//3진법과 비슷하나 3의배수는 3진법 끝자리가 0이왔다면 124나라는 끝자리가 4가옴
//ex) 124 : 9 = 24      120(3진법) : 9 = 100
//ex) 124 : 15 = 114    120(3진법) : 15 = 120