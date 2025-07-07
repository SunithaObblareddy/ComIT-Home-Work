//10Add commentMore actions
export function countDown(startingCount) {
  console.log(startingCount);

  // base case (condition to exit the recursion)
  if (startingCount <= 0) {
    return 0;
  }

  startingCount--;

  countDown(startingCount); //9
}

// countDown(10);

// Create a function to determine what's the value of nth item in
// a fibonacci sequence

// 0,1,1,2,3,5,8...
// function(n) n = 4 => 2
// you gotta use recursion (NO LOOPS ALLOWED)
export function fibonacci(n) {
  // base case
  if (n <= 1) {
    return n;
  }

  // recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}  
console.log(fibonacci(5)); // 55 
export default "ABC";


