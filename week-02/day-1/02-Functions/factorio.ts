// -  Create a function called `factorio`
//    that returns it's input's factorial
export{}

function factorio (num: number){
    let facorial:number = 1;
    for (let i:number = 1; i < num+1; i++) {
        facorial *= i;
    }
    return facorial;
}

console.log(factorio(5));