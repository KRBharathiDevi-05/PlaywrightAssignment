var browserName = "chrome", testType = "Smoke"
function launchBrowser(browserName){
  if(browserName==="chrome") {
  console.log("Launch the Chrome browser")}
else{
    console.log("Don't launch the browser")}
}

function runTest(testType)
{ switch(testType)
    {  case "sanity":
        console.log("Run Sanity Testcase")
        break;
        case "regression":
        console.log("Run Regression Testcase")
        break;
        default:
        console.log("Run Smoke Testcase")
        break;
    }}
launchBrowser(browserName)
runTest(testType)