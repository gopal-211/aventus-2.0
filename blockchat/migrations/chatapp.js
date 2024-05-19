const truffle =artifacts.require('ChatApp')

module.expoers = function(deployer){
    deployer.deploy(truffle)
}