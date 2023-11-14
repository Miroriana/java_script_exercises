// 10th question
function pattern(rows, columns) {
    for (let i = 0; i < rows; i++) {
        let rowPattern = '';
        for (let j = 0; j < columns; j++) {
            rowPattern += '* ';
        }
        console.log(rowPattern);
    }
}
pattern(4, 5);

// function stars(rows, cols) {
//     for(i=0; i<rows; i++){
//         console.log('* '.repeat(cols));
//     }
//   }
//   stars(4, 5);

// function pattern(rows,columns){
//     for( i=0; i< rows;i++){
//         console.log('* '.repeat(columns));
//     }
// }
// pattern(3,5);