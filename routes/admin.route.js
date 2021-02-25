// const multer = require('multer');
// const sharp = require('sharp');
// const uuidv4  = require('uuid/v4');
const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin.controller');

const router = express.Router();

// class Resize {
//   constructor(folder) {
//     this.folder = folder;
//   }
//   async save(buffer) {
//     const filename = Resize.filename();
//     const filepath = this.filepath(filename);

//     await sharp(buffer)
//       .resize(300, 300, { // size image 300x300
//         fit: sharp.fit.inside,
//         withoutEnlargement: true
//       })
//       .toFile(filepath);
    
//     return filename;
//   }
//   // static filename() {
//   //    // random file name
//   //   return `${uuidv4()}.png`;
//   // }
//   filepath(filename) {
//     return path.resolve(`${this.folder}/${filename}`)
//   }
// }

// const upload = multer({
//     limits: {
//       fileSize: 4 * 1024 * 1024,
//     }
//   });

router.get('/', adminController.index);

router.get('/', adminController.product);

router.get('/create', adminController.create);

router.get('/create/products', adminController.createProducts);

router.get('/create/types', adminController.createTypes);

router.get('/create/kinds', adminController.createKinds);

router.get('/views', adminController.viewsProduct);

router.get('/news', adminController.viewNews);

router.get('/news/add', adminController.addNews);

router.get('/views/delete=:id', adminController.deleteProduct);

router.get('/create/delete=:id', adminController.deleteTypes);

router.get('/create/delete=:id', adminController.deleteKinds);

router.get('/views/update=:id', adminController.updateProduct);

router.get('/users', adminController.user);

router.get('/users/delete=:id', adminController.deleteUser);

router.post('/create/products', adminController.postCreateProducts);

// upload.single('image'), async function (req, res) {
//   // folder upload
//   const imagePath = path.join(__dirname, '/public/image');
//   // call class Resize
//   const fileUpload = new Resize(imagePath);
//   if (!req.file) {
//      res.redirect('/admin/views');
//   }
//   const filename = await fileUpload.save(req.file.buffer);
  
//   req.body.image = filename;
// },

router.post('/views/update=:id', adminController.post_Update);

module.exports = router;