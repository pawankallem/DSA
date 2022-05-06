

/*   Type and Delete elems */



// let str1="a##c";
// let str2="#a#c";

let str1="a#c";
let str2="d#dc#";

let bag1=[],bag2=[];
let x=typeAndDelete(str1,bag1);
let y=typeAndDelete(str2,bag2);
if(x==y){
    console.log("Same")
}else{
    console.log("Different!")
}

function typeAndDelete(str1,bag1){
    for(let i=0;i<str1.length;i++){
    
        if(str1[i]=="#"){
            bag1.pop();
        }else{
            bag1.push(str1[i])
        }
        
    }
    return bag1.join(" ")
}
