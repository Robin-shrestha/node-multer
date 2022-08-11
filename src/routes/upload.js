import { Router } from "express";
import storage from "../config/multer.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

const uploadRoutes = Router();

uploadRoutes.post("/", storage.single("test_pic"), async (req, res) => {
  const fileString = req.file.path;
  req.body;
  console.log(
    "🚀 ~ file: upload.js ~ line 10 ~ uploadRoutes.post ~ req.file",
    req.file
  );
  //   console.log(
  //     "🚀 ~ file: upload.js ~ line 10 ~ uploadRoutes.post ~ fileString",
  //     req.file
  //   );

  //   const newFileName = "nodejs.png";

  //   used in FE
  //   using formdata
  //   const formdata = new FormData()
  //   formdata.append('test_pic', fileOje)

  //   using base64 json
  //   const newData = {
  //     profile_)pic: base64Imag
  //   }

  // converting the file buffer into actual file
  //   await fs.writeFile(`./${newFileName}`, req.file.buffer, "utf-8", (e) => {
  //     console.log(e);
  //   });

  // cloud storage methods
  // FE -> BE(file obj using multer) -> save in local storage -> save in cloudinary using sdk -> fs delete the local data

  // FE (req)-> BE (req)->fetch presigned url from cloud (res)-> be(res) -> FE -> post the file object using presigned ur

  try {
    if (!fs.existsSync(fileString)) {
      throw new Error("File not found!");
    }
    const uploadResponse = await cloudinary.uploader.upload(fileString, {
      upload_preset: "cloudinary-test",
    });

    fs.unlinkSync(fileString);

    return res.json({ test: "data" });
  } catch (error) {
    console.log("error:::", error);
    fs.unlinkSync(fileString);
  }
});

export { uploadRoutes };
