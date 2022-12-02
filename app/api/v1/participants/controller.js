const { getAllEvents } = require('../../../services/mongoose/participants');

const { StatusCodes } = require('http-status-codes');

const getAllLandingPage = async (req, res, next) => {
  try {
    const result = await getAllEvents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllLandingPage };
