// Create a function that displays a pattern like this:
// 1 1 1 1 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 1 1 1 1



// function displayPattern(rows){
//     for (let i=0;i<rows;i++){
//         var row="";
//         for(let j=0;j<rows;j++){
//             if(j===0 || i=== rows-1 || i===0 ||j=== rows-1){
//                 row += "1 ";
//             }else{
//                 row += '0 ';
//             }
//         }
//         console.log(row);
//     }
// }
// displayPattern(5);




function pattern(rows) {
    for (let i = 0; i < rows; i++) {
        var arr = ' ';
        for (let j = rows; j >= 0; j--) {
            if (i === j) {
                arr += '1 ';
                    else{
                    arr += "  ";
                }
            }

        }
        console.log(arr);
    }
}
pattern(5);