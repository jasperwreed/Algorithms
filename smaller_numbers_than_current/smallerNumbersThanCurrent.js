/**
 * 
 * @param {number[]} nums 
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) => {
  const sorted = [...nums].sort((a,b) => a - b);
  return nums.map(num => sorted.indexOf(num))
}

smallerNumbersThanCurrent([1,2,3,4,5,6,7])