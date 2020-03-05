function myFunction() {
    // Comment for git hub test
    console.log("commit test");

}

function doGet(e)
{
    let output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent("test version2");
    return output;          
}