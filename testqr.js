const qr = require('qr-image');

let qr_png = qr.image('I Love QR!', { type: 'png' });

console.log(qr_png.toString('base64'));
