const hre = require("hardhat");

async function main() {
  provider = new hre.ethers.providers.JsonRpcProvider(hre.network.config.url)
  tx = await provider.getTransactionReceipt('0x5893ed948a9a54510c122130082020a7bb6b72d4ab91b34a4f2ab20741cc082b')

  // might change the index based on number of logs a transaction has. This is for TransferStart event which is at 1st index of eventlog array
  log = tx.logs[1] 


  // Change the ABI event signature
  const ABI = ["event TransferStart(address indexed _from, string _to, uint256 _sn, _assetDetails (string coinName, uint256 value,uint256 fee)[])"]
  let iface = new hre.ethers.utils.Interface(ABI);
  a = iface.parseLog(log)
  console.log(a.args)
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});