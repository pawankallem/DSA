
/*

35. Search Insert Position
Easy

Share
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104


*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(target<nums[0]){
        return 0
    }else if(target>nums[nums.length-1]){
        return nums.length;
    }
let first=0,last=nums.length-1;
let res=-1;
while(first<=last){
    let mid=first+((last-first)/2);
    mid=mid-(mid%1);
    if(target==nums[mid]){
        return mid;
    }else if(target<nums[mid]){
        res=mid;
        last=mid-1;
    }else{
        first=mid+1;
    }
}
return res;
};