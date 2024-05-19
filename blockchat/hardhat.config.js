// const fs = require('fs')
// // eslint-disable-next-line import/no-extraneous-dependencies
// require('@nomiclabs/hardhat-waffle')
// require('@nomiclabs/hardhat-etherscan')
// 
// const PRIVATE_KEY = fs.readFileSync('.secret').toString().trim()
// 
// module.exports = {
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//     matic: {
//       url:
//         // 'https://polygon-mumbai.g.alchemy.com/v2/gQqiYgK8siAdI0G4p-oaL_NmK1I8Oytf',
//         'https://polygon-mumbai.g.alchemy.com/v2/1kV4UFvfa0HUTq1RhKwZBoIJy5P7gBMk',
//       accounts: [PRIVATE_KEY],
//     },
//   },
//   solidity: '0.8.4',
// }


require("@nomicfoundation/hardhat-toolbox")



// const key = "8d5dc68f333ed9ca6b8482e78d21a69a1f50d861b839dbbddee0d3b5e49c8897";
const key = "0x0945444074be9388430227a98f86f4465cb7b6077a4c6d6062ea121b02bc4f1f";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    ether:{
      url:"HTTP://0.0.0.0:7545",
      // url:"https://eth-sepolia.g.alchemy.com/v2/mKWeUfHKniwSn0E8sepybb09NgaXUoKq",
      accounts:[key],
    }
  },

};