const Web3 = require('web3');
const IoTChainABI = require('./IoTChain.json'); // ABI JSON file
const web3 = new Web3('http://localhost:8545'); // Replace with your Ethereum node

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const IoTChainContract = new web3.eth.Contract(IoTChainABI, contractAddress);

async function addData(sensorData, signature) {
    const accounts = await web3.eth.getAccounts();
    await IoTChainContract.methods.addData(sensorData, signature).send({ from: accounts[0] });
}

module.exports = { addData };