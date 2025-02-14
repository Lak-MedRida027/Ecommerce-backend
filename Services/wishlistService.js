const asyncHandler = require("express-async-handler");

const userModel = require("../Modules/userModule");


// @desc Add product to wishlist
// @route POST /api/v1/wishlist
// @access Protected/User
exports.addProductToWishlist = asyncHandler( async (req, res, next) =>{
    // $addToSet => add productId to wishlist array if productId not exist
    const user = await userModel.findByIdAndUpdate(req.user._id, {
        $addToSet: {wishlist: req.body.productId}
    },{
        new: true,
    })

    res.status(200).json({ status: "success", message: "Product added successfully to wishlist",data: user.wishlist })
})

// @desc Remove product from wishlist
// @route DELETE /api/v1/wishlist/:productId
// @access Protected/User
exports.removeProductToWishlist = asyncHandler( async (req, res, next) =>{
    // $pull => remove productId from wishlist array if productId exist
    const user = await userModel.findByIdAndUpdate(req.user._id, {
        $pull: {wishlist: req.params.productId}
    },{
        new: true,
    })

    res.status(200).json({ status: "success", message: "Product removed successfully from wishlist",data: user.wishlist })
})

// @desc Get logged user wishlist
// @route GET /api/v1/wishlist
// @access Protected/User
exports.getLoggedUserWishlist = asyncHandler( async (req, res, next) =>{
    const user = await userModel.findById(req.user._id).populate("wishlist");

    res.status(200).json({ status: "success", result: user.wishlist.length ,data: user.wishlist })
})