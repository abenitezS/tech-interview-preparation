const book = {
  id: 1,
  text:
    'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
}
export default function FindWordStartingWith (book, query) {
// Your code here:
/*   const txt = book.text.toLowerCase();
  query = query.toLowerCase();
  console.log(query);
  let result = [];
​
  if(txt.slice(0,query.length) === query){
    result.push(0)
  }
  for (let i = 1; i < txt.length; i++) {
    const sliced = txt.slice(i, i + query.length)
    if(txt[i - 1] === ' ' && sliced === query){
      result.push(i)
    }
  return result
 */
  /*   const word = ' ' + query.toLowerCase()
    const coincidences = []
    for (let i = 0; i < book.text.length; i++) {
      if (book.text[i] === word[0]){
        const wordBook = book.text.slice(i, i + word.length)
        if (wordBook === word) coincidences.push(i + 1)
      }
    }
    return coincidences
   */
    /* const txt = book.text.toLowerCase();
    const id = book.id;
    let result = [];
  ​
    let listWord = txt.split(' ');
    let punter = 1;
    listWord.map((item,i) => {    
      if (id>=punter) {
        if (' '+item.indexOf(' '+query)) {
          result.push(punter);
        }
        punter += item.length;
      }
    })
    return result 
    */
   const words = book.text.toLowerCase().split(' ') 
  const indexes = []
  let i = 0
  for (const word of words) {
    if (word.startsWith(query.toLowerCase())) indexes.push(i)
    i += word.length + 1
  }
  return indexes
}
module.exports = FindWordStartingWith

console.log(FindWordStartingWith(book, 'de'))  //[23]
console.log(FindWordStartingWith(book, 'un'))  //[6, 14, 43]
console.log(FindWordStartingWith(book, 'franco'))  //[]
console.log(FindWordStartingWith(book, 'era'))   //[0, 39] 





