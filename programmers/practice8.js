// 배열 자르기

function solution(numbers, num1, num2) {
    return numbers.slice(num1,num2+1);
}

// 옷가게 할인 받기
function solution(price) {
    if(price >= 500000) {
        price *= 0.8;
    } else if(price >= 300000) {
        price *= 0.9;
    } else if(price >= 100000) {
        price *= 0.95;
    }
    return Math.floor(price);
}

// 자릿수 더하기