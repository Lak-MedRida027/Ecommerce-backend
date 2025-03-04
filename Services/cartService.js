const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");

const Cart = require("../Modules/cartModule");
const Product = require("../Modules/productModule");
const Coupon = require("../Modules/couponModule");

const calcTotalCartPrice = (cart) => {
  let totalPrice = 0;

  cart.cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return totalPrice;
};

// @desc Add product to cart
// @route POST /api/v1/cart
// @ access Privete/User
exports.addProductToCart = asyncHandler(async (req, res, next) => {
  const { productId, color } = req.body;
  const product = await Product.findById(productId);

  //* 1)- Get user cart
  let cart = await Cart.findOne({ user: req.user._id });

  //* 2)- check product cases
  if (!cart) {
    //* cart doesn't exist ==> create cart
    cart = await Cart.create({
      user: req.user._id,
      cartItems: [{ product: productId, color, price: product.price }],
    });
  } else {
    //* product exist in it ==> update quantity
    const productIndex = cart.cartItems.findIndex(
      (item) => item.product.toString() === productId && item.color === color
    );

    if (productIndex > -1) {
      const cartItem = cart.cartItems[productIndex];
      cartItem.quantity += 1;

      cart.cartItems[productIndex] = cartItem;
    } else {
      //* product doesn't exist ==> push new product
      cart.cartItems.push({
        product: productId,
        color,
        price: product.price,
        quantity: 1,
      });
    }
  }

  //* calc total cart price
  const totalPrice = calcTotalCartPrice(cart);

  cart.totalCartPrice = totalPrice;
  await cart.save();

  res
    .status(200)
    .json({
      status: "success",
      message: "Product added successfully",
      nbrCartItem: cart.cartItems.length,
      data: cart,
    });
});

// @desc Get user cart
// @route GET /api/v1/cart
// @ access Privete/User
exports.getLoggedUserCart = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    return next(
      new ApiError(`There's no cart for this user id: ${req.user._id}`, 404)
    );
  }

  res.status(200).json({ status: "success", nbrCartItem: cart.cartItems.length, data: cart });
});

// @desc Remove specific item from user cart
// @route DELETE /api/v1/cart/:itemId
// @ access Privete/User
exports.removeItemFromCart = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findOneAndUpdate(
    { user: req.user._id },
    {
        $pull: { cartItems: { _id: req.params.itemId } },
    },
    { new: true }
  );

  const totalPrice = calcTotalCartPrice(cart);

  cart.totalCartPrice = totalPrice;
  await cart.save();

  res.status(200).json({ status: "success", message: "Item removed successfully", nbrCartItem: cart.cartItems.length, data: cart });
});

// @desc Clear user cart
// @route DELETE /api/v1/cart
// @ access Privete/User
exports.clearUserCart = asyncHandler(async (req, res, next) =>{
    await Cart.findOneAndDelete({ user: req.user._id })

    res.status(204).send();
})

// @desc Update quantity of specific item 
// @route PUT /api/v1/cart/:itemId
// @ access Privete/User
exports.updateItemQty = asyncHandler(async (req, res, next) =>{
    const { quantity } = req.body;
    const cart = await Cart.findOneAndUpdate({ user: req.user._id })

    if(!cart){
        return next(new ApiError(`There is no cart for this user id: ${req.user._id}`,404));
    }

    const itemIndex = cart.cartItems.findIndex((item) => item._id.toString() === req.params.itemId )
    if(itemIndex > -1){
        const cartItem = cart.cartItems[itemIndex]
        cartItem.quantity = quantity
        cart.cartItems[itemIndex] = cartItem
    }else{
        return next(new ApiError(`No item found with this id: ${req.params.itemId}`,404));
    }

    const totalPrice = calcTotalCartPrice(cart);

    cart.totalCartPrice = totalPrice;
    await cart.save();

    res.status(200).json({ status: "success", nbrCartItem: cart.cartItems.length, data: cart });
})

// @desc Apply coupon  
// @route PUT /api/v1/cart/applyCoupon
// @ access Privete/User
exports.applyCoupon = asyncHandler( async (req, res, next) =>{
    //* 1) get coupon and check it
    const coupon = await Coupon.findOne({ name: req.body.coupon, expire: {$gt: Date.now()}})

    if(!coupon){
        return next(new ApiError(`Coupon not found or expired`, 404));
    }

    //* 2) get user cart
    const cart = await Cart.findOne({ user: req.user._id })

    const totalPrice = cart.totalCartPrice

    //* 3) apply coupon 
    const totalCartPriceAfterDiscount = (totalPrice - (totalPrice * coupon.discount) / 100).toFixed(2);

    cart.totalCartPriceAfterDiscount = totalCartPriceAfterDiscount
    await cart.save();

    res.status(200).json({ status: "success", message: "Coupon applied", nbrCartItem: cart.cartItems.length, data: cart });
})