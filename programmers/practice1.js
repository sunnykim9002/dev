
// 두개의 숫자 비교
function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}

// 두수의 나눗셈
function solution(num1, num2) {
    return parseInt(num1/num2*1000);
}

// 분수의 덧셈
function solution(denum1, num1, denum2, num2) {
    // 분자
    let topNum = num1*denum2 + num2*denum1
    // 분모
    let botNum = num1*num2
    // 최대 공약수
    let maximum = 1
    // 약분
    for(let i = 1 ; i <= topNum ; i ++) {
        if(topNum%i === 0 && botNum%i === 0) {
            maximum = i
        }
    }
    return [topNum/maximum, botNum/maximum]
}


