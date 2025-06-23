const { addData } = require('./IoTChain');
const SchnorrSignature = require('schnorr-signature-lib'); // Placeholder for actual library

async function monitorIoTDevice(sensorData) {
    const privateKey = 'YOUR_PRIVATE_KEY'; // Replace with actual private key
    const signature = SchnorrSignature.sign(privateKey, sensorData);

    await addData(sensorData, signature);
}

// Example usage
monitorIoTDevice("Temperature: 25°C");