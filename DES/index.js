const {
    encodeHex,
    encodePlaintext
} = require('./hex');

// const hex1 = '0123456789ABCDEF';
// const key1 = 'FEFEFEFEFEFEFEFE';
// const encodedHex1 = encodeHex(hex1, key1);
// console.log(encodedHex1);

// const hex2 = '0000000000000000';
// const key2 = '0000000000000000';
// const encodedHex2 = encodeHex(hex2, key2);
// console.log(encodedHex2);

// const hex3 = '0123456789ABCDEF';
// const key3 = 'FEDCBA9876543210';
// const encodedHex3 = encodeHex(hex3, key3);
// console.log(encodedHex3);

// const hex4 = hex1 + hex2;
// const key4 = key1;
// const encodedHex4 = encodeHex(hex4, key4);
// console.log(encodedHex4);

const plaintext1 = 'Aleksand';
const key5 = 'password';
const encodedPlaintext1 = encodePlaintext(plaintext1, key5);
console.log(encodedPlaintext1);