// 문자열 곱하기
function solution(my_string, k) {
    let array= [];
    let a = 0;
    
    while ( a < k ) {
        array.push(my_string)
        a ++
    }
    
    return  array.join("")
}

// 다른 사람의 풀이
// repeat 함수 메모 
function solution(my_string, k) {
    return my_string.repeat(k)
}