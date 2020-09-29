module.exports = function toReadable (number) {
 const arrDigits = {
  	0: "zero",
  	1: "one",
  	2: "two",
  	3: "three",
  	4: "four",
  	5: "five",
  	6: "six",
  	7: "seven",
  	8: "eight",
  	9: "nine"
  };
    
 const arrPairs = {
  	10: "ten",
  	11: "eleven",
  	12: "twelve",
  	13: "thirteen",
  	14: "fourteen",
  	15: "fifteen",
  	16: "sixteen",
  	17: "seventeen",
  	18: "eighteen",
  	19: "nineteen",
  	20: "twenty",
  	30: "thirty",
  	40: "forty",
  	50: "fifty",
  	60: "sixty",
  	70: "seventy",
  	80: "eighty",
  	90: "ninety"
  };
    
  const arr = number.toString().split('')
  const newArr = [];

  if(arr.length > 2) {
  	newArr.push( arrDigits[arr[0]] + " " + "hundred");
  } 
    
  if(arr.length > 1) {
  	if(arr[arr.length - 2] === "1") {
  		newArr.push(arrPairs["1" + arr[arr.length - 1]]);
  		return newArr.join(" ");
  	} else if(arr[arr.length - 2] !== "0") {
  		newArr.push(arrPairs[arr[arr.length - 2] + "0"]);
  	}
  }
    
  if(arr[arr.length - 1] !== "0" ||  arr.length === 1) {
  	newArr.push(arrDigits[arr[arr.length - 1]]);
  }
    
  return newArr.join(" ");
}
