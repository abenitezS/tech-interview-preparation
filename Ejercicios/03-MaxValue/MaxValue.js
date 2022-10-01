function MaxValue (shares) {
  // Your code here:
  //Alternativa I
  // let max = shares[1] - shares[0];
  // for (let i = 0; i < shares.length - 1; i++) {
  //   for (let j = i + 1; j < shares.length; j++) {
  //     let diferencia = shares[j] - shares[i];
  //     if(diferencia > max) max = diferencia;
  //   }
  // }
  // return max

  //Alternativa II
  let max = shares[1] - shares[0];
  let minPrice = shares[0];

  for (let i = 1; i < shares.length; i++) {
    let diferencia = shares[i] - minPrice;
    max = Math.max(max, diferencia);
    minPrice = Math.min(minPrice, shares[i]); 
  }
  return max
}

module.exports = MaxValue

//Complejidad Alternativa I--> O(n**2)
//Complejidad Alternativa II --> O(n)


console.log(MaxValue([4, 3, 2, 5, 11]))// 9
console.log(MaxValue([23, 7, 3, 4, 8, 6]))// 5
