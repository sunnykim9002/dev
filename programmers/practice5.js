// 배열 거꾸로
function solution(num_list) {
    return num_list.reverse()
}

// 짝수는 싫어요
function solution(n) {
    let arr = [];
    for (i=1; i<=n; i++) {
        arr.push(i)        
    }
return arr.filter(x => x % 2 === 1)

}

// 피자 나눠 먹기
function solution(slice, n) {
    let number = 1;
     while( slice*number < n )
       number = number + 1
    
    return number 
}
