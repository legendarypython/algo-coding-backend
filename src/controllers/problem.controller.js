const {StatusCodes} = require('http-status-codes')


function ping(req, res) {
    return res.json({ message: "Problem Controller is working" });
}

function addProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message: "Method not Implemented"});

}

function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message: "Method not Implemented"});
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message: "Method not Implemented"});
}

function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message: "Method not Implemented"});
}

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message: "Method not Implemented"});
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    ping
};
