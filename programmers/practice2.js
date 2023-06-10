// 중앙값 구하기
function solution(array) {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
  }


// 아이스 아메리카노 
// - 아메리카노 개수, 잔돈 구하기 
function solution(money) {
    var answer = [];
    const ameNum = Math.floor(money / 5500);
    const change = money - ameNum * 5500
    return [ameNum, change];
}

// 피자 나눠 먹기 (1)
function solution(n) {
    return Math.ceil(n / 7);
}

// 피자 나눠 먹기 (2)
const solution = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6
}