const express = require('express');
const { ProblemController } = require('../../controllers'); // Import ProblemController from controllers

const problemRouter = express.Router(); 

problemRouter.get('/ping', ProblemController.ping);

problemRouter.get('/:id', ProblemController.getProblem); 
problemRouter.get('/', ProblemController.getProblems); 
problemRouter.post('/', ProblemController.addProblem); 
problemRouter.delete('/:id', ProblemController.deleteProblem); 
problemRouter.put('/:id', ProblemController.updateProblem); 


// Add middleware to log and handle the /ping route

module.exports = problemRouter;
