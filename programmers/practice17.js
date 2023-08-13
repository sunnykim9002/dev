// 가까운 수 
function solution(array, n) {
    let sortArray = array.sort((a,b)=> (a-b))
    let absArray = [...sortArray].map((m)=> Math.abs(m - n));
    let minNum = Math.min(...absArray)
    return sortArray[absArray.indexOf(minNum, 0)]
}