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

// 양꼬치 
function solution(n, k) {
    // 양꼬치 금액
    let amount1 = n * 12000;
    let amount2 = k * 2000;
    
    //뺄 음료수 값
    let discount = Math.floor(n / 10) * 2000;
    if ( n < 10) {
        discount = 0;
    }
    return amount1 + amount2 - discount;
}

//모음제거
function solution(my_string) {
    
    const str = 'aeiou'
    let newString = my_string.split('').filter((el)=>(!str.includes(el))).join('')
    
    return newString
    
}