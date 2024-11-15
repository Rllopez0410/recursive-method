function pow(x, n) {
  let result = 1;
  for (let i = 0; i != n; i++) {
    result *= x;
    console.log(result);
  }
}

function pow(x,n) {
  if (n == 1) {
    return x;
  } else {
     return x * pow(x, n - 1);
  }
}

//Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

function SumTo(n) {
  let num = n;
  for (let i = 0; i <= n; i++) {
    n -= 1;
    num += n;
    console.log(num);
  }
}

function SumToRecur(n) {
  if (n == 0) {
    return n;
  } else {
    return n + SumToRecur(n - 1);
  }
}

//Write a function factorial(n) that calculates n! using recursive calls.

function factorials(n) {
  num = n;
  for(let i = 0; i != n; i++) {
    num *= n;
    n -= 1;
  }
  console.log(num);
}

function factorialRecurs(n) {
  if (n == 1) {
    return n;
  } else {
    return n * factorialRecurs(n - 1);
  }
}

function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}

function countDownRecurs(n) {
  if (n == 0) {
    return n;
  } else {
    console.log(n);
    return countDownRecurs(n - 1);
  }
    
}

console.log(countDownRecurs(2));