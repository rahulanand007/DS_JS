//This solution is wrong //////////////////////////////////

//Pivot helper function
function pivot(arr, start=0,end =arr.length-1){
    let pivot = arr[start]
    let swapIndex = 0

    for(let i=start+1;i<arr.length-1;i++){
        if(pivot>arr[i]){
            swapIndex++
            let temp = arr[swapIndex]
            arr[swapIndex] = arr[i]
            arr[i]= temp 
        }
    }
    let temp = arr[start]
    arr[start] = arr[swapIndex]
    arr[swapIndex] = temp
    
    return swapIndex

}



function quickSort(arr,left =0, right =arr.length-1){
    if(left<right) {
    let pivotIndex = pivot(arr,left,right)
    //left
    quickSort(arr,left,pivotIndex) 
    //right
    quickSort(arr,pivotIndex,right-1)
    }
    return arr;
} 


console.log(quickSort([4,5,12,1,8,9])) 