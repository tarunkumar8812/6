const express = require("express");
const router = express.Router()
const { createBranch } = require("../controller/bankController");
const { createAccount, login, getProfile, updatePassword, forgotPassword, sendMoney, accountBalance, accountStatement, otpGenerate, deleteTransaction, paymentThroughDebitCard } = require("../controller/userController");
// const { createUser } = require("../controller/userController");
// const { makePayment } = require("../controller/transactioncotroller");


router.post("/createBranch/hdfc/:branch", createBranch);

// -------------- user APIs -----------
router.post("/user/register", createAccount);
router.post("/user/login", login);
router.get("/user/profile", getProfile);
router.put("/user/updatePassword", updatePassword);
router.put("/user/forgotPassword", forgotPassword);
router.post("/user/sendMoney", sendMoney);
router.get("/user/accountBalance", accountBalance);
router.get("/user/accountStatement", accountStatement);

router.put("/user/otpGenerate", otpGenerate);
router.delete("/user/deleteTransaction", deleteTransaction);
router.post("/user/payment", paymentThroughDebitCard);
// router.post("/payment", makePayment);

module.exports = router



// Api's which we have to create
//  #    user register
//  #    user login
//  #    get profile
//  #    create first time password
//  #    update profile - password,address
//  #    apply for new debit card
//  #    generate debit card pin
//  #    add money
//  #    send money
//  #    account statement



