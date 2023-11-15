// Create a function that determines the age classification of people:
// Bellow are classifications according to specific conditions:
 
//     MIMICRY: 			0 - 12
//     SELF-DISCOVERY: 	13 - 19
//     COMMITMENT: 		20 - 45
//     LEGACY:			46 - Above

function classification(age){
    if( age >=0 && age <= 12){
        console.log('MIMICRY');
    }else if(age > 12 && age <=19){
        console.log('SELF-DISCOVERY');
    }else if(age >19 && age <= 45){
        console.log('COMMITMENT');
    }else {
        console.log('LEGACY');
    }
}
var age=14;
console.log(classification(age));