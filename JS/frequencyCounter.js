let arr1 = [1,2,3,2,5]
let arr2 = [25,4,9,4,1]


//Solution 1 with the time complexity of O(n2) it also doesnt work with dublicate values
function same1(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let count =0
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr1.length;j++){
            if((arr1[i]*arr1[i])===arr2[j]){
                count++
            }
        }
    }
    
    if(count==arr1.length){
        return true
    }else{
        return false
    }
}


//Solution 2 with the time complexity of O(n2) works with dublicates
function same2(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }

    for(let i=0;i<arr1.length;i++){
        let index = arr2.indexOf(arr1[i]*arr1[i])
        console.log(index)
        if(index===-1){
            return false
        }
        arr2.splice(index,1)
    }
    return true
}


//Solution 3 witch is refactored and with best time complexity O(n)
function same3(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }

    counter1 = {}
    counter2 = {}

    //for counting the no of times the elemnt occurs in that particular array
    for(let val of arr1){
        counter1[val]= (counter1[val] || 0) + 1
    }
    for(let val of arr2){
        counter2[val] = (counter2[val] || 0) +1
    }

   for(let key in counter1){
    if(!(key**2 in counter2)){
        return false
    }
    if(counter1[key] !==counter2[key**2]){
        return false
    }
   }
   return true

}



console.log(same3(arr1,arr2))