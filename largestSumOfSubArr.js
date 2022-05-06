
/*   Largest Sum Of Sub Array    */

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function subArr(arr) {
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let bag = [];
        for (let j = i; j < arr.length; j++) {
            bag.push(arr[j])
            // console.log(bag)
            let sum = arrSum(bag)
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}
function arrSum(nums) {
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        temp += nums[i];
    }
    return temp;
}
console.log(subArr(arr))