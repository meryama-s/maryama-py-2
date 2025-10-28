import express from "express";
import projectRoutes from "#@/modules/project/routes/index.js";

const router = express.Router();

router.use("/", projectRoutes);

export default router;
