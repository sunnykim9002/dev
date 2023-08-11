//접두사인지 확인하기



// 나의 풀이
function solution(my_string, is_prefix) {
    let array = [];
    let answer = [];

    for(i=0; i<my_string.length; i++) {
        array.push([...my_string].splice(0,i))
    }

    for (k=0; k<array.length; k++) {
        answer.push(array[k].join(""))
    }

    if (answer.includes(is_prefix))
        return 1
    else {
        return 0
    }

}

// 다른 사람의 풀이 
function solution(my_string, is_prefix) {
    return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0
}