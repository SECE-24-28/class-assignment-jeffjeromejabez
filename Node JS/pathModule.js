const path = require("path")
console.log(__filename);
console.log(__dirname);
const folderPath = path.join(__dirname,"demo","file.txt");
console.log(folderPath);
console.log(path.dirname(folderPath));
console.log(path.basename(folderPath));
console.log(path.parse(folderPath));
console.log(path.extname(folderPath));
console.log(path.resolve(folderPath));
console.log(path.isAbsolute(folderPath));