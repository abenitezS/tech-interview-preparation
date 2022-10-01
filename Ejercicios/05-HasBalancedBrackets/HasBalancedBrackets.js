function HasBalancedBrackets (string) {
  // Your code here:
  // guardamos en arreglos los open y closed brackets para ver si coinciden o no
  let validOpenBrackets = ['{', '[', '('];
  let validCloseBrackets = ['}', ']', ')'];
  // creamos un arreglo donde vamos a ir guardando los openBrackets
  let openBrackets = []
  // iteramos sobre el string
  for (let i = 0; i < string.length; i++) {
    let bracket = string[i]
    //verificamos si es un bracket que abre
    if(validOpenBrackets.includes(bracket)){
      //pusheamos el valor en un arreglo de openbrackets
      openBrackets.push(bracket)
    }
    //verificamos si es un bracket que cierra
    if(validCloseBrackets.includes(bracket)){
      //guardamos la posición actual del closed bracket
      let index = validCloseBrackets.indexOf(bracket)
      //buscamos con el índice en el otro arreglo si está el hermano
      let brother = validOpenBrackets[index]
      //buscamos y verificamos si el último agregado coincide con el hermano del closed bracket
      let lastOpen = openBrackets[openBrackets.length -1]
      if(lastOpen === brother){
        //si coinciden lo elimino del arreglo openBrackets
        openBrackets.pop()
        //para comprobar que hayan closed brackets sin pareja (agregar cuando finalice todo el 
        //recorrido explicativo)
      }else return false;
    }
  }
  //devolvemos false o true según si el arreglo openBrackets está vacío o tiene elementos, 
  //respectivamente
  return openBrackets.length ? false : true
};
module.exports = HasBalancedBrackets;

console.log(HasBalancedBrackets('{[]()}'))//true
console.log(HasBalancedBrackets('{[(])}'))//false
console.log(HasBalancedBrackets('{[('))//false
console.log(HasBalancedBrackets('{[([{()[]{}}])]}'))//true
console.log(HasBalancedBrackets('{[]}}'))//false
