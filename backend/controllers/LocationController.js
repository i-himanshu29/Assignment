const axios = require('axios');
const Location = require('../models/LocationModel'); // Import Location model

const getCoordinates = async (req, res) => {
  const { address } = req.body;
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${process.env.GOOGLE_MAPS_API_KEY}`
    );

    const coordinates = response.data.results[0].geometry.location;

    // Optional: Save location in the database
    const location = new Location({
      userId: req.user.id, // Assume authentication middleware adds req.user
      address,
      latitude: coordinates.lat,
      longitude: coordinates.lng,
    });
    await location.save();

    res.json(coordinates); // Send back coordinates to the frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching coordinates' });
  }
};

module.exports = { getCoordinates };
