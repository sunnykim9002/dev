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

// 문자열 안에 문자열
function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2
}

// 세균 증식
function solution(n, t) {

    return n * Math.pow(2,t);
}

// 대문자와 소문자
function solution(my_string) {
    let arr = [];

for (let i = 0; i < my_string.length; i++) { 
	if (my_string[i] === my_string[i].toUpperCase()) {
		arr.push(my_string[i].toLowerCase()); 
	} else {
		arr.push(my_string[i].toUpperCase()); 
	}
    }
    return arr.join("")
}