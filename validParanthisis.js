
/*

20. Valid Parentheses
  ---------->    Easy

Share
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.


*/

/**
 * @param {string} s
 * @return {boolean}
 */


 var isValid = function(s) {
    let obj={
        "}":"{",
        "]":"[",
        ")":"("
    }
    let stack=[];
    for(let i=0;i<s.length;i++){
        if(s[i]=="{" || s[i]=="(" || s[i]=="["){
            stack.push(s[i])
        }else{
            switch (s[i]){
                case "}":
                    if(obj[s[i]]!=stack[stack.length-1]){
                        return false;
                    }
                    break;
                case "]":
                    if(obj[s[i]]!=stack[stack.length-1]){
                        return false;
                    }
                    break;
                case ")":
                    if(obj[s[i]]!=stack[stack.length-1]){
                        return false;
                    }
                    break;
            }
            stack.pop()
        }
    }
    if(stack.length==0){
        return true;
    }
    return false;
    
};