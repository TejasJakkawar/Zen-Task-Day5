// Q1
// ODD numbers in array
// Anonymous Function

var a = function (...arr) {
    var oddnum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddnum.push(arr[i])
        }
    }
    return oddnum;

}
console.log(a(1, 2, 3, 4, 5, 6, 7, 8, 9))

    //IIFE
    (function (...arr) {
        var oddnum = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                oddnum.push(arr[i])
            }
        }
        return oddnum;

    })(1, 2, 3, 4, 5, 6, 7, 8, 9)

//Q2. Convert all string to upper caps in array
//Anonymous function

var a = function (...arr) {
    var newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr[i] = arr[i].toUpperCase()
    }
    return newarr;

}
console.log(a("tejas", "jakkawar"))

    //IIFE
    (function (...arr) {
        var newarr = [];
        for (let i = 0; i < arr.length; i++) {
            newarr[i] = arr[i].toUpperCase()
        }
        return newarr;
    })("tejas", "jakkawar")


//Q3. Sum of all numbers in array
//Anonymous function

var a = function (...arr) {
    var sum = 0
    for (let i = 0; i < arr.length; i++)
        sum = sum + arr[i]
    return sum;


}
console.log(a(1, 2, 3, 4, 5, 6, 7, 8, 9))

//IIFE
    (function (...arr) {
        var sum = 0
        for (let i = 0; i < arr.length; i++)
            sum = sum + arr[i]
        return sum;


    })(1, 2, 3, 4, 5, 6, 7, 8, 9)


//Q4. return all prime numbers in array
//Anonymous function

var a=function(...arr){
    var primenum=[];
    for(let i=0;i<arr.length;i++){
        for(let j=2;j<a[i];j++){
            if(a[i]%j!==0){primenum.push(a[i])}
        }
    } return primenum


}
console.log(a(4,5,6,7,8,9))




// Ashutosh Problems

let a = [1,2,3,4,5,6,7,8,9,10,11];
 
function prime(a) {
  const res = [];
  for (let i=0; i<a.length; i++) {
    for (let j=2; j<a[i]; j++) {
      if (a[i] % j === 0) {
        break;
      }
      if (j === a[i] - 1) res.push(a[i]);
    }
  }
 
  return res;
}
 
console.log(prime(a));
 
function palindrome(arr) {
  let i = 0, j = arr.length-1;
  
  while (i < j) {
    if (arr[i] === arr[j]) {
      i++;
      j--;
    } else return false;
  }
  return true;
}
 
function allPalindrones(palin) {
 
  const res = palin.filter(palindrome);
  return res;
 
}
 
console.log(allPalindrones(['121', '1221', '123']));
 
 
function removeDups(arr) {
  let newArr = [];
  const map = new Map();
 
  for (let i=0; i<arr.length; i++) {
    if (map.has(arr[i])) {
      continue;
    } else {
      newArr.push(arr[i]);
      map.set(arr[i], true);
    }
  }
 
  return newArr;
}
 
console.log(removeDups([1,2,3,1,2]));
 
function rotate(arr) {
  const k = arr[arr.length-1];
 
  for (let i=arr.length-1; i>0; i--) {
    arr[i] = arr[i-1];
  } 
 
  arr[0] = k;
 
  return arr;
}
 
const rotateKtimes = (arr, k) => {
  for (let i=0; i<k; i++) {
    arr = rotate(arr);
  }
  return arr;
}
 
console.log(rotateKtimes([1,2,3,4],3))
 
function optimisedPrime(arr) {
  const max = Math.max(...arr);
  const primes = [];
 
  for (let i=0; i<=max; i++) {
    primes[i] = true;
  }
 
  primes[0] = false;
  primes[1] = false;
 
  for (let i=2; i<=max; i++) {
    for (let j=2; i*j <= max; j++) {
      primes[i*j] = false;
    }
  }
  return primes;
}
 
const primes = optimisedPrime(a);
 
for (let num of a) {
  if (primes[num]) {
    console.log(num);
  }
}


