/*

1. Two Sum - Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
    let hash = {};
    // memoize function using a hash table 
    for (i = 0; i < nums.length; i++) { hash[nums[i]] = i } 
    // set i as hash index 0 using for loop
    for (j = 0; j < nums.length; j++) {
        let comp = target - nums[j];
        if (hash.hasOwnProperty(comp) && hash[comp] !== j) { return [hash[comp], j]}
    }
    // use j to iterate through nums array to search for a integer that equates to target when summed together.
};