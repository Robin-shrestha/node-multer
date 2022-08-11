import { Router } from "express";
import { uploadRoutes } from "./upload.js";

const router = Router();

router.use("/upload", uploadRoutes);

export default router;
