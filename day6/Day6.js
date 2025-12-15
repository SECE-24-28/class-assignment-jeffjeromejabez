//length,slice,substring,toUppercase,toLowerCase,indexOf,lastIndexOf,includes,startsWith,endswith,replace,replaceAll,concat,
//trim,trimsStart,trimEnd,split,repeat,charAt,at
let str1 = "hello world";
console.log(str1.length);
console.log(str1.at(-5));
console.log(str1.charAt(2));
console.log(str1.slice(2,4));
console.log(str1.substring(5))
console.log(str1.indexOf("l"));
console.log(str1.lastIndexOf("l"));
console.log(str1.includes("osdfg"));
console.log(str1.endsWith("ld"));
console.log(str1.replace("l","i"));
console.log(str1.replaceAll("l","i"));
let str2=" Welcome";
console.log(str1.concat(str2));
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str1.trimEnd());
console.log(str1.split(" "));
let str3 = "John";
console.log(str3.padStart(10,"Wer"));
console.log(str3.padEnd(10," "));

//String Methods assignment:
console.log(str1.replace("hello world","Hello World"));
let str4="I love Javascript";
function countWords() {
    return str4.split(" ").length;
}
console.log(countWords());
let str5="my name is john";
console.log(str5.replaceAll(" ","-"));
let str6="programming"
console.log(str6.charAt(1));
console.log(str6.charAt(7));   
console.log(str6.charAt(8)); 
let str7="Jhon Doe Smith";
console.log(str7.charAt(0) + str7.charAt(5) + str7.charAt(9));
let str8="the quick brown fox";
let w = str8.split(" ");
let l = "";
for(let word of w) {
    if(word.length > l.length) l = word;
}
console.log(l);
let a = "";
for(let b of str6) {
    if(!a.includes(b)) a+= b;
}
console.log(a);
let str9="hello world hello"
let wordCount = {};
for(let word of str9.split(" ")) {
    wordCount[word] = (wordCount[word] || 0) + 1;
}
console.log(wordCount);
