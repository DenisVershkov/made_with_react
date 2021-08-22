const express = require("express");
const projectRouter = express.Router();
const ProjectController = require("../controllers/projectController");

projectRouter.post('/newProject', ProjectController.createProject)
projectRouter.put('/:projectId/comment', ProjectController.createComment)
projectRouter.get('/all/:projectId', ProjectController.getAllComments)
projectRouter.get('/', ProjectController.getAllProjects)
projectRouter.get('/:id', ProjectController.getOneProjects)
projectRouter.patch('/:id', ProjectController.getLikeForProjects)
projectRouter.put('/:id', ProjectController.editProject)
projectRouter.delete('/:id', ProjectController.deleteProject)
projectRouter.patch('/views/:projectId', ProjectController.updateViewsProject)



module.exports = projectRouter;
