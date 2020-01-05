const   mongoose = require("mongoose"),
        Campground = require("./models/campground"),
        Comment = require("./models/comment"),
        commentSchema = {
                userID: 'Number',
                comment: 'String',
        }

module.exports = mongoose.model("Comment", commentSchema);