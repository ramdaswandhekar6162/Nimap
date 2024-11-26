

// template literal in js

function fun(str,parameter){
    let a = arguments[0];
    console.log(a);
    console.log(parameter);
}

fun `hello ${1}`;

// generator function we can controller function execution 

function *generatorsFun(){
    console.log("hello");

    yield 'first yeild statement';

    console.log("second statement");
}

let g = generatorsFun();

console.log(g.next());

let arr = [100,1,10];

arr.sort();

console.log(arr);


// callback
getUser('user',()=>{
    console.log('1st call back function');

    getRepo('user',(repo)=>{
        console.log('repo',repo);
    });

});


function getUser(str,callback){
    setTimeout(()=>{
        callback();
    },2000)
}



function getRepo(username,callback){
    
    setTimeout(()=>{
        console.log(username);

    return callback(['repo1','repo2','repo3']);
    },2000);
}



// stack and heap memory in js

I
// Stack (Primitive), Heap (Non-Primitive)
let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename;
anothername="chaiaurcode"
console.log(myYoutubename);
console.log(anothername);


