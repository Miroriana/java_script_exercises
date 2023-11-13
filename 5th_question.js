        // 5th question
        function arrayAddiction(array){
            var sum=0;
        for (let index=0; index < array.length; index++){
            sum += array[index];
        }
        return sum;
        }
        var array=[1,2,3,4,5,6,7];
        let result= arrayAddiction(array);
        console.log(result);