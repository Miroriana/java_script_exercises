function displayPattern3(rows) {
    for (let i = 1; i <= rows; i++) {
      let pattern = '';
      for (let j = 1; j <= rows; j++) {
        pattern += j <= i ? '1 ' : '0 ';
      }
      console.log(pattern.trim());
    }
  }
  displayPattern3(5);