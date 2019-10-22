var checaIdade = function(idade){
    return new Promise(function(resolve,reject){
        
        setTimeout(function(){
            if (idade >= 18){
                resolve("Maior de idade!");
            } else{
                reject("Menor de idade!");
            }
        }, 2000);
    });
}

checaIdade(16)
.then(function(response){
        console.log(response);
})
.catch(function(error){
        console.warn(error);
});
