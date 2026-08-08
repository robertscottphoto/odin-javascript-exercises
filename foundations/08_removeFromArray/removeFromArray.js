const removeFromArray = function(arr, arg) {
    newarr = []
    for(i = 0; i < arr.length; i++){
        console.log(arr[i])
        if(arr[i] == arg){
            continue
        }else{
            newarr.push(arr[i])
        }
    }
    return newarr
};


let test = removeFromArray([1,2,3,4], 0)
console.log(test)


// Do not edit below this line
module.exports = removeFromArray;
