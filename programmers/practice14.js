
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