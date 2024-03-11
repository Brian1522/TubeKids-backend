const Playlist = require("../models/playlist")

const playlistGet = (req, res) => {
    res.json({
        data: 'Video'
    });
}

const playlistPost = async (req, res) => {
    const { name, url } = req.body;

    const playlist = new Playlist({
        name, url
    });

    await playlist.save(); // se guarda
    res.status(201).json({
        msg: 'Playlist created',
        playlist
    })
}


module.exports = { playlistGet, playlistPost };