
/*

349. Intersection of Two Arrays
--------->  Easy
Share
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b)
    nums2.sort((a,b)=>b-a)
    let stack=[];
    let first=0,last=nums2.length-1;
    while(first<nums1.length && last>=0){
        if(nums1[first]==nums2[last]){
            if(stack[stack.length-1]!=nums1[first]){
                stack.push(nums1[first])
            }
            first++;
            last--;
        }else if(nums1[first]<nums2[last]){
                first++
        }else{
                last--;
        }
    }
    console.log(stack);
    return stack;
};