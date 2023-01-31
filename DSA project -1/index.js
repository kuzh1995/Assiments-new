//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPairsWithGivenSum(arr1, sum) {
    let pairs = [];
    let hash = {};
    
    for (let i = 0; i < arr1.length; i++) {
      let complement = sum - arr1[i];
      if (hash[complement] !== undefined) {
        pairs.push([arr1[i], complement]);
      }
      hash[arr1[i]] = i;
    }
    
    return pairs;
  }
  
  let arr1 = [1, 2, 3, 4, 5];
  let sum = 5;
  
  let pairs = findPairsWithGivenSum(arr1, sum);
  console.log(`Pairs with sum ${sum}:`, pairs);
  document.write('<h5>Answer 01</h5>');
  document.write(`Pairs with sum ${sum}:`, pairs);
  document.write('<br/>');
  

//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    
    return arr;
  }
  
  let arr = [1, 2, 3, 4, 5];
  console.log("Original array:", arr);
  document.write('<h5>Answer 02</h5>');
  document.write("Original array:", arr);
  document.write('<br/>');
  
  let reversedArray = reverseArrayInPlace(arr);
  console.log("Reversed array:", reversedArray);
  document.write("Reversed array:", reversedArray);
  document.write('<br/>');
  

//Q3. Write a program to check if two strings are a rotation of each other?

function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    
    let str = str1 + str1;
    
    return str.includes(str2);
  }
  
  let str1 = "hello";
  let str2 = "lohel";
  
  if (areRotations(str1, str2)) {
    console.log(`"${str1}" and "${str2}" are rotations of each other.`);
    document.write('<h5>Answer 03</h5>');
    document.write(`"${str1}" and "${str2}" are rotations of each other.`);
    document.write('<br/>');
  } else {
    console.log(`"${str1}" and "${str2}" are not rotations of each other.`);
    document.write(`"${str1}" and "${str2}" are not rotations of each other.`);
    document.write('<br/>');
  }
  

//Q4. Write a program to print the first non-repeated character from a string?

function firstNonRepeatedChar(str) {
    let charCount = {};
    
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
    
    return null;
  }
  
  let str = "hello world";
  console.log("String:", str);
  document.write('<h5>Answer 04</h5>');
  document.write("String:", str);
  document.write('<br/>');
  
  let FirstNonRepeatedChar = firstNonRepeatedChar(str);
  
  if (FirstNonRepeatedChar === null) {
    console.log("No non-repeated characters found.");
    document.write("No non-repeated characters found.");
    document.write('<br/>');
  } else {
    console.log("First non-repeated character:", FirstNonRepeatedChar);
    document.write("First non-repeated character:", FirstNonRepeatedChar);
    document.write('<br/>');
  }
  

//Q5  Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, from, to, aux) {
    if (n === 1) {
      console.log(`Move disk 1 from ${from} to ${to}`);
      document.write(`Move disk 1 from ${from} to ${to}`);
      document.write('<br/>');
      return;
    }
    
    towerOfHanoi(n - 1, from, aux, to);
    console.log(`Move disk ${n} from ${from} to ${to}`);
    document.write('<h5>Answer 05</h5>');
    document.write(`Move disk ${n} from ${from} to ${to}`);
    document.write('<br/>');
    towerOfHanoi(n - 1, aux, to, from);
  }
  
  let n = 3;
  towerOfHanoi(n, 'A', 'C', 'B');
  

//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function postfixToPrefix(exp) {
    let stack = [];
    
    for (let i = 0; i < exp.length; i++) {
      let char = exp[i];
      
      if (char === '+' || char === '-' || char === '*' || char === '/') {
        let operand2 = stack.pop();
        let operand1 = stack.pop();
        stack.push(`${char} ${operand1} ${operand2}`);
      } else {
        stack.push(char);
      }
    }
    
    return stack[stack.length - 1];
  }
  
  let exp = "3 4 5 * +";
  console.log("Postfix Expression:", exp);
  document.write('<h5>Answer 06</h5>');
  document.write("Postfix Expression:", exp);
  document.write('<br/>');
  
  let prefixExpression = postfixToPrefix(exp);
  
  console.log("Prefix Expression:", prefixExpression);
  document.write("Prefix Expression:", prefixExpression);
  document.write('<br/>');
  

//Q7 Write a program to convert prefix expression to infix expression.
function prefixToInfix(expression) {
    let stack = [];
    
    for (let i = expression.length - 1; i >= 0; i--) {
      let char = expression[i];
      
      if (char === '+' || char === '-' || char === '*' || char === '/') {
        let operand2 = stack.pop();
        let operand1 = stack.pop();
        stack.push(`(${operand1} ${char} ${operand2})`);
      } else {
        stack.push(char);
      }
    }
    
    return stack[0];
  }
  
  let expression = "+ * 3 4 5";
  console.log("Prefix Expression:", expression);
  document.write('<h5>Answer 07</h5>');
  document.write("Prefix Expression:", expression);
  document.write('<br/>');
  
  let infixExpression = prefixToInfix(expression);
  
  console.log("Infix Expression:", infixExpression);
  document.write("Infix Expression:", infixExpression);
  document.write('<br/>');
  
//Q8. Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsClosed(pgm) {
    let stack = [];
    
    for (let i = 0; i < pgm.length; i++) {
      let char = pgm[i];
      
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.length === 0) return true;
        
        let top = stack.pop();
        if ((char === ')' && top !== '(') ||
            (char === '}' && top !== '{') ||
            (char === ']' && top !== '[')) {
          return true;
        }
      }
    }
    
    return stack.length === 0;
  }
  
  let pgm = "{ [ ( ] ) }";
  console.log("Code:", pgm);
  document.write('<h5>Answer 08</h5>');
  document.write("Code:", pgm);
  document.write('<br/>');
  
  let result = areBracketsClosed(pgm);
 console.log("All brackets are closed : ", result);
 document.write("All brackets are closed : ", result);
 document.write('<br/>');
  
//Q9. Write a program to reverse a stack.
    
    function reverseStack(stack) {
    if (stack.length === 0) return stack;
  
    var item = stack.pop();
    reverseStack(stack);
    stack.unshift(item);
    
    return stack;
}
  
  var stack = [1, 2, 3, 4];
  console.log(stack);
  document.write('<h5>Answer 09</h5>');
  document.write(stack);
  document.write('<br/>');
  
  stack = reverseStack(stack);
  
  console.log(stack);
  document.write(stack);
  document.write('<br/>');

//Q10 Write a program to find the smallest number using a stack.
    
    function findSmallest(stack1) {
    let min = 10;
    
    while (stack1.length > 0) {
      let item = stack1.pop();
      if (item < min) {
        min = item;
}
}
    
    return min;
}
  
  let stack1 = [4, 2, 9, 1, 7];
  console.log("Stack:", stack1);
  document.write('<h5>Answer 10</h5>');
  document.write("Stack:", stack1);
  document.write('<br/>');
  
  let smallest = findSmallest(stack1);
  
  console.log("Smallest Number:", smallest);
  document.write("Smallest Number:", smallest);
  document.write('<br/>');
  


  