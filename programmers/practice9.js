// 특정 문자 제거하기
function solution(my_string, letter) {
    return [...my_string].filter((x)=> x !=letter).join("")
}

// 각도기 
function solution(angle) {
    if(angle == 180) {
        return 4
    }
    if(90< angle && angle <180 ) {
        return 3
    }
    if(angle == 90) {
        return 2
    }
    if (angle < 90) {
        return 1
    }
    
}