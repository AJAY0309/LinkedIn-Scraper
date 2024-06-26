const express = require('express');
const db = require('../models');
const router = express.Router();



router.post('/', async(req, res) => {
    try {
        const name = req.body.name ? req.body.name : 'Unknown';

        const profile = await db.Profile.create({
            name: name,
            url: req.body.url,
            about: req.body.about,
            bio: req.body.bio,
            location: req.body.location,
            follower_count: req.body.follower_count,
            connection_count: req.body.connection_count
        });

        console.log("Received profile data: ", profile);

        res.status(201).json(profile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;