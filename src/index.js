module.exports = function multiply(first, second) {
  let firstNumber = Array.from(first).reverse();
  let secondNumber = Array.from(second).reverse();
  let len = firstNumber.length + secondNumber.length + 1;
  let result = [];
  let numberOfMultiply;
  let pos;

  for(var i = 0; i< len;i++) {
    result[i] = 0;
  }

  for(let i = 0; i < firstNumber.length; i++){
    let residue = 0;
    for(let j = 0; j < secondNumber.length; j++){
      numberOfMultiply = firstNumber[i]*secondNumber[j];
      pos = i + j + 1;
      numberOfMultiply += result[pos];
      numberOfMultiply += residue;
      result[pos] = Math.floor(numberOfMultiply %10);
      residue = Math.floor(numberOfMultiply / 10);
    }
    result[pos + 1] = residue;  
  }
  if(result[0] == '0')
  {
    result.shift();
  }
  result = result.reverse();
  if(result[0] == '0')
  {
    result.shift();
  }
  return result.join("");
}
