

customeFetch('',(res,err)=> {
    if(err){
        console.log(err);
    } else {
        console.log(res);
    }
});

function customeFetch(str,callback){
    if(str == ''){
        callback(undefined,'this is a error');
    }
    else {
        callback("data",null);
    }
}

// error First Callback machnism

function someFun(str,callback){
   let err = null;

   if(typeof str === 'string'){
        str.concat("hello\thowdy");
   } else {
    err = new TypeError("given parameter not in string...");
    err.typeProvided = typeof str;
   }

   callback(err,str);
}

try {
    someFun(true,(err,data) =>{
        if(err){
            throw err;
        } else {
            console.log(data);
        }
    })
} catch (error) {
    let str = error.name + '\n' + error.message;
    str.concat(error.typeProvided + ' sent insted');
    console.log(str);
}