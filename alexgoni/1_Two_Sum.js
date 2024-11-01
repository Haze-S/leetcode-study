// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       const sum = nums[i] + nums[j];

//       if (sum === target) return [i, j];
//     }
//   }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (target - value in obj) return [i, obj[target - value]];

    obj[value] = i;
  }
};
