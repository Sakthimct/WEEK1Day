function reverseString(str) {
    let characters = str.split(""); 
    let reversedStr = "";
    for (let i = characters.length - 1; i >= 0; i--) 
    {
        reversedStr += characters[i];
    }
    
    console.log(reversedStr);
    if(str==reversedStr){
        console.log("The given string is palindrome")
    }
    else{
        console.log("The given string is not palindrome")
    }
    return reversedStr;
}

reverseString("idappadi")