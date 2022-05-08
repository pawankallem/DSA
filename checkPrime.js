
/*

## **Check for prime**
Given an integer N. Check whether N is prime or not.

#### **Sample Input**
	input: N = 10

#### **Sample Output**
	Output: No

#### **Sample Input**
	input: N = 7

#### **Sample Output**
	Output: Yes

#### **Sample Explanation**
Self explanatory.

#### **Expected Time Complexity**
__O__(sqrt{N})

#### **Expected Space Complexity**
__O__(1), i.e., constant space complexity.

#### **Constraints**
	1 <= N <= 1000000000

    */


function prime(n){
    if(n<2){
        return false;
    }
    for(let i=2;i<Math.floor(Math.sqrt(n));i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

console.log(prime(7))
console.log(prime(5))
console.log(prime(11))
console.log(prime(84))
console.log(prime(2))