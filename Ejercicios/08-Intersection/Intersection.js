function intersection (arr1, arr2) {
  // Your code here:
  /* console.log(arr1);
  //                                 ^
  console.log(arr2);
  //                                      ^
  let result = [];
​
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]){
        result.push(arr1[i])
      }
    }
  }
  console.log(result);
  return result; */
​
  //SOFIA
  /* const arr3 = arr1.concat(arr2).sort(function(a, b){return a - b})
  //console.log(arr3)
  let repetidos = [];
  
  for (let i = 0; i < arr3.length; i++) {
    if(arr3[i] === arr3[i + 1]) repetidos.push(arr3[i])
    // console.log(repetidos)
  }
  return repetidos;  */
​
  //LEANDRO
    /* let arr = []	
    for(let el of arr1) {
        let inter = arr2.find(num => num === el)
        if(inter) arr.push(inter) 
      }
    return arr */
​
  //JUAN GERARDO
  /* return arr1.filter(function (n) {
    return arr2.indexOf(n) !== -1;
  }); */
​
  //EDINSON
  /* let data = [];
  data = arr1.concat(arr2).sort()
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === data[i + 1]){
      result.push(data[i]);
    }
  }
  return result */
​
  //EDUARDO
  /* let array = arr1;
  string = `${arr2.join()},`;
  coincidencia = [];
    
  console.log(string);
  for (let i = 0; i < array.length; i++) {
    let regExp = new RegExp(`${array[i]},`);
    console.log(regExp);
    string.search(regExp) !== -1 ? coincidencia.push(array[i]) : null;
  }
  return coincidencia; */
​
  //ARRAY ASOCIATIVO
  /* let arrayAsociativo = [];
  console.log(arr1);
  for (const num1 of arr1) arrayAsociativo[num1] = true;
  console.log(arrayAsociativo);
  return arr2.filter(num2 => arrayAsociativo[num2] === true) */
​
  //OBJETO
  /* let obj = {};
  console.log(arr1);
  for (const num1 of arr1) obj[num1] = true;
  obj
  return arr2.filter(num2 => obj.hasOwnProperty(num2)) //RODRIGO */
​
  //MAP
  const map = new Map();
  for (const num1 of arr1) map.set(num1, true);
  return arr2.filter(num2 => map.get(num2))
  
}
​
​
module.exports = intersection
​
​
console.log((intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20])))// [3, 10]
console.log((intersection([1, 3, 4, 7], [2, 6, 8, 10, 20])))// []
console.log((intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8])))// [10, 3]
console.log((intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8])))// [10, 3] 