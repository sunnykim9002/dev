
// 정수 찾기
function solution(num_list, n) {
    while(num_list.includes(n)) {
        return 1
    }
    return 0
}

// 문자열 정렬하기(1)
function solution(my_string) {
    
    let array = [...my_string]
    let numArray = [];
    
    for(let a of array) {
        if (Number(a) == a ) numArray.push(+a) 
    }
    
    return numArray.sort((a,b)=> a-b)
    
}

// 문자열 정렬하기(1) 다른사람의 풀이
// 참고 - 정규식 사용
// 참고 - map 함수에 v 붙이기
function solution(my_string) {
    return my_string.replace(/[^\d]/g,'').split('').map(v=>+v).sort();
}