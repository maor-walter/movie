const express = require("express");
var router = express.Router();
var commentController = require("../controllers/commentController");

async function comment(request, response, next){
    try{
        let comment = null;
        comment = await commentController.findAll();
        response.json(
            comment
        );
    }
    catch(err){}
}

async function createComment(request, response, next){
    try{
        let title   = request.body["title"];
        let author  = request.body["author"];
        let content = request.body["content"];
        let postID  = request.body["postID"];

        let comment = await commentController.createComment(title, author, content, postID);
        
        response.json(
            comment
        );
    }
    catch(err){
        next(err);
    }
}
router.get("/",comment);
router.post("/",createComment);
module.exports = router;