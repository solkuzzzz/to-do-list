const array = ['good', 'better', 'the best', 'good']

function countWords(array) {
  const result = {};
  
  for (let i = 0; i < array.length; i++) {
    const word = array[i]
    /*result[`${array[i]}`] = array.filter(el => el === array[i]).length*/
    if (!result[word]) {
      result[word] = 1
    } else {
      result[word] ++
    }
  }
  return result;
}

console.log(countWords(array))