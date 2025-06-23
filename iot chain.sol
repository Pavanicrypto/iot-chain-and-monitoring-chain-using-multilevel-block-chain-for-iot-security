// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SchnorrSignature.sol";

contract IoTChain {
    struct Data {
        uint256 id;
        string sensorData;
        address sender;
        uint256 timestamp;
    }

    mapping(uint256 => Data) public dataRecords;
    uint256 public dataCount;

    event DataAdded(uint256 id, string sensorData, address sender, uint256 timestamp);

    function addData(string memory _sensorData, bytes memory _signature) public {
        require(SchnorrSignature.verify(msg.sender, _sensorData, _signature), "Invalid signature");

        dataCount++;
        dataRecords[dataCount] = Data(dataCount, _sensorData, msg.sender, block.timestamp);
        emit DataAdded(dataCount, _sensorData, msg.sender, block.timestamp);
    }
}