const User = require("../models/user-model");

class ProfileController {
  async getProfile(req, res, next) {
    try {
      const { id } = req.params;
      const oneUser = await User.findById(id).populate("userProjects");
      return res.json(oneUser);
    } catch (err) {
      next(err);
    }
  }

  async editProfile(req, res, next) {
    try {
      const { id } = req.params;
      const { firstName, middleName, lastName, about, location, job, url, gitHub, twitter, instagram, facebook } = req.body;
      if (firstName || middleName || about || location || job || url || gitHub || twitter || instagram || facebook) {
        const editUser = await User.findOneAndUpdate(
          { _id: id },
          {
            firstName,
            middleName,
            lastName,
            about,
            location,
            job,
            url,
            gitHub,
            twitter,
            instagram,
            facebook,
          },
          { new: true }
        );
        console.log(editUser);
        return res.json(editUser);
      } else {
        const editUserSkills = await User.findByIdAndUpdate(id, { skills: req.body }, { new: true });
        return res.json(editUserSkills);
      }
    } catch (err) {
      next(err);
    }
  }

  async uploadProfileImg(req, res, next) {
    try {
      const { id } = req.params;
      await User.findByIdAndUpdate(id, { image: req.body.url });
      return res.json({ url: req.body.url });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProfileController();
