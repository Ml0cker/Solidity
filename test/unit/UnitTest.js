const { expect } = require("chai");
const { ethers } = require("hardhat");
// async function main(){
  describe("testTask", function () {
    it("Owner", async function () {
      
      const [owner, acc1] = await ethers.getSigners();
      const contr = await ethers.getContractFactory("testTask", owner);
      const testTask = await contr.deploy();
      await testTask.deployed();
      expect(await testTask.owner()).to.equal(owner.address);
      // contractAddr= testTask.address
      // console.log(contractAddr)
      // const tx = {
      //   to: contractAddr,
      //   value: ethers.utils.parseEther('1')
      // }
      // const txSend = await acc1.sendTransaction(tx)
      // await txSend.wait()
      // console.log(txSend)
      // expect(await testTask.contractBalance()).to.equal(await contractAddr.getBalance());


    });
  });
// };

// main()
//   .then(()=> process.exit(0))
//   .catch((error)=>{
//     console.error(error);
//     process.exit(1);
//   });