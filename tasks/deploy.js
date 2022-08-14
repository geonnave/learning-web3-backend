task("deploylock", "deploy test env")
  .addParam("time", "the time")
  .addFlag("verify", "if true, verify")
  .setAction(async ({ time }, hre ) => {
    console.log("comecando task");
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const unlockTime = currentTimestampInSeconds + time;

    const Lock = await hre.ethers.getContractFactory("Lock");
    //const lock = await Lock.deploy(unlockTime, {value: lockedAmount});
    const lock = await Lock.deploy(unlockTime);

    console.log("Lock with 1 ETH deployed to: ", lock.address, "with unlockTime: ", unlockTime);

    // if (verify) {
    //   // xxx
    // }

    return lock.address;
  })
