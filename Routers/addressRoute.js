const express = require("express");

const router = express.Router();

const authorization = require("../Services/authService");

const {
    addAddress,
    removeAddress,
    getLoggedUserAddresses,
} = require("../Services/addressService");

router.use(authorization.protect, authorization.allowedTo("user"));

router.route("/").post(addAddress).get(getLoggedUserAddresses);

router.route("/:addressId").delete(removeAddress);

module.exports = router;
