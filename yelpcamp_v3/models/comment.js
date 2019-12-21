const   mongoose = require("mongoose"),
        Campground = require("./campground"),
        Comment = require("./comment"),
        commentSchema = {
                userID: 'Number',
                comment: 'String',
        }

module.exports = mongoose.model("Comment", commentSchema);