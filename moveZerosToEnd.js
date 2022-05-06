
/*       Move zero's to end     */


let arr=[0,1,0,3,1,2];

let zeros="",bag="";
for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
        zeros+=0+" ";
    }else{
        bag+=arr[i]+" "
    }
}

console.log(bag+zeros)