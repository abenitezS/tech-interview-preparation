function SumArray (arr, n) {
  // Your code here:
  /* for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === n) return true
    }
  }
  return false */
​
  let start = 0;
  let end = arr.length - 1;
​
  while(start < end){
    let suma = arr[start] + arr[end];
​
    if(suma > n) end -= 1;
    else if(suma < n) start += 1;
    else return true
  }
  return false
}
​
module.exports = SumArray
​
​
// Complejidad Alternativa I --> O(n**2)
// Complejidad Alternativa II -->O(n)
​
​
//ordenados
console.log(SumArray([2, 4, 5, 7], 9))//true
console.log(SumArray([2, 4, 5, 9], 12))//false
console.log(SumArray([2, 5, 9], 4))//false
//desordenados
console.log(SumArray([4, 2, 9, 5], 7))//true
console.log(SumArray([5, 2, 9, 4], 12))//false
