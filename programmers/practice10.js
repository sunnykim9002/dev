2
3
4
5
6
7
function solution(my_string) {

    let mystringArray = [...my_string];
    return mystringArray.filter((x)=> !isNaN(Number(x))).map((x)=> Number(x)).reduce((a,b) => (a+b))

}