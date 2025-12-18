const fs = require("fs");
const path = require("path");

const demoFolderPath = path.join(__dirname, "demo");
const filePath = path.join(__dirname, "sample.txt");

if (!fs.existsSync(demoFolderPath)) {
    fs.mkdirSync(demoFolderPath);
    console.log("Demo folder created");
}

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "This is A new File");
    console.log("File created successfully");
} else {
    console.log("File already exists");
}

fs.appendFileSync(filePath, "\nThis is a appended line");
const res = fs.readFileSync(filePath, "utf-8");
console.log(res);
const renamedPath = path.join(__dirname, "demo", "rename.txt");
fs.renameSync(filePath, renamedPath);
fs.unlinkSync(renamedPath);
