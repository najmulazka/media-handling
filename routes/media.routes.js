const router = require('express').Router();
const { imageStorage, videoStorage, documentStorage, image, video, document } = require('../libs/multer');
const { singleUpload, multiUpload, imagekit, generateQrCode } = require('../controllers/media.controllers');
const multer = require('multer')();

router.post('/storage/images', imageStorage.single('image'), singleUpload);
router.post('/storage/videos', videoStorage.single('video'), singleUpload);
router.post('/storage/documents', documentStorage.single('document'), singleUpload);

router.post('/storage/multi/images', imageStorage.array('image'), multiUpload);

router.post('/storage/imagekit/images', image.single('image'), imagekit);
router.post('/storage/imagekit/videos', video.single('video'), imagekit);
router.post('/storage/imagekit/documents', document.single('document'), imagekit);

router.post('/storage/imagekit/qr-codes', generateQrCode);

module.exports = router;
