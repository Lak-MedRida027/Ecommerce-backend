const asyncHandler = require("express-async-handler");

const userModel = require("../Modules/userModule");


// @desc Add address to user address list
// @route POST /api/v1/addresses
// @access Protected/User
exports.addAddress = asyncHandler( async (req, res, next) =>{
    const user = await userModel.findByIdAndUpdate(req.user._id, {
        $addToSet: {addresses: req.body}
    },{
        new: true,
    })

    res.status(200).json({ status: "success", message: "Address added successfully",data: user.addresses })
})

// @desc Remove address from user address list
// @route DELETE /api/v1/addresses/:addressId
// @access Protected/User
exports.removeAddress = asyncHandler( async (req, res, next) =>{
    const user = await userModel.findByIdAndUpdate(req.user._id, {
        $pull: {addresses: {_id: req.params.addressId}}
    },{
        new: true,
    })

    res.status(200).json({ status: "success", message: "Address removed successfully",data: user.addresses })
})

// @desc Get logged user addresses
// @route GET /api/v1/addresses
// @access Protected/User
exports.getLoggedUserAddresses = asyncHandler( async (req, res, next) =>{
    const user = await userModel.findById(req.user._id);

    res.status(200).json({ status: "success", result: user.addresses.length ,data: user.addresses })
})