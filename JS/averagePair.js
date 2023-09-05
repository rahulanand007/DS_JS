/*Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)*/

function averagePair(arr, target){
    // add whatever parameters you deem necessary - good luck!
    let i=0
    let j = arr.length -1
  
    while(i<j){
      
      let avg = (arr[i]+arr[j]/2)
  
      if(avg===target){
        return true
      }
  
      if(avg<target){
        i++
      }else{
        j--
      }
    }
    return false
  }