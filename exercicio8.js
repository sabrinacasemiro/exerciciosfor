const array = [1,2,5,6,1,4,8,5,3,2,1,5,6,4,8,0,3,6,5,9,6];

//numero >= 8

function somas(){
    for(let i = 0; i < array.length; i++){
        if(array[i] + array[i + 1] < 8){
            console.log(array[i] + ' e ' + array[i+1]);

        }

    }
}

somas();