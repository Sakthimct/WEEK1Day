function launchBrowser(){
        let browserName="firefox"
        if(browserName=="chrome"){
            console.log("Chrome browser")
        }
        else {
            console.log("other browser")
        }
}
function runTests (){
    let testType = "other"
    switch (testType) {
        case 'smoke':
            console.log("smoke testing")            
            break;
        case 'sanity':
            console.log("sanity testing")            
            break;
        case 'regression':
            console.log("regression testing")                
            break;
        default:
            console.log("smoke testing")
            break;
    }

}
launchBrowser()
runTests()