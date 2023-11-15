function displayPattern(rows) {
  for (let n = 0; n < rows; n++) {
    var pattern = [];
    for (let i = rows-1 ; i >= 0 ; i--) {
      if (i >= n) {
        pattern += '1 ';
      }else{
        pattern += '0 ';
      }
    }
    console.log(pattern);
  }
  
}
// Example usage with 4 rows
displayPattern(4);