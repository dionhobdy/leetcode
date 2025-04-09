/*

Median of Two Sorted Arrays
Hard

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // ceate empty array
    let nums3 = [];
    // create two pointer variables x and y
    let x = 0; let y = 0;
    // run a while loop as long as x and y  is less than the length of both arrays
    while (x < nums1.length && y < nums2.length) {
        // if pointer x on array nums1 is less than pointer y on array nums2 push pointer x value plus one into nums3
        if (nums1[x] < nums2[y]) {
            nums3.push(nums1[x++]);
            // else push pointer y value plus one into nums3
        } else {
            nums3.push(nums2[y++]);
        }
    }
    // while the value of x and y are less than the length of their corresponding arrays, push their values plus one into nums3
    while (x < nums1.length) { nums3.push(nums1[x++]); }
    while (y < nums2.length) { nums3.push(nums2[y++]); }
    // create a midNumber variable which is a whole number in the middle of nums3
    let midNumber = Math.floor(nums3.length / 2);
    // if the length of nums3 moduled by two does not equal zero, return midNumber of nums3
    if (nums3.length % 2 != 0) { return nums3[midNumber]; }
    // otherwise return the median in the form of nums3 midNumber minus one plus nums3 midNumber. divide result by two.
    return (nums3[midNumber - 1] + nums3[midNumber]) / 2;
};