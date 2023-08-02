//k의 개수
function solution(i, j, k) {
    let a ='';
    for(i; i<=j; i++){a = a + i}
	return a
}

// 개미 군단
function solution(hp) {
    // 5 3 1
    //장군개미 수
   let x = Math.floor(hp / 5)
    //병정개미 수 
   let y = Math.floor((hp - (x*5)) / 3)
   // 일개미 수
   let z = hp - (x*5) - (y*3)
   
   return x + y + z 
}