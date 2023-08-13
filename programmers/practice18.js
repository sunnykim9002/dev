// 인덱스 바꾸기 
// 구조분해할당 이용
function solution(my_string, num1, num2) {
    let answer = my_string.split("");
    [answer[num1], answer[num2]] = [answer[num2], answer[num1]];
    
    return answer.join("")
}


// 가장 큰 수 찾기
function solution(array) {
    let maxNum = Math.max(...array);
    let indexNum = array.indexOf(maxNum);
    
    return [maxNum, indexNum]
}

//이어 붙인 수 
function solution(num_list) {
    let even =[]
    let odd = []
   for( let a of num_list) {
       a % 2 ==0 ? even.push(a) : odd.push(a)
   }
    
    return Number(even.join("")) + Number(odd.join(""))
    //parseInt나 Number 대신 + 붙여서 사용하면 더 좋을 듯하다.
    // for in // for of 차이점 for in 은 객체에서 사용하면 좋을 듯 하다.
    // return +even.join("") + +odd.join("")
}