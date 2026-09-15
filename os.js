const os = require("os");

console.log("Plateform : ", os.platform());
console.log("userInfo : ", os.userInfo());

console.log("Arch : ", os.arch());
console.log("Free Memory : ", os.freemem());
console.log("Total Memory : ", os.totalmem());

console.log("Host Name : ", os.hostname());
console.log("NIC : ", os.networkInterfaces());

console.log("CPU Info : ", os.cpus().length);
console.log("Type : ", os.type());

