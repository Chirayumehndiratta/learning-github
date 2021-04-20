let fs = require('fs');
let input = process.argv.slice(2);
console.log("input",input);
let options = [];
let filepaths = [];
for(let i=0; i<input.length; i++)
{
   if (input[i] == "-s" || input[i] == "-n" || input[i] =="-b")
    options.push(input[i]);
    else  
    filepaths.push(input[i]);
}
console.log("options",options);
console.log("Filepaths",filepaths);
for(let i=0; i< filepaths.length ;i++)
{
    if (fs.existsSync(filepaths[i]) == false)
    {
        Console.log("filepath",filepath[i],"does not exists")
    }
}
    let totalContent =""
    for(let i=0; i<filepaths.length;i++)
    {
        let currentContent = fs.readFileSync(filepaths[i]);
        totalContent += currentContent+"\r\n";
    }
    let isS = options.includes("-s");
    if(isS == true)
    {
        let tempArray =[];
        let currentArray = totalContent.split("\r\n");
        for(let i=0;i< currentArray.length;i++)
        {
            if(currentArray[i] !== "")
            {
            tempArray.push(currentArray[i]);
            }
        }
        totalContent=tempArray.join("\r\n");
    }
let isN = options.includes("-n");
let isB = options.includes("-b");
let finalOption;
if(isN == true)
{
    if(isB ==true)
    {
        finalOption = options.indexOf("-b") > options.indexOf("-n") ? "-b" : "-n";
    }
    else
    finalOption = "-n";
}
if (finalOption == "-n")
{
    let count =1;
    let contentArray =totalContent.split("\r\n");
    for(let i=0;i<contentArray.length;i++)
    {
        contentArray[i] = count+ ". "+ contentArray[i];
        count++;
    }
    totalContent = contentArray.join("\r\n");
}
//console.log(totalContent);
if (finalOption == "-b")
{
    let count =1;
    let contentArray = totalContent.split("\r\n");
    for(let i=0;i<contentArray.length;i++)
    {
        if(contentArray[i] != "" )
        {
            contentArray[i] = (count+" ."+contentArray[i]);
            count++;
        }
    }    
    totalContent = contentArray.join("\r\n");
}
console.log(totalContent);
