import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file) {
      cb(null, `src/assets/uploads`);
    } else {
      cb("multer error");
    }
  },
  filename: function (req, file, cb) {
    if (file) {
      cb(null, Date.now() + "_" + file.originalname);
    } else {
      cb("multer error");
    }
  },
});

const memStorage = multer.memoryStorage();

const upload = multer({ storage: storage });

export default upload;
