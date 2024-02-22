import express from "express"
import {
  deleteUser,
  getUserListings,
  updateUser,
} from "../Controller/user.controller.js"
import { verifyToken } from "../utils/verifyUser.js"

const router = express.Router()

router.post("/update/:id", verifyToken, updateUser)
router.delete("/delete/:id", verifyToken, deleteUser)
router.get("/listings/:id", verifyToken, getUserListings)

export default router
