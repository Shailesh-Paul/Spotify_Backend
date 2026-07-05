const musicModel = require("../models/music.model");
const {uploadFile} = require("../services/storage.service")
const albumModel = require("../models/album.model")
const jwt = require('jsonwebtoken')


async function createMusic(req, res) {
    

    const {title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))

    console.log(musicModel);
console.log(typeof musicModel);

    const music = await musicModel.create({
        uri:result.url,
        title,
        artist:req.user.id,
    })

    res.status(201).json({
        message:"Music created successfully",
        music :{
            id:music._id,
            uri:music.uri,
            title:music.title,
            artist:req.user.id,
        }
    })



}
   

    




async function createAlbum(req, res) {

   

        const {title , musics} = req.body;

        const album = await albumModel.create({
            title,
            artist:req.user.id,
            music :musics,
        })

        return res.status(201).json({
            message :"Album created successfully",
            album:{
                id:album._id,
                title:album.title,
                artist: req.user.id,
                music:album.music,
            }
        })

    
}


async function getAllMusics(req, res){
    const musics = await musicModel.find().populate("artist", "username email")

    res.status(200).json({
        message:"Musics fetched successfully",
        musics:musics,
    })
}

async function getAllAlbums(req, res){
    const albums = await albumModel.find().select("title artist ").populate("artist", "username email").populate("musics")

  return   res.status(200).json({
        message:"Fetched all  album successfully",
        albums:albums,
    })
}


async function getAlbumById(req, res){

const albumId = req.params.albumId;

const album = await albumModel.findById(albumId).populate("artist", "username email" ).populate("musics")

return  res.status(200).json({
        message:"Fetched all  album successfully",
        album:album,
    })

}

module.exports = {createMusic, createAlbum , getAllMusics , getAllAlbums , getAlbumById};