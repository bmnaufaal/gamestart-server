const { Wishlist, Profile } = require("../models");

async function wishlistAuthorization(req, res, next) {
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

async function profileAuthorization(req, res, next) {
  try {
    const id = req.user.id;
    const foundProfile = await Profile.findOne({
      where: {
        id: id,
      },
    });
    if (!foundProfile) throw { name: "Forbidden" };
    if (foundProfile.UserId !== req.user.id) throw { name: "Forbidden" };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { wishlistAuthorization, profileAuthorization };
