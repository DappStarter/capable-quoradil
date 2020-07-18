require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note shift pupil include arctic bottom supreme'; 
let testAccounts = [
"0xa066d51eef320997aa0911b3b1963c79385755d017e927a7bdc2a199507c703b",
"0xaf30f5a81221240a6f8827e15c1bc814cc6c168fcab801c4ae633ece32bdf00e",
"0xbb540ea200f0ec6592a08891853817a19ca40e3750476b9d1cb78924c0f3eb9c",
"0x6b863f9c7f87c4052f65733ddce7faf60e3ad7c9bd7b920df523ba5551255896",
"0xc900476b9fc82ce0edd25838b042580a37d6ce402c15953d9522484748171f10",
"0xe0a86bf81c2bc6adf2051a2a4056b6d27b68601a9f2e0529addefca4d7b263da",
"0x1dd07554769f0cfa9cd0fa07d60fcd2930c35a77a474d60a8fbddfe4ce4c29ba",
"0x8c5b8153e382bb2e915e26dd67f6b4989339720ad4ab349e17e921f2060e3146",
"0x057b6972617c8c9eae5081a59435aed97697897917661d3728702e821f8e5fb5",
"0x187832b0cca0ecb035f34eaa4efd3c25de9d51deea34022b445d56ca7ceb4918"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
