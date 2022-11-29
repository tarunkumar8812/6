let bankModel = require(`../models/hdfcBranchModel`)

async function createBranch(req, res) {
    try {
        let data = req.body

        let createdBranch = await bankModel.create(data)

        return res.status(201).send({ status: true, message: "Success", data: createdBranch })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }

}


// to activate and deactivate user's account
async function accountControl(req, res) {
    try {
        let data = req.body

        let createdBranch = await bankModel.create(data)

        return res.status(201).send({ status: true, message: "Success", data: createdBranch })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }

}
module.exports = { createBranch, accountControl }



