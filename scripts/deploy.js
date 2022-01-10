const { expect } = require("chai");
const { ethers } = require("hardhat");
async function main(){
  
      
      const [owner, acc1] = await ethers.getSigners();
      const contr = await ethers.getContractFactory("testTask", owner);
      const testTask = await contr.deploy();
      await testTask.deployed();
      

      console.log('Deployed')
};

main()
  .then(()=> process.exit(0))
  .catch((error)=>{
    console.error(error);
    process.exit(1);
  });