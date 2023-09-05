/*
Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true*/


function validAnagram(str1,str2){
    if((str1.length &&str2.length)===0){
          return true
      }
      if(str1.length !==str2.length){
          return false
      }
  
      let counter = {}
  
      for(let i=0;i<str1.length;i++){
          let char = str1[i]
          counter[char]= counter[char]? counter[char]+1 : 1
      }
  
      for(let i=0;i<str2.length;i++){
          let char  = str2[i]
  
          if(!counter[char]){
              return false 
          }else{
              counter[char] -= 1
          }
      }
      return true
  }