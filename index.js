console.log("__filename in index ", __filename);
console.log("__dirname in index ", __dirname);

module.exports.greet = function (name) {
  console.log(`Hello ${name}`);
};