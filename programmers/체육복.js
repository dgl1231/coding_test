function solution(n, lost, reserve) {
    let answer = n - lost.length;
    //처음 수업참여 학생수

    // 빌려줄친구, 안가져온 친구가 없을시
    if (reserve.length === 0) {
        return answer;
    } else if (lost.length === 0) {
        return n;
    } else {

        let rLost = lost.filter((l) => !reserve.includes(l)); //lost에 reserve가 포함되어있는지 확인 안되어있으면 그대로를 리턴
        let rReserve = reserve.filter((r) => !lost.includes(r)); //반대

        // 포함되어지지않은 값을 추가( 겹치는값 )
        answer += lost.length - rLost.length;
        //정렬 오름차순
        rLost.sort((a, b) => a - b);

        //rLost.forEach((l)=>{
        //if(rReserve.includes(l-1)){
        //rReserve = rReserve.filter((r)=>r!==l-1);
        //answer ++;
        //}
        //else if(rReserve.includes(l+1)){
        //rReserve = rReserve.filter((r)=>r!==l+1);
        //answer++;
        //}
        //})
        //자기 요소들로 배열을 돌림  ???  왜 forEach문이 안돌아갈까요 ㅜㅅㅜ
        for (var i = 0; i < rLost.length; i++) {

            var l = rLost[i];

            //받는애가 주는애-1일때
            if (rReserve.includes(l - 1)) {
                rReserve = rReserve.filter((r) => r !== l - 1);
                answer++;
            }
            //받는애가 주는애 +1일때
            else if (rReserve.includes(l + 1)) {
                rReserve = rReserve.filter((r) => r !== l + 1);
                answer++;
            }
        }
    }
    return answer;
}