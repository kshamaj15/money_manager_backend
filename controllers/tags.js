const Tags = require('../models/tags')

const addTag = async (req, res) => {
    await Tags.create(req.body).then((data, err) => {
        if(err)
        res.status(500).json({error: err});
        res.status(201).json({
            message: 'tag added Successfully',
            tagObj: data
        })
    })
}

const deleteTag = async(req, res) => {
    let id = req.params.id;
    if(id) {
        Tags.findByIdAndRemove(id).then((data, err) => {
            if(err)
            res.status(500).json({error: err});
            res.status(200).json({
                message: 'Tage Deleted Successfully'
            })
        })
    }
}

const getTag = async (req, res) => {
    let type = req.params.type;
    let query = {};
    if(type){
        query.type = type
    }
    await Tags.find().then((data, err) => {
        if(err)
        res.status(500).json({error: err});
        res.status(200).json({
            tagObj: data
        })
    })
}

module.exports = {
    addTag, getTag, deleteTag
}
