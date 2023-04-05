let array = [-1,0,1,2,-1,-4];
let arr = [];


for(let i = 0 ; i < array.length ; i ++) {
    let temp = []
    let count = 0 ;
    for ( let j = 0 ; j < array.length ; j ++){
        if(temp.length < 3){
            if (array[i] !== array[j]) {
                temp.push(array[j])
                count++
            }
            if(temp.length == 3){
                for(let k = 0 ; k < temp.length ; k ++){
                    count = count + k
                    if(count <= 0 ){
                        arr.push(temp)
                    }
                }
                arr.push(temp)
            }
        }
       
    }
    
}
console.log(arr);