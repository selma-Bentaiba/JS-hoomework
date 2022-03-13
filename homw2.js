// remove a specific element from an array
/* r =[233,21,22,23,577,24,25,26,27,28,29,30];
  i= 0 

for(i=0;i<len
;i++){
if(r[i]>r[i+1]   ){

     for(j=i;j<len
-i-1;j++) {
         r[i]=r[i+1]; }  
  
}
}
console.log("the array after removing the odd number ",r);


 */
// remove duplicates from sorted array increasingly



b=[3,6,9,9,12,15,18,21,24,27,30];
 var len= b.length;

console.log("Our array with  duplicates :", b );
for (let i=0;i<len-1;i++){   
    for(let j=i+1;j<len;j++){
        if (b[i]==b[j]){
            for(let t=j;t<len-1;t++){
                b[t]=b[t+1];
           
            
            } 
          b.length = (b.length)-1 ;
    

        } 
    } 
  

} 




console.log("Our array without duplicates :", b);
