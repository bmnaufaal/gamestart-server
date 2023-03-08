const { Wishlist } = require("../models");

async function authorization(req, res, next) {
  try {
    const { id } = req.params;
    const foundWishlist = await Wishlist.findByPk(id);
    if (!foundWishlist) throw { name: "NotFound" };
    if (foundWishlist.UserId !== req.user.id) throw { name: "Forbidden" };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authorization;
