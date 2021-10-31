const File = artifacts.require("File");

contract('File', (accounts) => {
  // Test File.sol contract
  it('uses testFile method to check deployment of File.sol', async () => {
    
    // Wait for the contract to be deployed
    const fileInstance = await File.deployed();
    // Call testFile function
    const tfile = await fileInstance.testFile("HIV: Negative|Hepatitus C: Negative|Coronavirus: Positive","blood test 1");
    // 
    console.log("======================");
    console.log(tfile)

    // get file hash, and file name from that
    const hash = await fileInstance.getFileHash("HIV: Negative|Hepatitus C: Negative|Coronavirus: Positive");
    const file_name = await fileInstance.getFileName(hash);
    
    // make sure the file name returns properly
    assert.equal(file_name,"blood test 1");
  });
});