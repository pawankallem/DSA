
/*

34. Find First and Last Position of Element in Sorted Array
Medium

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let x=first(nums,target,0,nums.length-1)
    let y=last(nums,target,0,nums.length-1)
    return [x,y]
};

function first(arr,target,low,high){
    let res=-1;
    while(low<=high){
        let mid=low+((high-low)/2);
        mid=mid-(mid%1);
        if(target==arr[mid]){
            res=mid;
            high=mid-1;
        }else if(arr[mid]<target){
            low=mid+1;
        }else{
            // res=mid;
            high=mid-1;
        }
    }
    return res;
}

function last(arr,target,low,high){
    let res=-1;
    while(low<=high){
        let mid=low+((high-low)/2);
        mid=mid-(mid%1);
        if(target==arr[mid]){
            res=mid;
            low=mid+1;
        }else if(arr[mid]<target){
            // res=mid;
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return res;
}