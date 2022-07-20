var s = "((())))()()()))(()"

function solution(s) {
    let answer = true;

    let first = s.charAt(0);
    let last = s.charAt(s.length - 1);


    if (first === ')' && last === '(') return false;

    let f = s.split('').filter((s) => s === '(').length;
    let u = s.split('').filter((s) => s === ')').length;

    if (f !== u) return false;

    let c = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '(') c++;
        else c--;
        if (c < 0) return false;
    }


    return answer;
}