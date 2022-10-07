function subsetSum (nums, n) {
  // Your code here:
​
/*   let suma = nums[0];
  if(suma === target) return true
  for (let i = 1; i < nums.length; i++) {
    if(nums[i] === target) return true
​
    if(suma + nums[i] <= target){
      suma += nums[i]
    }
  }
  if(suma === target) return true
  else return false
 */
  /* let sum = [];
  for (const num of nums) {
    console.log(num);
​
    if(num === target) return true
​
    if(num < target) sum.push(num)
    sum
  }
  var total = sum.reduce((n,m) => n + m)
  if(total === target) return true
  else return false */
​
  /* let result = 0;
  nums.map((item, i) => {
    let sum = item;
    nums.map((item2, i2) => {
      if (i !== i2) {
        sum += item2;
        if (sum>n) {
          sum -= item2;
        }
      }
    })    
    if (sum===n) {
      result = sum;
    }
  })
  return result===n; */
​
  
  //Nicolas
​
  if (nums.includes(n)) return true
  if (nums.length <= 1) return false
​
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < n) {
      const newNums = [...nums]
      newNums.splice(i, 1)
      const newTarget = n - nums[i]
      if (subsetSum(newNums, newTarget)) return true
    }
  }
  return false
}
module.exports = subsetSum
​
console.log(subsetSum([1, 10, 2, 5, 3], 9))// true
console.log(subsetSum([1, 10, 5, 3], 19))// true
console.log(subsetSum([1, 10, 5, 3], 2))// false
console.log(subsetSum([1, 10, 5, 3], 10))// true
