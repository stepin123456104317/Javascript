const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
readline.question(`Enter salary?`, salary => {
    var sal=salary
    if(sal>8000){
        console.log("Salary too large");
        readline.close();
    }
    else if(salary<=0){
        console.log("Salary too small");
           readline.close();
    }
    else{
    readline.question(`Enter shits?`, shifts => {
    var shi=shifts;
    if(shi<0){
        console.log("Shifts too small");
    }
    else{
    var m=calculateSal(sal,shi);
    console.log(m);

    }
    readline.close();

})
}
})
function calculateSal(sal,shi){
    var savings = (sal*0.5)+(sal*0.02*shi);
    return savings;
}
