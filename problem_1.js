const arr = [1, 2, 3, 3, 5, 5, 6, 7, 8, 8];
const uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
    }
}
console.log(uniqueArr); 


//2
function isPalindrome(str) {
    let len = str.length;

    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false; 
        }
    }
    return true; 
}
console.log(isPalindrome("racer")); 
console.log(isPalindrome("hello")); 

//3
function capitalizeWords(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

console.log(capitalizeWords("hi hello")); 
