module.exports = class UserDto {
  email;
  id;
  isActivated;
  skills;


  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.skills = model.skills;
    this.info = { firstName: model.firstName, middleName: model.middleName, lastName: model.lastName, about: model.about, location: model.location, job: model.job, gitHub: model.gitHub, twitter: model.twitter, instagram: model.instagram, facebook: model.facebook, userProjects: model.userProjects }
    this.image = model.image
    this.userProjects = model.userProjects
  }
};
