const Playlist = require("../models/playlist")

const playlistGet = async (req, res) => {
    const playlist = await Playlist.find({ status: true }); // trae todas las playlist en true
    const totalplaylist = await Playlist.countDocuments({status:true}); // total de playlist
    res.json({
        playlist,
        totalplaylist

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

const playlistDelete = async (req, res) => {
    const { id } = req.params;

    const playlist = await Playlist.findByIdAndUpdate(id, { status: false });

    res.json({
        msg: 'Playlist deleted',
        playlist
    })
}
//Actualiza playlist
const playlistPut = async (req, res) => {
    const {id } = req.params;
    const { ...rest } = req.body; // trae todo post

    const playlist = await Playlist.findByIdAndUpdate(id, rest);

    res.status(200).json({
        msg: 'Playlist edited',
        playlist
    })
}
module.exports = { playlistGet, playlistPost, playlistDelete,playlistPut };