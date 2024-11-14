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

console.log(SumToRecur(4))