/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
*/

function areThereDuplicates(...nums) {
    // good luck. (supply any arguments you deem necessary.)
    let counter = {}
  
      for(let i=0; i<nums.length;i++){
        counter[nums[i]] = counter[nums[i]]? counter[nums[i]]+1 : 1
      }
      for(let i=0; i<nums.length;i++){
        if(counter[nums[i]]>1){
          return true
        } 
      }
      return false
  }