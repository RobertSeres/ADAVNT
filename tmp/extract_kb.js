const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");

const docPath = path.join(__dirname, "..", "public", "advant-ai-tudastar.docx");

mammoth.extractRawText({path: docPath})
    .then(function(result){
        const text = result.value; 
        console.log("--- START OF TEXT ---");
        console.log(text);
        console.log("--- END OF TEXT ---");
    })
    .catch(function(err){
        console.error(err);
    });
