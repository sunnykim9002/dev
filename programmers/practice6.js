// 문자열 뒤집기
function solution(my_string) {
    // 배열로 만들기
    var answer = [...my_string];
    //뒤집고 배열 문자로
    return answer.reverse().join("");
}

// 짝수 홀수 개수 
function solution(num_list) {
    var answer = [];
    let odd = 0;
    let even= 0;
    
    for(i=0; i<=num_list.length; i++) {
    if( num_list[i] % 2 == 1)
        odd = Number(odd) + 1;
    else if (num_list[i] % 2 == 0 ) 
        even = Number(even) + 1;
    }
    
        return [even, odd];
}