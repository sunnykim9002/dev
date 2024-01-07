// 배열의 유사도
function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}

// 배열의 유사도 나의 풀이 
2
3
4
5
6
7
8
9
10
function solution(s1, s2) {
    var answer = 0;
    for (var i = 0; i < s1.length; i++){
        for (var j = 0; j < s2.length; j++){
            if(s1[i] === s2[j]) answer++;
        }
    }
    return answer;
}