function FindNeedle (haystack, needle) {
  // Your code here:
  //recorrer el haystack letra por letra
  //por cada letra del haystack, ver si coincide con la primera letra del needle
    //si coinciden, recorremos el needle
    //si llegamos al final, es porque el needle está contenido completamente y por tanto devolvemos el índice donde inician las coincidencias

    //si no coinciden, deescartamos y pasamos a la siguiente
    //si nunca la encontramos, retorno -1
    //si length needle > length haystack retorno -1
  
  /* for (let i = 0; i < haystack.length; i++) {   
    for (let j = 0; j < needle.length; j++) {      
      if(needle[j] !== haystack[i + j]) break;
      if(j === needle.length - 1) return i
    }
  }
  return -1 */

  for (let i = 0; i < haystack.length; i++) {
    let sliced = haystack.slice(i, i + needle.length);
    if(needle === sliced) return i
  }
  return -1
  
}

//Complejidad temporal ALT I

// haystack.length = n ; needle.length = m --> O(n*m)

//Peor casos:

//haystack = 'aaaaaaaaaaaab'
//needle = 'b'


//complejidad temporal ALT II

// haystack.length = n ; needle.length = m --> O(n*m)

//.slice() --> O(n)

module.exports = FindNeedle


console.log(FindNeedle('react-redux', 'redux'))//6
console.log(FindNeedle('pinky', 'puntual'))//-1
console.log(FindNeedle('rereredux', 'reredux'))//2