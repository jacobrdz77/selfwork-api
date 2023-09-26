import express from "express";
import MessageResponse from "../interfaces/MessageResponse";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API Route Boyyyy",
  });
});

// Import routers here
// router.use("/projects", projects);

export default router;
