/**
 Complete the solution so that the function will break up camel casing, using a space between words.
**/

function solution(string) {
    if (/[A-Z]/.test(string) == true){
        return string.split(/[A-Z]/).splice()
    } 
}

console.log(solution("tesTing"))


/**
 a solution 

 function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}
**/