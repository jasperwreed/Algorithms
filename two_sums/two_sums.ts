/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 const twoSum = (nums, target) => {
  //  empty array to push correct values into
   let result = [];

  //  iterate over nums array
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      // sums two values / checks if they add up to target value
      if(nums[i] + nums[j] == target) {
        /* 
        if values add up to target
        push their indecies into the
        result array from line 9
        */
        result.push(i, j)
      }
    }
  }

  return result
 }