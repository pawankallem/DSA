
/*

441. Arranging Coins
Easy


Share
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

 

Example 1:


Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.
Example 2:


Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.
 

Constraints:

1 <= n <= 231 - 1

*/

/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
    let i=1;
    while(n>0){
        n=n-i;
        i++;
    }
    if(n<0){
        return i-2;
    }else{
        return i-1;
    }
    
    // Easy method 
    
    // let count=0;
    // while(n>0){
    //    if(n<i){
    //        return count;
    //    }
    //     n=n-i;
    //     i++;
    //     count++;
    // }
    // return count;
};