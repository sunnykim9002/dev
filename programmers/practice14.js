
// 한번만 등장한 문자
function solution(s) {
    let array = []
    
    for ( let i of s ){
        if (s.indexOf(i) === s.lastIndexOf(i))
            array.push(i)
    }
    
    return array.sort().join("")
}

// 중복된 문자 제거 set 사용
// const set = new Set() 함수 사용 
function solution(my_string) {
    let stringArray = [...my_string]
    let set = new Set(stringArray)
    return [...set].join("")
}

// n의배수 
function solution(n, numlist) {

    let array = [];
    for( let c of numlist ) if (c % n == 0)
        array.push(c)
    return array;
}

// n의 배수 다른 사람 풀이 
function solution(n, numlist) {
    return numlist.filter(num => num % n === 0);
}

//암호 해독
function solution(cipher, code) {
    let array = [...cipher]
    let answer = [];
    for(i = 1; i<=array.length; i++) {
        answer.push(array[(code *i)-1])

    }
    return answer.join("")
}

// 없는 숫자 더하기
function solution(numbers) {
    let numAll = [];
    for(i=0; i<10; i++)
    {numAll.push(i)}
    let arrayTotal = [...numAll, ...numbers]
    let answer = [];
    for(let c of arrayTotal) {
        if(arrayTotal.indexOf(c) === arrayTotal.lastIndexOf(c)) {
            answer.push(c)
        }
    }
    return answer.reduce((a,b)=> a+b)
}

//없는 숫자 더하기 다른 사람 풀이
function solution(numbers) {
    let answer = 0;

    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) answer += i;
    }

    return answer;
}
