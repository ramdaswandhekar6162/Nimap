

let arr = [100,2,50];

arr.sort();

console.log(arr);


arr.sort((a,b)=>{
    return a -b;
});

console.log(arr);


let f = await fetch("https://api.github.com/users/ramdaswandhekar6162",(res,err)=>{

    if(err){
        console.log(err);
    } 
});

console.log(f.headers);

// setTimeout(()=>{
//     console.log("setTimeout executed ..." + f);

//     console.log(f.);
// },5000);