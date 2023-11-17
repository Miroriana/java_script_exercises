// Create a function that displays a pattern like this:
//       1 
//     1
//   1 
// 1



// function displayPattern(rows){
//     for (let i=0;i<rows;i++){
//         var row="";
//         for(let j=0;j<rows;j++){
//             if(i===j){
//                 row += "1 ";
//             }else{
//                 row += '  ';
//             }
//         }
//         console.log(row);
//     }
// }
// displayPattern(5);


function displayPattern(rows){
    for (let i=0;i<rows;i++){
        var row="";
        for(let j=rows;j>=0;j--){
            if(i===j){
                row += "1 ";
            }else{
                row += '  ';
            }
        }
        console.log(row);
    }
}
displayPattern(5);