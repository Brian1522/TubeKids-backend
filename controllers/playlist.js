const playlistGet = (req, res) => {
    res.json({
        data: 'Video'
    });
}

const playlistPost = (req, res) => {
    res.json({
        data: 'Video Post'
    });
}

module.exports = { playlistGet, playlistPost };