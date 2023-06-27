// 배열 원소 길이

function solution(strlist) {
    return strlist.map((x)=> x.length);
}

// 머쓱이보다 키 큰 사람
function solution(array, height) {
    return array.filter((x)=> x>height).length
    }


// 순서쌍의 개수

    function solution(n) {
        let answer = "0";
        for( i = 0; i<=n; i ++) {
            if( n % i == 0) {
                answer ++
            }
        }
        return answer
    }