// xndir 1
// Given a number print its digits count.

let count = ''
let arr =[]
for(let num =+prompt('');num;num=(num-num%10)/10){
    arr.push(Math.abs(num%10))
} for(let i = 0; i < arr.length; i++){
        count++
} console.log(+count)

// xndir 2
// Count numbers of digit 9 in a number

let count = ''
let arr =[]
for(let num =+prompt('');num;num=(num-num%10)/10){
    arr.push(Math.abs(num%10))
} for(let i = 0; i < arr.length; i++){
     if(arr[i]===9 ){
       count++
    } 
} console.log(+count)

// xndir 3
// Given two numbers. Print powers of 2 between that numbers. (without using Math.pow)


let num = +prompt('Entr number')
let num2 = +prompt('Entr number')
let count = 1
for(let i = 9; i > 0; i = i - 1){
   count = count*2
    if(count > num && count < num2){
         console.log(+(count + ''))

    } 

}

// xndir 4
// Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”

let arr =[]
for(let num =+prompt('');num;num=(num-num%10)/10){
    arr.push(Math.abs(num%10))
} for(let i = 0; i < arr.length; i++){
     if(arr[i]===0 && arr[i+1]===0 && arr[i+1]===0  ){
       console.log('Yes')
        break
    } if(arr[i]!=0 && arr[i+1]!=0 && arr[i+1]!=0){
             console.log('No')
        }
        
  }

  // xndir 5
  // Insert two positive integers n and m between 1 and 10. Compute and print  nm.

  let num = +prompt('Entr numbr')
let num1 = +prompt('Entr numbr')
let res = ''
for(let i = 0; i < num1 ; i++){
    res = Math.pow(num, num1)
} console.log(res)