const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    rank: {type: Number},
    team_name: {type: String},
    total_games_played:{type: Number},
    score:{type: Number},
    team_icon:{type: String},
    has_badge:{type: Boolean},
    team_badge:{type: String},
})

const boardModel = mongoose.model('Model', dataSchema)

module.exports=boardModel;