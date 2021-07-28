require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth night exchange grace nation force gasp'; 
let testAccounts = [
"0xb61c5766e64879c8e1a62007fdffbff470094c690a9680305d162375eba5971a",
"0xecf6c5aa9ec4e277b6441fb007a22c3a6d5b46536e72c97219c95bf08fef1bd2",
"0x67e26bd3a6698bab6213f1770fbe772c99d042d5c983341ce12522ab4aa90fcc",
"0x31f79222e177f55d316821f76b93541e7fbcd1311f0a8ee02c0f457eaf0d67bc",
"0x63ddf29045605dcaa77c0c510d1c07f4c2475abaa78f13c9a1f4c2186522d0b3",
"0x5163af1f0f51f8b0450d8ec964d3d7a1aed0596d1a7314ecb8fac215928743f4",
"0x144eb4c0b11d60cf28f0efd4351cd23bb59b19e226a566466dd5d93823a03f2c",
"0xa018a277a1c1d2931d59fde806fffa3b7e85e3ac2b9c2cb42ee308164b171ac9",
"0x2055e90a1f865f464a81e96380322299aeb6d79de513b8c3e1fb2df23e909a59",
"0xcc0243c5e2e5baf89c62fd575f3e749fdebd906710cf9a431cd060f4a909a0b2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

