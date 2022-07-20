var s = "aaabbbbaababbbaabbabaabbaadsdfffsdfsfdsfs"


function solution(s) {
    let st = [];


    for (let i = 0; i < s.length; i++) {
        //st배열에 s[i] 값을 하나씩 push
        st.push(s[i]);
        //st의 마지막 index값과 그앞의 index값이 같으면
        //두개 다 날려버림(pop())
        if (st[st.length - 1] === st[st.length - 2]) {
            st.pop();
            st.pop();
        }
    }
    //결국 st에는 한쌍이 되지 못해서 사라져버린 값들 뿐,,

    return st.join("") === '' ? 1 : 0;
    //join은 배열안의 모든요소를 연결, ("")의 경우 모든요소가 이어짐 ex) ['a',b,'c'] == abc
    //let a = 0;
    //if(st.join("")===''){
    //    a = 1;
    //}else{
    //    a = 0;
    //}
}