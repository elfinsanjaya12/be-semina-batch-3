const Events = require('../../api/v1/events/model');

const getAllEvents = async (req) => {
  const result = await Events.find({ statusEvent: 'Published' })
    .populate('category')
    .populate('image')
    .select('_id title date tickets venueName');

  return result;
};

module.exports = { getAllEvents };
