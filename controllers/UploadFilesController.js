const uploadFile = async (req, res) => {
    console.log(req.body.image);
    res.status(200).json({
        data: req.body.name
    })
}
module.exports = {
    uploadFile
}
