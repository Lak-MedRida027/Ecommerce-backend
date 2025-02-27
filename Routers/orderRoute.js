const express = require("express");

const router = express.Router();

const authorization = require("../Services/authService");

const {
  createCashOrder,
  getAllOrders,
  getLoggedUserOrder,
  FilterOrderObj,
  updateOrderToPaid,
  updateOrderToDelivered,
  createCheckoutSession
} = require("../Services/orderService");

router.use(authorization.protect);

router.post("/checkout-session/:cartId", authorization.allowedTo("user") , createCheckoutSession)
router.route("/:cartId").post(authorization.allowedTo("user"), createCashOrder);
router.get(
  "/",
  authorization.allowedTo("user", "admin", "manager"),
  FilterOrderObj,
  getAllOrders
);
router.get(
  "/:id",
  authorization.allowedTo("user", "admin", "manager"),
  getLoggedUserOrder
);
router.put("/:id/pay", authorization.allowedTo("admin", "manager"), updateOrderToPaid)
router.put("/:id/deliver", authorization.allowedTo("admin", "manager"), updateOrderToDelivered)

module.exports = router;
