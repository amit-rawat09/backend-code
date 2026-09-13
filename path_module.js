const path = require("path");
console.log("--------------------------------");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log("-------------------------------");
const joinPath = path.join("/user", "documents", "node");
console.log(joinPath);

const resolvePath = path.resolve("user", "documnet", "node");
console.log(resolvePath);

