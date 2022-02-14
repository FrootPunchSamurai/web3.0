require("@nomiclabs/hardhat-waffle");

//https://eth-ropsten.alchemyapi.io/v2/FmrPkR4H8AZO7ve_BhLOmADqgowVrgeR

require('@nomiclabs/hardhat-waffle');


module.exports={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/FmrPkR4H8AZO7ve_BhLOmADqgowVrgeR',
      accounts:['f9c365bb92079cb504d156960da24697ba9c4345f855fb2b143850e4eebe22fd']
    }
  }
}