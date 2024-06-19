function recursiveCount(num = 0) {
  if (num < 10){
    console.log(num)
    ++num;
    recursiveCount(num)
  } else {
    return
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution

// adds 1 to the number variable
// calls the function again until variable is at 10
