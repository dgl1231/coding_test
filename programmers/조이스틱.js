function solution(name) {
    let answer = 0;
    //A가 아닌 알파벳의 이동값 계산
    for (let i = 0; i < name.length; i++) {
        let sum = name[i].charCodeAt() - "A".charCodeAt();
        answer += sum > 13 ? 26 - sum : sum;
    }
    let minMove = name.length - 1;
    for (let i = 1; i < name.length; i++) {
        //연속된 A값 이면 계속 돌게
        if (name[i] === "A") {
            for (var j = i + 1; j < name.length; j++) {
                if (name[j] !== "A") {
                    break;
                }
            }
            //i~j는 연속된 A
            const left = i - 1; // i의왼쪽
            const right = name.length - j; // j의 오른쪽
            // 왼-> 오, A가 나올때 이동방향을 바꾸는 것 중 최솟값을 찾음
            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);
            // lfet, right 둘중 하나가 0이면 한방향으로감
            // 0이 아닐시 중간에 방향을 바꾸는 경우 = 한번돌아가야함 = *2
            i = j;
        }
    }
    return answer + minMove;
}

/*
function solution(name) {
    let answer = 0;
    let nameArr = [0];

    for (let i = 0; i < name.length; i++) {
        // 문자열을 순차적으로 조회해서 A를 찾음
        if (name[i] === "A") {
            if (i === 0) {//처음부터 A를 만났을경우 뒤로갈것
                nameArr.push(searchA(name) - 1);
            }
            else if (name[i - 1] !== "A") {
                nameArr.push(searchA(name.slice(i)) - (i - 1));
            }
            answer++; // 우측으로 이동한 횟수
        } else {
            //A가 아닐시 알파벳 바꾸기
            answer += upDown(name, i) + 1;
        };
    }
    //Math.max(...arr)는 뒤로이동을 통해 최대이득을 본횟수
    return answer - Math.max(...nameArr) - 1;
    //마지막 -1은 마지막알파벳을 변환후 우측이동을 할 필요가 없기때문.
}

// 알파벳바꿀때 위아래 이동횟수 세주는 함수
const upDown = (name, i) => {
    const aToz = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let count = aToz.indexOf(name[i] < 13) ? aToz.indexOf(name[i]) : 26 - aToz.indexOf(name[i]);
    return count;
};

// 연속된 A의 갯수를 세줄것
const searchA = (name) => {
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        if (name[i] !== "A") break;
        count++
    }
    return count;
};*/


