// 배열의 평균

function solution(numbers) {
    const length = numbers.length;
    
    let sum = numbers.reduce((a,b)=> a + b);
    
    return sum/length
}