
//Method 1

A =[ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var len = (A.length );
var x;
for(var i=0;i<len;i++){
    for(var j=0;j<len;j++){
    if(A[i]<A[j]){
        x=A[i];
        A[i]=A[j]; A[j]=x;
    }
    }
}

console.log( A );

//Method 2
const sort=(A)=>{
    var x;
    for(var i=0;i<len;i++){
        for(var j=0;j<len;j++){
        if(A[i]<A[j]){
            x=A[i];
            A[i]=A[j]; A[j]=x;
        }
        }
    }
    return A;
}
arr =[ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var len = (arr.length );
console.log(sort(arr));
