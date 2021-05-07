  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter a number?`, name => {
      var n=name;
    var m=check(n)
    if(m==-1 || m>=32767)
    {
        console.log("Invalid Input");
    }
    else{
    console.log(m);
    }
    readline.close()
  })
function check(n)
{
    let product = 1;
    if(n>0 && n<32767)
    {
    while (n != 0)
    {
        product = product * (n % 10);
        n = Math.floor(n / 10);
    }
    return product;
    }
    else {
        return -1;
    }
}


