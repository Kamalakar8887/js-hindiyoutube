const accountId = 144553
let accountEmail = "kamalakar@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword ="212121"
accountCity = "delhi"




/*
Prefer not use to var 
because of issue in block scope and funtional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

