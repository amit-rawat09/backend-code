const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  try {
    fs.mkdirSync(dataFolder);
    console.log("DAta folder is created");
  } catch (err) {
    console.log(err.message);
  }
}

const filePath = path.join(dataFolder, "example.txt");

fs.writeFileSync(filePath, "\nThis is amit rawat");
console.log("file created successFully");

fs.appendFileSync(filePath, "welcome to node js file");
console.log("data updated successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log(readContentFromFile);

const asyfilepath = path.join(dataFolder, "async-example.txt");

fs.writeFile(asyfilepath, "hello async node js", (err) => {
  if (err) {
    console.log(err);
  }

  fs.readFile(asyfilepath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
});
