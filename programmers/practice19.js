// 문자열 곱하기
function solution(my_string, k) {
    let array= [];
    let a = 0;
    
    while ( a < k ) {
        array.push(my_string)
        a ++
    }
    
    return  array.join("")
}

// 다른 사람의 풀이
// repeat 함수 메모 
function solution(my_string, k) {
    return my_string.repeat(k)
}



// 수 조작하기 
function solution(n, control) {
    let array = control.split("")
    let answer = n;
      
      
      for ( let a of array) {
          if( a == "w")
          {answer = answer +1;}
  
      
      if ( a== "s"){
          answer = answer -1;}
       
      
      if ( a == "d") {answer = answer + 10} 
      if ( a == "a") { answer = answer - 10}
      }
      return answer 
    
  }

// 다른 사람의 풀이 
// map 안에서 함수 쓰기

function solution(n, control) {
    return [...control].map(x => setValue(x)).reduce((a, b) => a+b, n);
}
function setValue(s){
    return s==="w" ? 1 : s==="s" ? -1 : s==="d" ? 10 : -10;
}