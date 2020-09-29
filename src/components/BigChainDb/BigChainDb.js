
//https://www.bigchaindb.com/developers/guide/tutorial-car-telemetry-app/

import React from 'react';
import { API_PATH } from './constants';
import DID from './DID';
const BigchainDB = require('bigchaindb-driver')
const conn = new BigchainDB.Connection(API_PATH)

const BigChainDB = () => {
    const [seed, setSeed] = React.useState(null);
    const [aliceKeys, setAliceKeys] = React.useState(null);
    const [carKeys, setCarKeys] = React.useState(null);
    const [sensorGPSKeys , setSensorGPSKeys] = React.useState(null);
    const [userDid, setUserDid] = React.useState(null);
    const [carDid, setCarDid] = React.useState(null);
    const [gpsDid, setGpsDid] = React.useState(null);

    console.log('keys');
    console.log(aliceKeys);

    console.log('carKeys');
    console.log(carKeys);

    console.log('sensorGPSKeys');
    console.log(sensorGPSKeys);

    console.log('userDid');
    console.log(userDid);

    console.log('carDid');
    console.log(carDid);

    console.log('gpsdid');
    console.log(gpsDid);


    React.useEffect(() => {
        const bip39 = require('bip39');
        bip39.mnemonicToSeed('seedPhrase').then( value => {
            setSeed(value);
        });
    },[]);

    React.useEffect(() => {
        if (seed == null) return;

        const seedPiece = seed.slice(0, 32);
        setAliceKeys(new BigchainDB.Ed25519Keypair(seedPiece));
        setCarKeys(new BigchainDB.Ed25519Keypair());
        setSensorGPSKeys(new BigchainDB.Ed25519Keypair());
    },[seed]);

    React.useEffect(() => {
        if (aliceKeys == null || aliceKeys.publicKey == null) return;
        setUserDid(new DID(aliceKeys.publicKey));

    },[aliceKeys]);

    React.useEffect(() => {
        if (carKeys == null || carKeys.publicKey == null) return;
        setCarDid(new DID(carKeys.publicKey));

    },[carKeys]);

    React.useEffect(() => {
        if (sensorGPSKeys == null || sensorGPSKeys.publicKey == null) return;
        setGpsDid(new DID(sensorGPSKeys.publicKey));

    },[sensorGPSKeys]);

    return (
        <div>
            BigChainDB placeholder
            <div>
                {conn.normalizedNodes[0].endpoint}
            </div>
        </div>
    )
};


export default BigChainDB;