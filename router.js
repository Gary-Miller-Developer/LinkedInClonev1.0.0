const express = require("express")
const router = express.Router()
const userController = require("./controllers/userController")
const postController = require("./controllers/postController")

// user related routes
router.get("/", userController.home)
router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/logout", userController.logout)

// user related routes
router.get("/create-post", postController.viewCreateScreen)

module.exports = router
