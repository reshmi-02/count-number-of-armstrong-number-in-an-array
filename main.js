let a=[345,407,1634,889,244]
document.write(`given array = [${a}] <br><br>`)
let count=0;
for(let i=0;i<a.length;i++){

var len=String(a[i]).length;
console.log(len);
var ans=0;
var temp=a[i];

console.log(temp);


    
    while(temp>0){
    b=temp%10;
    ans=ans+b**len;
    temp=parseInt(temp/10)
    }


console.log(a[i]);
console.log(ans);



if(ans==a[i]){
    count=count+1
}



}

document.write(`count of armstrong number in an array = ${count}`)



