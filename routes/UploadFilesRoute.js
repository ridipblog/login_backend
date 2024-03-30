const router = require('express').Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const encoded = bodyParser.urlencoded({ extended: true });
router.use(cors());
const { upload } = require('../middleware/uploadMiddleware');
const UploadFilesController = require('../controllers/UploadFilesController');
router.post('/upload', upload.single('image'), UploadFilesController.uploadFile);
module.exports = router;
