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