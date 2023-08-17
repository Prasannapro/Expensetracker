const express = require("express");
const { addTransaction, getAlltransaction, editTransaction, deleteTransaction } = require("../controllers/transactionCtrl");
// const { loginController,registerController } = require("../controllers/userController");

//router obj
const router = express.Router();

//routers
//post || login
// router.post("/login",loginController);

// //post || register
// router.post("/register",registerController);
router.post("/add-transaction",addTransaction);

//edit route
router.post("/edit-transaction",editTransaction);

//delete route
router.post("/delete-transaction",deleteTransaction);

router.post("/get-transaction",getAlltransaction);

module.exports = router